import React from "react";
import { Request, Response } from "express";
import Logger from "../src/utils/Logger";
import DataLoader from "../src_ssr/data-loader";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router";
import { ServerStyleSheets, ThemeProvider } from "@material-ui/core/styles";
import { ServerStyleSheet } from "styled-components";
import serialize from "serialize-javascript";
import AppSSR from "../src/AppSSRAdmin";
import { buildHtmlPage, buildMeta, HtmlBuildParts } from "../src_ssr/html-builder";
import { createTheme } from "@material-ui/core/styles";
import AppStaticCtx from "../src/utils/AppStaticCtx";
import { DataLoaderResponse } from "../src_ssr/data-loader";
import DefaultMeta from "../src_ssr/default-meta";

const SiteRoot = process.env.SITE_ROOT;

const Log = Logger.getLogger("ssrMiddleware");

export default async function ssrMiddleware(
	httpReq: Request,
	httpResp: Response,
	baseContent: string,
	buildParts: HtmlBuildParts
) {
	try {
		Log.direct(`Handle for request of url: ${httpReq.url}`);
		let reqTime = new Date();

		const muiSheets = new ServerStyleSheets();
		let muiStyle: string = "";
		const scSheet = new ServerStyleSheet();
		let scStyle: string = "";
		let appComponent: string = "";

		let loaderData: DataLoaderResponse = {
			meta: DefaultMeta,
		};
		try {
			loaderData = await DataLoader.getInstance().load(httpReq);
		} catch (lerr) {
			loaderData.error = true;
			console.error(lerr);
		}

		let context: AppStaticCtx = {
			isSSR: true,
			data: loaderData.data,
		};
		// Log.direct(`context: `, context);

		try {
			//generate app code
			appComponent = ReactDOMServer.renderToString(
				scSheet.collectStyles(
					muiSheets.collect(
						<StaticRouter
							location={httpReq.url}
							context={context}>
							<ThemeProvider theme={createTheme()}>
								<AppSSR />
							</ThemeProvider>
						</StaticRouter>
					)
				)
			);

			//material style
			muiStyle = muiSheets.toString();
			scStyle = scSheet.getStyleTags();
		} finally {
			scSheet.seal();
		}

		//set http status
		/*if (context.status === 404) {
			httpResp.status(404);
		}*/
		if (context.url) {
			return httpResp.redirect(301, context.url);
		}

		let httpMeta = buildMeta(loaderData.meta || null, SiteRoot + httpReq.url);

		//generate html
		let httpContent = buildHtmlPage(
			buildParts,
			baseContent,
			httpMeta || "",
			scStyle,
			muiStyle,
			appComponent,
			loaderData.raw,
			loaderData.meta?.title,
			loaderData.error
		);

		Log.direct(`Request handled duration: ${new Date().getTime() - reqTime.getTime()}`);

		return httpResp.send(httpContent);
	} catch (err) {
		console.error(err);
		return httpResp.status(500).send("Server rendering failed!");
	}
}

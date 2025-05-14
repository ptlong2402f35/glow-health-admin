import { PageMeta } from "./data-loader";
import serialize from "serialize-javascript";
import { SsrIsErrorVar, SsrRawDataVar } from "../src/views/controls/common/StaticContextWrap";
import environments from "../src/environment";
import useStaticContext from "../src/views/hooks/useStaticContext";
import { removeVietnameseTones } from "../src/views/hooks/useUnMark";

export type HtmlInsertPositions = {
	beginHtml: number;
	endHtml: number;
	beginHead: number;
	endHead: number;
	beginBody: number;
	endBody: number;
	beginTitle: number;
	endTitle: number;
	beginApp: number;
	endApp: number;
};

const htmlBeginWord = `<html lang="en">`;
const htmlEndWord = "</html>";
const headBeginWord = "<head>";
const headEndWord = "</head>";
const bodyBeginWord = "<body>";
const bodyEndWord = "</body>";
const titleBeginWord = "<title>";
const titleEndWord = "</title>";
const appBeginWord = `<div id="app"></div>`;

export function getHtmlInsertPositions(baseContent: string): HtmlInsertPositions {
	return {
		beginHtml: baseContent.indexOf(htmlBeginWord) + htmlBeginWord.length,
		endHtml: baseContent.indexOf(htmlEndWord),
		beginHead: baseContent.indexOf(headBeginWord) + headBeginWord.length,
		endHead: baseContent.indexOf(headEndWord),
		beginBody: baseContent.indexOf(bodyBeginWord) + bodyBeginWord.length,
		endBody: baseContent.indexOf(bodyEndWord),
		beginTitle: baseContent.indexOf(titleBeginWord) + titleBeginWord.length,
		endTitle: baseContent.indexOf(titleEndWord),
		beginApp: baseContent.indexOf(appBeginWord),
		endApp: baseContent.indexOf(appBeginWord) + appBeginWord.length,
	};
}

export type HtmlBuildParts = {
	positions: HtmlInsertPositions;
	partPreBeginHtml: string;
	partBeginHtmlBeginHead: string;
	partBeginHeadBeginTitle: string;
	partBeginTitleEndTitle: string;
	partEndTitleEndHead: string;
	partEndHeadBeginBody: string;
	partBeginBodyBeginApp: string;
	partBeginAppEndApp: string;
	partEndAppEndBody: string;
	partEndBodyEndHtml: string;
	partEndHtmlPost: string;
};

export function investigateBaseContent(baseContent: string): HtmlBuildParts {
	let positions = getHtmlInsertPositions(baseContent);

	return {
		positions: positions,
		partPreBeginHtml: baseContent.substring(0, positions.beginHtml),
		partBeginHtmlBeginHead: baseContent.substring(positions.beginHtml, positions.beginHead),
		partBeginHeadBeginTitle: baseContent.substring(positions.beginHead, positions.beginTitle),
		partBeginTitleEndTitle: baseContent.substring(positions.beginTitle, positions.endTitle),
		partEndTitleEndHead: baseContent.substring(positions.endTitle, positions.endHead),
		partEndHeadBeginBody: baseContent.substring(positions.endHead, positions.beginBody),
		partBeginBodyBeginApp: baseContent.substring(positions.beginBody, positions.beginApp),
		partBeginAppEndApp: baseContent.substring(positions.beginApp, positions.endApp),
		partEndAppEndBody: baseContent.substring(positions.endApp, positions.endBody),
		partEndBodyEndHtml: baseContent.substring(positions.endBody, positions.endHtml),
		partEndHtmlPost: baseContent.substring(positions.endHtml, baseContent.length),
	};
}

/**
 * build html string to render a page
 * @param parts HtmlBuildParts structured before
 * @param baseContent content of base index.html
 * @param metaHtml page meta as html content
 * @param styleHtml styling code as html content
 * @param styleContent styling code as raw css content
 * @param componentHtml content of app component
 * @param rawData raw data set to context
 * @param title page title
 */
export function buildHtmlPage(
	parts: HtmlBuildParts,
	baseContent: string,
	metaHtml: string,
	styleHtml: string,
	styleContent: string,
	componentHtml: string,
	rawData: any,
	title?: string | null,
	rawError?: boolean,
	enableScript?: boolean,
) {
	return (
		parts.partPreBeginHtml +
		parts.partBeginHtmlBeginHead +
		parts.partBeginHeadBeginTitle +
		(title || parts.partBeginTitleEndTitle) +
		parts.partEndTitleEndHead +
		metaHtml +
		styleHtml +
		`<style>${styleContent}</style>` +
		parts.partEndHeadBeginBody +
		parts.partBeginBodyBeginApp +
		
		(environments.isLanding
			? (enableScript ?
				(
				`<script>window.${SsrRawDataVar} = ${serialize(rawData)}</script>` +
				`<script>window.${SsrIsErrorVar} = ${rawError ? true : false}</script>`)
				:"")
			: `<script>window.${SsrRawDataVar} = ${serialize(rawData)}</script>` +
			  `<script>window.${SsrIsErrorVar} = ${rawError ? true : false}</script>`) +
			
		`<div id="app">${componentHtml}</div>` +
		parts.partEndAppEndBody +
		(enableScript ?
			`<script src="/public_landing/index_bundle.js"></script>`
			:"") 
			+
		parts.partEndBodyEndHtml +
		parts.partEndHtmlPost
	
	);
}
export function buildMeta(meta: PageMeta | null, url: string): string | null {
	if (!meta) {
		return null;
	}
	var res = "";

	if (meta.description) {
		res += `<meta name="description" content="${escapeHtml(meta.description)}" />`;
	}
	if (meta.ogTitle) {
		res += `<meta property="og:title" content="${escapeHtml(meta.ogTitle)}" />`;
	}
	if (meta.ogDescription) {
		res += `<meta property="og:description" content="${escapeHtml(meta.ogDescription)}" />`;
	}
	res += `<meta property="og:type" content="${escapeHtml(meta.ogType || "website")}" />`;
	res += `<meta property="og:url" content="${escapeHtml(meta.ogUrl || url)}">`;
	res += `<meta property="og:site_name" content="${escapeHtml(meta.ogSiteName || "Glow")}">`;
	if (meta.ogImage) {
		res += `<meta property="og:image" content="${escapeHtml(meta.ogImage)}" />`;
	}
	if (meta.canonical) {
		res += `<link rel="canonical" href="${escapeHtml(meta.canonical)}" />`;
	}
	if (meta.hreflang) {
		for (let i = 0; i < meta.hreflang.length; i++) {
			const link = meta.hreflang[i];
			res += `<link rel="alternate" hreflang="${escapeHtml(link.lang)}" href="${escapeHtml(link.url)}" />`;
		}
	}
	if (meta.structuredData) {
		res += `<script type="application/ld+json">${JSON.stringify(meta.structuredData)}</script>`;
	}
	if (meta.LocalBusiness) {
		res += `<script type="application/ld+json">${JSON.stringify(meta.LocalBusiness)}</script>`;
	}
	if (environments.newStyle === true) {
		res += `
			<script async src="https://www.googletagmanager.com/gtag/js?id=${environments.gaKey}"></script>
		<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', '${environments.gaKey}');
		</script>
		`;
		res += `<script type="module" src="./static/firebase.js"></script>`;
		res += `<script src="./static/eventFireBase.js"></script>`;
	}
	if (meta.robots) {
		res += `<meta name="robots" content="${meta.robots}"/>`;
	}
	if (meta.keyword) {
		res += `<meta name="keywords" content="${removeVietnameseTones(meta.keyword || "")}"/>`;
	}
	if (meta.prev) {
		res += `<link rel="prev" href="${meta.prev}"/>`;
	}
	if (meta.next) {
		res += `<link rel="next" href="${meta.next}"/>`;
	}
	// if (meta.enableScript) {
	// 	res += `<meta name="enable-script" content="${meta.enableScript}"/>`;
	// }


	return res;
}

function escapeHtml(unsafe: string): string {
	return unsafe
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");
}

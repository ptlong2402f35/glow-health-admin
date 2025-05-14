import express, { Express } from "express";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import Logger from "../src/utils/Logger";
import ssrMiddleware from "./middleware";
import { investigateBaseContent } from "../src_ssr/html-builder";
import environments, { loadEnvironments } from "../src/environment";
import DataLoader from "../src_ssr/data-loader";

dotenv.config();
loadEnvironments();
console.log(`Loaded environments: `, environments);
DataLoader.register();

const Log = Logger.getLogger("indexSSR");
const app: Express = express();
const Port = process.env.PORT ? parseInt(process.env.PORT) : 0;

//static serve
app.use("/public_admin", express.static("public_admin"));
app.use("/static", express.static("src/static"));
app.use("/root.txt", express.static("root.txt"));

//prepare index content
const indexFile = path.resolve("./src_ssr_admin/index.html");
const baseContent = fs.readFileSync(indexFile, "utf8");
const buildParts = investigateBaseContent(baseContent);
// Log.direct(`buildParts: `, buildParts);

async function start() {
	/*another async prepare here*/

	//handle GET
	app.get("/*", (req, resp) => ssrMiddleware(req, resp, baseContent, buildParts));

	app.listen(Port, () => {
		Log.direct(`Server is listening on port ${Port}`);
	});
}

start();

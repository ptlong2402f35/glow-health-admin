import { StaticRouterContext } from "react-router";

export default interface AppStaticCtx extends StaticRouterContext {
	isSSR: boolean;
	data: any;
	newStyle?: boolean;
}

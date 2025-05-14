import React, { useState } from "react";
import { Route } from "react-router";
import Logger from "../../../../utils/Logger";
import StaticContextWrap from "../../common/StaticContextWrap";
import { StyledTransformRoute } from "./StyledTransformRoute";
import { FadeStatus } from "./TransformRoute";

const Log = Logger.getLogger("SSRTransformRoute");

export default function SSRTransformRoute(props: {
	children: JSX.Element | JSX.Element[] | string | string[];
	path: string;
	exact?: boolean;
	id?: string;
}) {
	return (
		<Route
			exact={props?.exact}
			path={props?.path}
			render={({ match, staticContext }) => (
				<PageTransformWrap
					id={props.id}
					match={match}>
					<StaticContextWrap staticContext={staticContext}>{props.children}</StaticContextWrap>
				</PageTransformWrap>
			)}></Route>
	);
}

export function PageTransformWrap(props: {
	children: JSX.Element | JSX.Element[] | string | string[];
	match: any;
	id?: string;
}) {
	const [fade, setFade] = useState<FadeStatus>(props.match ? FadeStatus.Appeared : FadeStatus.Faded);

	if (fade == FadeStatus.Appeared) {
		return <StyledTransformRoute className="trans-wrapper appeared">{props.children}</StyledTransformRoute>;
	} else {
		return <StyledTransformRoute className="trans-wrapper fade" />;
	}
}

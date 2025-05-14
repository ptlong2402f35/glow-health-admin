import React, { useContext, useEffect, useState } from "react";
import { Route } from "react-router";
import Logger from "../../../../utils/Logger";
import usePrevious, { usePreviousConcrete } from "../../../hooks/usePrevious";
import { StyledTransformRoute } from "./StyledTransformRoute";

const Log = Logger.getLogger("TransformRoute");

export default function TransformRoute(props: {
	children: JSX.Element | JSX.Element[] | string | string[];
	path: string;
	exact?: boolean;
	id?: string;
}) {
	return (
		<Route
			exact={props?.exact}
			path={props?.path}>
			{({ match }) => (
				<PageTransformWrap
					id={props.id}
					match={match}>
					{props.children}
				</PageTransformWrap>
			)}
		</Route>
	);
}

export enum FadeStatus {
	Faded = -2,
	Fading = -1,
	Appearing = 1,
	Appeared = 2,
}

const FadeDelay = 200;

export function PageTransformWrap(props: {
	children: JSX.Element | JSX.Element[] | string | string[];
	match: any;
	id?: string;
}) {
	const mounted = usePrevious(true);
	const prevMatch = usePreviousConcrete(props.match);
	const [fade, setFade] = useState<FadeStatus>(props.match ? FadeStatus.Appeared : FadeStatus.Faded);

	/*Log.log(`states of ${ props.id || "(none)" }: `, {
        props.match,
        fade,
    });*/

	const beginFade = () => {
		setFade(FadeStatus.Fading);
		setTimeout(() => {
			setFade(FadeStatus.Faded);
		}, FadeDelay);
	};

	const beginAppear = () => {
		setFade(FadeStatus.Appearing);
		setTimeout(() => {
			setFade(FadeStatus.Appeared);
			window?.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		}, FadeDelay);
	};

	useEffect(() => {
		if (!mounted) return;
		if ((!props.match?.path && !prevMatch?.path) || props.match?.path == prevMatch?.path) return;

		if (props.match) {
			beginAppear();
		} else {
			beginFade();
		}
	}, [props.match]);

	if (fade == FadeStatus.Faded) {
		return <StyledTransformRoute className="trans-wrapper fade" />;
	} else if (fade == FadeStatus.Fading) {
		return <StyledTransformRoute className="trans-wrapper fading">{props.children}</StyledTransformRoute>;
	} else if (fade == FadeStatus.Appearing) {
		return <StyledTransformRoute className="trans-wrapper appearing">{props.children}</StyledTransformRoute>;
	} else if (fade == FadeStatus.Appeared) {
		return <StyledTransformRoute className="trans-wrapper appeared">{props.children}</StyledTransformRoute>;
	} else {
		return <StyledTransformRoute className="trans-wrapper fade" />;
	}
}

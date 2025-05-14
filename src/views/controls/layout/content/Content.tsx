import React from "react";
import { StyledContent } from "./StyledContent";

export default function Content(props: {
	children: JSX.Element | JSX.Element[] | string | string[];
	fullScreen?: boolean;
}) {
	return <StyledContent fullScreen={props.fullScreen ? true : false}>{props.children}</StyledContent>;
}

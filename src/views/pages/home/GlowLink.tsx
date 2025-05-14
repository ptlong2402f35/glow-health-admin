import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../controls/layout/content/MultiLanguge";

export function GlowLink(props: {
	to: string;
	children: JSX.Element | JSX.Element[] | string | string[];
	style?: React.CSSProperties;
	className?: string;
	onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}) {
	const { lang } = useLanguage();
	let toLink = `/${lang}` + props.to;
	// if (lang === "vi") {
	//     toLink = props.to;
	// }
	return (
		<Link
			to={toLink}
			style={props.style}
			className={props.className}
			onClick={props.onClick}>
			{props.children}
		</Link>
	);
}

export function GlowA(props: {
	to: string;
	children: JSX.Element | JSX.Element[] | string | string[];
	style?: React.CSSProperties;
	className?: string;
	onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}) {
	const { lang } = useLanguage();
	let toLink = `/${lang}` + props.to;
	// if (lang === "vi") {
	//     toLink = props.to;
	// }
	return (
		<a
			href={toLink}
			style={props.style}
			className={props.className}
			onClick={props.onClick}>
			{props.children}
		</a>
	);
}

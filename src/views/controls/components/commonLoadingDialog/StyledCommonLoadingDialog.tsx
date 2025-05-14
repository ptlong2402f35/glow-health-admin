import styled from "styled-components";
import { DialogWrapBody } from "../dialogWrap/StyledDialogWrap";

export const LoadingDialogWrapBody = styled(DialogWrapBody)`
	padding-top: 0px;
	padding-bottom: 0px;
`;

export const LoadingDialogBody = styled.div`
	width: 250px;
	height: 250px;
	overflow: hidden;
	color: var(--text-color);

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const LoaderItem = styled.div`
	&,
	&:after {
		border-radius: 50%;
		width: 10em;
		height: 10em;
	}

	& {
		margin: 60px auto;
		font-size: 10px;
		position: relative;
		text-indent: -9999em;
		border-top: 1.1em solid rgba(50, 90, 111, 0.2);
		border-right: 1.1em solid rgba(50, 90, 111, 0.2);
		border-bottom: 1.1em solid rgba(50, 90, 111, 0.2);
		border-left: 1.1em solid var(--text-color);
		-webkit-transform: translateZ(0);
		-ms-transform: translateZ(0);
		transform: translateZ(0);
		-webkit-animation: load8 1.1s infinite linear;
		animation: load8 1.1s infinite linear;
	}

	@-webkit-keyframes load8 {
		0% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}

	@keyframes load8 {
		0% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}
`;

export const PopupLoadingDialogWrapBody = styled(DialogWrapBody)`
	padding-top: 0px;
	padding-bottom: 0px;
`;

export const PopupLoadingDialogText = styled.div`
	text-align: center;
	margin-bottom: 12px;
	font-size: 16px;
	color: var(--text-color);
`;

export const PopupLoadingDialogBody = styled.div`
	height: 130px;
	overflow: hidden;
`;

export const PopupLoaderItem = styled.div`
	&,
	&:before,
	&:after {
		background: rgb(87, 157, 45);
		-webkit-animation: load1 1s infinite ease-in-out;
		animation: load1 1s infinite ease-in-out;
		width: 1em;
		height: 4em;
	}

	& {
		color: rgb(87, 157, 45);
		text-indent: -9999em;
		margin: 50px auto;
		position: relative;
		font-size: 11px;
		-webkit-transform: translateZ(0);
		-ms-transform: translateZ(0);
		transform: translateZ(0);
		-webkit-animation-delay: -0.16s;
		animation-delay: -0.16s;
	}

	&:before,
	&:after {
		position: absolute;
		top: 0;
		content: "";
	}

	&:before {
		left: -1.5em;
		-webkit-animation-delay: -0.32s;
		animation-delay: -0.32s;
	}

	&:after {
		left: 1.5em;
	}

	@-webkit-keyframes load1 {
		0%,
		80%,
		100% {
			box-shadow: 0 0;
			height: 4em;
		}
		40% {
			box-shadow: 0 -2em;
			height: 5em;
		}
	}

	@keyframes load1 {
		0%,
		80%,
		100% {
			box-shadow: 0 0;
			height: 4em;
		}
		40% {
			box-shadow: 0 -2em;
			height: 5em;
		}
	}
`;

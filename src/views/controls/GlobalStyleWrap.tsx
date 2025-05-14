import React, { useContext } from "react";
import { createGlobalStyle, css } from "styled-components";
import { PublicComponentsWrapContext } from "./public/PublicComponentsWrap";

export function GlobalStyleWrap() {
	const ctx = useContext(PublicComponentsWrapContext);
	return <GlobalStyle fullScreen={ctx?.isFullScreen ? true : false} />;
}

export const GlobalStyle = createGlobalStyle<{
	fullScreen?: boolean;
}>`
    * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    :root {
        --primary-colorv2:rgb(218, 185, 223);
        --primary-color: #679C54;
        --text-color: rgb(106, 47, 102);
        --text-color2: #5d7d8d;
        --text-color3: #a5b6bf;
        --text-color0: #113f57;
        --text-color1v2:#222222;
        --text-color2v2: #484848;
        --border-color: #d9e0e4;
        --link-color: #5d5fef;
        --alert-color: #f05050;
        --primary-bold-color: #2d6809;
        --background-color: #e0e9dd;
    
        --primary-color-blur: #9ed87c;
        --link-color-blur: #9a9bec;
        --alert-color-blur: #eb9696;
    }

    body, input, textarea, button {
        font-family: SF-Pro-Display;
        font-size: 14px;
    }
    
    Link {
        text-decoration: none;
    }

    button,
    input[type=button],
    input[type=submit] {
        cursor: pointer;
    }

 

    .clearfix::before {
        display: table;
        content: " ";
    }

    .clearfix::after {
        clear: both;
        content: " ";
        display: table;
    }

    p {
        margin-top: 0px;
        margin-bottom: 0px;
    }
    .MuiTableCell-root.MuiTableCell-body {
        font-family:inherit;
    }

    ${(props) =>
		props.fullScreen &&
		css`
			html,
			#app,
			.app-wrapper,
			.common-components-wrap,
			.common-components-wrap-inner,
			.public-components-wrap,
			.public-components-wrap-inner {
				height: 100%;
			}

			body {
				height: calc(100% - 73px);
			}

			@media screen and (max-width: 768px) {
				body {
					height: calc(100% - 51px);
				}
			}
		`}


    @media screen and (max-width: 768px) {
        .Toastify__toast-container.Toastify__toast-container--top-left {
            padding: 8px 24px 0px 8px;
        }
    }

    .Toastify__toast-container--top-left .Toastify__toast {
        border-left: 3px solid var(--primary-color);
        border-radius: 0px 8px 8px 0px;
    }
`;

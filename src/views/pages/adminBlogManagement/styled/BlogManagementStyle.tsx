import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { TableRow } from "@material-ui/core";

export const UpdateBlogMutiLangDiv = styled.div`
	margin-top: 50px;
	margin-bottom: 20px;
    overflow-x: auto;
    width: 100%;
    display: flex;
}
`;

export const UpdateBlogMutiLangButton = styled.button`
	// background-color: var(--primary-color);
	background-color: var(--background-color);
	padding: 12px 20px;
	color: black;
	border: none;
	// border-radius: 0 0 20px 20px;
	margin-right: 12px;
`;

export const VideoContainer = styled.div`
	position: relative;
	width: 100%;
	padding-bottom: 56.25%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const StyledIframe = styled.iframe`
	max-width: 600px;
	max-height: 100%;
`;

export const EmbedWrapper = styled.div`
	max-width: 600px;
	width: 100%;
	margin: 0 auto;
`;

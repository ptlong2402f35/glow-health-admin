import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const SidebarWrap = styled.div`
	height: 100%;
	float: left;
	background-color: #e0e9dd;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const BtnIcon = styled.i`
	font-size: 20px;
	color: #cccccc;
	text-align: center;
	@media screen and (max-width: 768px) {
		margin-right: 6px;
	}
`;

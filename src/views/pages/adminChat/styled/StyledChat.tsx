import styled, { FlattenSimpleInterpolation, css } from "styled-components";
import { CommonTableContainerResp } from "../../../controls/components/commonTable/StyledCommonTableResp";
import { TableRow } from "@material-ui/core";
import { OrderStatusv2 } from "../../../../models/Orderv2";
import { DialogWrapFootBtn } from "../../../controls/components/dialogWrap/StyledDialogWrap";
import { TableCell } from "@material-ui/core";

export const AdminChatWrap = styled.div`
	display: flex;
    justify-content: flex-start;
    min-height: 700px;
    background-color: rgb(255, 255, 255) !important;
        flex-direction: column;
	@media screen and (max-width: 1282px) {
		width: auto;
		padding: 0 20px;
	}
`;

export const AdminChatTitle = styled.div`
	font-size: 40px;
    color: rgb(91, 122, 79);
    font-weight: 700;
    margin: 30px;
	@media screen and (max-width: 1282px) {
	
	}
`;
export const AdminChatStartDate = styled.div`
	font-size: 24px;
    font-weight: 600;
    margin: 0 30px;
	@media screen and (max-width: 1282px) {
	
	}
`;
export const AdminChatBody = styled.div`
    margin: 30px;
        margin: 30px;
    min-height: 200px;
    border: 1px solid rgb(91, 122, 79);
    border-radius: 20px;
    padding:20px;
	background-color: #f3f3f3;
	@media screen and (max-width: 1282px) {
	
	}
`;

export const MessageBubble = styled.div`
display: flex;
    margin: 4px 0;
	@media screen and (max-width: 1282px) {
	
	}
`;
export const SenderDate = styled.div`
margin-right:12px;
    color: #919191;
	@media screen and (max-width: 1282px) {
	
	}
`;

export const SenderName = styled.div`
width: 200px;
    overflow: hidden;
margin-right: 12px;
	@media screen and (max-width: 1282px) {
	
	}
`;
export const SpecialContent = styled.div`
    background-color: #cce5af;
    padding: 6px 10px;
    border-radius: 12px;
	@media screen and (max-width: 1282px) {
	
	}
`;
export const SpecialContentImg = styled.img`
height:50px;
margin: 0 4px;
	@media screen and (max-width: 1282px) {
	
	}
`;
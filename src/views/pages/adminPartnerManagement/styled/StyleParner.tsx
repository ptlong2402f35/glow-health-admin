import styled from "styled-components";
import { StyleTableCell } from "../../adminUserManagement/styled/StyledTableUserManagement";
import { Link } from "react-router-dom";
import { BtnButton } from "../../../controls/components/form/FormButton";
import { StylePersonalLabelBank } from "../../personal/component/StylePerson";

export const AdminParnerCount = styled.div`
	color: red;
	margin-right: 4px;
`;
export const AdminParnerCountWrap = styled.div`
	display: flex;
	font-size: 16px;
	margin: 20px;
`;

export const AdminParnerOptionOperation = styled.div`
	padding: 12px;
	cursor: pointer;
	transition: background-color 0.3s ease-in-out;

	&:hover {
		background-color: lightgray;
	}

	&.active {
		animation: pulse 0.5s infinite;
	}

	@keyframes pulse {
		0%,
		100% {
			background-color: lightgray;
		}
		50% {
			background-color: white;
		}
	}
`;
export const AdminUserManagementFilterWrap1 = styled.div`
	width: 100%;
	padding-right: 20px;
	@media screen and (max-width: 768px) {
		padding-right: 0px;
	}
`;
export const AdminUserManagementFilterWrap2 = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 16px;
	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;
export const AdminUserManagementFilterWrap3 = styled.div`
	display: flex;
	flex-direction: row;
	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;
export const AdminUserManagementFilterWrap4 = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 16px;
	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;
export const PageCenterInner = styled.div`
	padding: 0 20px;
`;

export const AdminUserManagementFilterClearButton = styled.button`
	color: var(--primary-color);
	background-color: transparent;
	border: none;
	margin-bottom: 52px;
	font-size: 20px;
	&:hover {
		color: var(--primary-bold-color);
	}
`;
export const DescriptionParnerTextArea = styled.textarea`
	min-height: 300px;
	width: 100%;
	padding: 8px;
	border: 2px solid var(--primary-color);
	border-radius: 20px;
`;

export const DescriptionParnerTextAreav2 = styled.textarea`
	min-height: 200px;
	width: 100%;
	padding: 8px;
	border: 2px solid var(--primary-color);
	border-radius: 20px;
	resize: vertical;
`;
export const DescriptionParnerTextDiv = styled.div`
	min-height: 300px;
	width: 100%;
	padding: 8px;
	border: 2px dashed var(--primary-color);
	border-radius: 20px;
`;

export const DescriptionParnerTableCell = styled(StyleTableCell)`
	cursor: pointer;
	min-width: 300px;
	&:hover {
		color: var(--primary-bold-color);
		font-weight: 700;
	}
`;
export const LinkRespContainName = styled(Link)`
	text-decoration: none;
`;

export const DescriptionTitleLang = styled.p`
	margin-top: 20px;
	margin-bottom: 8px;
	color: var(--text-color0);
`;

export const StaffIdentifyDialogBtn = styled(BtnButton)`
	padding: 6px 8px;
	font-size: 14px;
`;

export const StaffIdentifyDialogWrap = styled.div`
	width: 100%;
`;

export const StaffIdentifyDialogLeft = styled.div`
	float: left;
	width: 70%;
	max-height: 600px;
	overflow-y: auto;

	& img {
		width: 100%;
	}
`;

export const StaffIdentifyDialogRight = styled.div`
	padding-left: 16px;
	float: left;
	width: 30%;
`;

export const StaffIdentifyDialogTextBold = styled.div`
	font-size: 16px;
	font-weight: bold;
`;

export const StaffIdentifyDialogStaffLabel = styled(StylePersonalLabelBank)`
	display: inline-block;
	width: auto;
`;

export const StaffIdentifyDialogStaffValue = styled(StaffIdentifyDialogTextBold)`
	display: inline-block;
	width: auto;
	margin-right: 60px;
`;

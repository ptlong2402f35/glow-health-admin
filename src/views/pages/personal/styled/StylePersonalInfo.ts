import styled from "styled-components";

export const StyledPersonalInfov2Wrap = styled.div`
	width: 380px;
	position: relative;
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;
export const StyledPersonalInfov2Name = styled.div`
	font-weight: 700;
	font-size: 32px;
	line-height: 42px;
	margin-top: 18px;
	text-align: center;
`;
export const StyledPersonalInfov2Contain = styled.div`
	margin: 19px 0 24px;
	padding: 10px 11px;
	background: #ffffff;
	border-radius: 16px;
	width: 100%;
`;
export const StyledPersonalInfov2UnChangeSection = styled.div`
	padding-left: 30px;
	padding-bottom: 16px;
`;
export const StyledPersonalInfov2ControlWrap = styled.div`
	display: inline-block;
	width: 100%;
`;
export const StyledPersonalInfov2ControlField = styled.div`
	display: inline-block;
	float: right;
	padding: 7px;
	border: 1px solid #b6b6b6;
	border-radius: 8px;
	cursor: pointer;
`;
export const StyledPersonalInfov2ContentWrap = styled.div`
	margin-top: -18px;
`;
export const StyledPersonalInfov2ContentItem = styled.div`
	display: block;
	margin-bottom: 24px;
`;
export const StyledPersonalInfov2TextLabel = styled.div`
	display: inline;
	margin-right: 8px;
	font-weight: 400;
	font-size: 14px;
	line-height: 18px;
	color: var(--text-color2v2);
`;
export const StyledPersonalInfov2TextLabelChange = styled.div`
	margin-bottom: 2px;
`;
export const StyledPersonalInfov2ChangeWrap = styled.div`
	padding: 30px 30px 24px;
`;
export const StyledPersonalInfov2ChangeContentItem = styled.div`
	margin-bottom: 16px;
`;
export const StyledPersonalInfov2TextChange = styled.input`
    padding 8px 32px 8px 12px;
    width:100%;
    background: #FFFFFF;
    border: 1px solid #B6B6B6;
    border-radius: 4px;
    over-flow:hiden;
    white-space:nowrawp;
    text-overflow: ellipsis;
    &::-ms-reveal,
	&::-ms-clear {
		display: none;
	} 
    &:focus{
        outline:none;
    }
    @media screen and (max-width:768px){
        font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    }
`;
export const StyledPersonalInfov2LockChange = styled.div`
padding 8px 32px 8px 12px;
width:100%;
background: #FFFFFF;
border: 1px solid #B6B6B6;
border-radius: 4px;
position:relative;
background-color:#F5F5F5;;
font-weight: 600;
font-size: 16px;
line-height: 22px;
color:#b6b6b6;
over-flow:hiden;
white-space:nowrawp;
text-overflow: ellipsis;
@media screen and (max-width:768px){
    font-weight: 400;
font-size: 14px;
line-height: 18px;
}
`;
export const StyledPersonalInfov2LockWrap = styled.div`
	position: absolute;
	right: 13px;
	top: 10px;
`;
export const StyledPersonalInfov2ChangeBtnWrap = styled.div`
	margin-top: 10px;
	width: 100%;
	display: flex;
	justify-content: center;
	gap: 10px;
`;
export const StyledPersonalInfov2ChangeBtn = styled.button<{
	$isDisable?: boolean;
}>`
	background: #b6b6b6;
	border-radius: 100px;
	padding: 9px 16px;
	color: #fff;
	font-weight: 500;
	font-size: 14px;
	cursor: pointer;
	border: none;
	min-width: 98px;
	&:hover {
		box-shadow: 0 0 4px #b6b6b6;
	}
	${(props) => (props.$isDisable ? "opacity:.6" : "")}
`;
export const StyledPersonalInfov2ChangeConfirmBtn = styled(StyledPersonalInfov2ChangeBtn)`
	background-color: var(--primary-color);
	&:hover {
		box-shadow: 0 0 4px var(--primary-color);
	}
`;

export const StyledPersonalInfov2TextInfo = styled.div`
	display: inline;
	color: var(--text-color2v2);
	font-weight: 600;
	font-size: 16px;
	line-height: 22px;
	white-space: nowrap;
	over-flow: hidden;
	text-overflow: ellipsis;
`;
//PersonalPasswordStyle
export const StyledPersonalInfov2TextPass = styled.div`
	transform: translateY(4px);
`;
export const StyledPersonalPassWordWrap = styled.div`
	width: 380px;
	margin-top: -19px;
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;
export const StyledPersonalPassContentWrap = styled.div`
	display: flex;
	flex-direction: flex-start;
`;

import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const HomeInstructWrap = styled.div`
	display: flex;
	justify-content: center;
	background-color: #f8f8f8;
`;

export const HomeInstructCenter = styled.div`
	width: 1180px;
	margin-top: 62px;
	margin-bottom: 40px;
	@media screen and (max-width: 1282px) {
		width: 100%;
		padding: 0px 16px;
	}

	@media screen and (max-width: 768px) {
		width: 100%;
		padding: 0px;
		margin-bottom: 16px;
		margin-top: 46px;
	}
`;
export const HomeInstructHeader = styled.div`
	margin-bottom: 20px;
	@media screen and (max-width: 768px) {
		margin-bottom: 0;
	}
`;
export const HomeInstructTitle1 = styled.div`
	font-size: 40px;
	line-height: 42px;
	margin-top: 8px;
	font-weight: 700;
	text-align: center;
	color: var(--primary-colorv2);
	margin-bottom: 20px;
	text-transform: capitalize;
	@media screen and (max-width: 768px) {
		font-size: 20px;
		line-height: 28px;
		margin: 0px 0 20px;
		padding: 0 8px;
	}
`;
export const HomeInstructTitle2 = styled.div`
	text-align: center;
	font-size: 14px;
	line-height: 18px;
	color: var(--text-color2);
	@media screen and (max-width: 768px) {
		font-size: 16px;
		line-height: 20px;
		margin-bottom: 24px;
		padding: 0 8px;
	}
`;
export const HomeInstructInner = styled.div`
	display: flex;
	@media screen and (max-width: 768px) {
		flex-direction: column;
		width: auto;
	}
`;
export const HomeInstructItem = styled.div`
	padding: 20px;
	margin: 12px;
	margin-bottom: 8px;
	background-position: center center;
	width: 25%;
	text-align: left;
	border-radius: 20px;

	@media screen and (min-width: 768px) {
	}
	@media screen and (max-width: 768px) {
		width: auto;
		margin: 8px 16px 8px 16px;
		padding: 16px;
	}
`;
export const HomeInstructItemNo = styled(HomeInstructItem)`
	@media screen and (max-width: 768px) {
		margin: 0;
		padding: 0 22px 16px 24px;
	}
`;
export const HomeInstructItemHeaderContain = styled.div`
	@media screen and (max-width: 768px) {
		margin-left: 12px;
	}
`;
export const HomeInstructItemHeaderRes = styled.div`
	display: none;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 768px) {
		display: flex;
	}
`;

export const HomeInstructItemNumber = styled.div`
	font-weight: 700;
	font-size: 48px;
	color: var(--primary-colorv2);
	margin-bottom: 12px;

	@media screen and (max-width: 768px) {
		padding-top: 8px;
		margin-bottom: 0;
		font-size: 44px;
	}
`;

export const HomeInstructItemNumberTitle = styled.div`
	font-weight: 700;
	font-size: 20px;
	line-height: 22px;
	margin-bottom: 26px;

	@media screen and (max-width: 768px) {
		min-width: 214px;
		margin-bottom: 16px;
	}
`;
export const HomeInstructItemIcon = styled.div`
	& img {
		width: 70px;
		object-fit: contain;
	}
	@media screen and (max-width: 768px) {
		& img {
			max-width: 70px;
			object-fit: contain;
		}
	}
`;
export const HomeInstructItemTitle = styled.div`
	font-weight: 600;
	font-size: 20px;
	margin-bottom: 20px;
	margin-top: 8px;
	color: var(--text-color);
	@media screen and (max-width: 768px) {
		margin-bottom: 0px;
		margin-top: 0px;
		font-size: 16px;
		line-height: 20px;
		margin-left: 10px;
	}
`;
export const HomeInstructItemContent = styled.div`
	color: var(--text-color);
	font-size: 14px;
	line-height: 24px;
`;
export const HomeInstructItemHeader = styled.div`
	@media screen and (max-width: 768px) {
		display: none;
		align-items: center;
	}
	margin-bottom: 26px;
`;

export const HomeInstructWrapv2 = styled.div`
background-color: #faf9f7;
padding-top: 100px;
padding-bottom: 160px;
width: 100%;
@media screen and (max-width: 768px) {
		padding:50px 0;
	}
}
`;

export const HomeInstructContentInner = styled.div`
position: relative;
margin: auto;
max-width: 1440px;
width: 85%;
@media screen and (max-width: 768px) {
		margin: 0;
    width: 100%;
    padding: 0 16px;
	}
}
`;

export const HomeInstructContentHeader = styled.div`
margin-bottom: 100px;
    // font-family: Yeseva-One;
    text-align: left;
    font-size: 48px;
    background: #333438;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 60px;
	@media screen and (max-width: 768px) {
		margin-bottom: 0;
		font-size: 32px;
    line-height: 44px;
	}
}
`;
export const HomeInstructContentItems = styled.div`
display: flex;
@media screen and (max-width: 768px) {
		flex-direction: column;
	}
}
`;
export const HomeInstructContentItem = styled.div`
margin-right: 40px;
    margin-top: 40px;
    width: 33%;
	@media screen and (max-width: 768px) {
		width: 100%;
	}
}
`;

export const HomeInstructContentItemImg = styled.img`
border-style: none;
@media screen and (max-width: 768px) {
		    width: 60px;
	}
}
`;
export const HomeInstructContentItemHeader = styled.div`
	// font-family: Yeseva-One;
	background: #333438;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	margin: 24px 0;
	font-weight: 400;
	font-size: 24px;
	line-height: 27px;
	@media screen and (max-width: 768px) {
		margin-bottom: 8px;
		font-size: 20px;
		line-height: 28px;
	}
`;

export const HomeInstructContentItemContent = styled.div`
	background: #525652;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-size: 16px;
	line-height: 20px;
	@media screen and (max-width: 768px) {
		font-size: 15px;
		line-height: 20px;
		width: 100%;
	}
`;

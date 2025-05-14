import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const PolicyMainInner = styled.div`
	max-width: 1440px;
	width: 85%;
	padding-top: 120px;
	padding-bottom: 80px;
	display: flex;
	margin: auto;
	@media screen and (max-width: 768px) {
		margin: 0;
    padding: 50px 16px 32px 16px;
    width: 100%;
    flex-direction: column;
}
	}
`;
export const PolicyMainTitle = styled.h1`
	text-align: center;
	font-size: 24px;
	font-weight: bold;
	color: rgb(91, 122, 79);
	// font-family: Yeseva-One;
`;

export const PolicyContainer = styled.div`
	max-width: 800px;
	margin: auto;
	width: 100%;
`;

export const PolicyBody = styled.div``;

export const PolicyBodyDateSubTitle = styled.div`
	width: 700px;
	font-size: 15px;
	text-align: justify;
	font-weight: 400;
	line-height: 22px;
	color: #080d08;
	font-style: italic;
	font-size: 15px;
	@media screen and (max-width: 768px) {
		line-height: 22px;
		width: 100%;
		font-size: 15px;
	}
`;
export const PolicyBodyDateSubTitle2 = styled(PolicyBodyDateSubTitle)`
	@media screen and (max-width: 768px) {
		margin-top: 24px;
		text-align: center;
	}
`;
export const PolicyBodyCSTitle = styled.h2`
	font-size: 20px;
	font-weight: 600;
	margin-bottom: 10px;
	margin-top: 26px;
	@media screen and (max-width: 768px) {
		font-size: 18px;
	}
`;

export const PolicyTextBody = styled.div`
	width: 700px;
	font-size: 15px;
	text-align: justify;
	font-weight: 400;
	line-height: 22px;
	color: #080d08;
	@media screen and (max-width: 768px) {
		line-height: 22px;
		width: 100%;
		font-size: 15px;
	}
`;

export const PolicyCSSubTitle = styled.h3`
	margin-top: 20px;
	margin-bottom: 16px;
	font-size: 20px;
	font-weight: 700;
`;

export const PolicyTextBodyp = styled.p`
	margin-bottom: 16px;
`;
export const PolicyTextBodydiv = styled.div``;
export const PolicyTextBodyp0 = styled.p`
	margin-bottom: 8px;
`;

import styled from "styled-components";

export const SpanNorm = styled.span`
	display: inline;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const SpanResp = styled.span`
	display: none;

	@media screen and (max-width: 768px) {
		display: inline;
		font-weight: 600;
		font-size: 13px;
	}
`;

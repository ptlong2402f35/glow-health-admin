import styled, { css, FlattenSimpleInterpolation } from "styled-components";

export const CommonTableHeadCellBox = styled.div<{
	xStyleTableCellRespHead?: FlattenSimpleInterpolation;
}>`
	padding: 8px 4px 8px 4px;
	border-right: 1px solid var(--text-color2);

	${(props) => props.xStyleTableCellRespHead}
`;

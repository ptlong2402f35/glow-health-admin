import styled from "styled-components";
import Pagination from "@material-ui/lab/Pagination";

export const PaginationWrap = styled(Pagination)`
	display: inline-block;

	& .MuiButtonBase-root,
	& .MuiPaginationItem-ellipsis {
		color: var(--text-color0);
		font-family: SF-Pro-Display;
		@media screen and (max-width: 768px) {
			margin: 0;
		}
	}
`;

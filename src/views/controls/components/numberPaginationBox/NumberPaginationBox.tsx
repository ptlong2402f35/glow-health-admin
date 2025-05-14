import React from "react";
import { PaginationWrap } from "./StyledNumberPaginationBox";
import { Link } from "react-router-dom";
import { PaginationItem } from "@material-ui/lab";

export default function NumberPaginationBox(props: {
	page: number;
	count: number;
	per: number;
	onChange: (page: number) => void;
	siblingCount?: number;
	boundaryCount?: number;
	linkGetter?: (page: number) => string;
}) {
	return (
		<PaginationWrap
			page={props.page}
			count={Math.ceil(props.count / props.per) || 1}
			onChange={(e, page) => props.onChange(page)}
			boundaryCount={props.boundaryCount}
			siblingCount={props.siblingCount}
			{...(props.linkGetter && {
				renderItem: (item) => (
					<PaginationItem
						component={Link}
						to={props.linkGetter ? props.linkGetter(item.page) : ""}
						{...item}
					/>
				),
			})}
		/>
	);
}

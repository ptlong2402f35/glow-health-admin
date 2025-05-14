import React from "react";
import { BreadCrumb } from "../../../../models/Staff";
import { Link } from "react-router-dom";
import { BreadCrumbStaffFlex, BreadCrumbStaffLink, BreadCrumbStaffSpan } from "../styled/ListStaffAtHome";

export default function BreadCrumbStaff(props: {
	breadCrumb: BreadCrumb[];
	service?: boolean;
	apartment?: string;
	hashtags?: boolean;
	isMap?: boolean;
	isDetailStaff?: boolean;
}) {
	return (
		<BreadCrumbStaffFlex>
			{(props.breadCrumb || [])?.map((val, index) => {
				const url =
					props.service && index > 0
						? `dich-vu/${val.url}`
						: props.hashtags && index > 0
						? `tags/${val.url}`
						: val.url;
				const isLastItem = index === props.breadCrumb.length - 1;
				const lastItemUrl = isLastItem ? (props.apartment ? `${url}/toa-nha/${props.apartment}` : url) : url;

				return (
					<div key={index}>
						<BreadCrumbStaffLink
							to={
								props.isMap
								  ? ( index === 0 ?
								  (lastItemUrl?.startsWith("/") ? `${lastItemUrl}` : `/${lastItemUrl || ""}`)
								  :
								  (lastItemUrl?.startsWith("/") ? `/dia-diem${lastItemUrl}` : `/dia-diem/${lastItemUrl || ""}`)
)
								  : 
								  ( index === 1 &&  props.isDetailStaff?
									(lastItemUrl?.startsWith("/") ? `/dia-diem${lastItemUrl}` : `/dia-diem/${lastItemUrl || ""}`)
									:
									(lastItemUrl?.startsWith("/") ? lastItemUrl : `/${lastItemUrl || ""}`))
								  
								
							  }
							  
							lastItem={isLastItem}>
							<>{val.label}</>
						</BreadCrumbStaffLink>
						{index < props.breadCrumb.length - 1 && (
							<BreadCrumbStaffSpan>
								{" "}
								<i
									className="fa fa-angle-right"
									aria-hidden="true"></i>
							</BreadCrumbStaffSpan>
						)}
					</div>
				);
			})}
		</BreadCrumbStaffFlex>
	);
}

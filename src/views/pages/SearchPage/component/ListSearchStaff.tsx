import React from "react";
import { TranslateLabels } from "../../../controls/layout/content/MultiLanguge";
import Staff, { BreadCrumb, LabelData } from "../../../../models/Staff";
import { AdsenseWrap } from "../../StaffDetail/styled/StaffDetailStyle";
import AdsenseComponent from "../../../controls/AdsenseComponent";
import ContentFilter from "../../Content/ContentFilter";
import useCommonListFunctions from "../../../hooks/useCommonList/useCommonListFunctions";
import {
	ExperienceSpaContentWrap,
	ExperienceSpaInner,
	ExperienceSpaSearchInner,
	ExperienceSpaSearchWrap,
	ExperienceSpaWrap,
	ExperienceSpaWrapPageTitle,
	ListStaffAtHomeContent,
} from "../../FilterAtHome/styled/ListStaffAtHome";
import BreadCrumbStaff from "../../FilterAtHome/component/BreadCrumb";
import ListSpa from "../../FilterAtHome/component/ListSpa";
import { DealHotHomePageNote, DealHotHomePageNoteImg, HomeRes } from "../../home/styled/HomeStyles";
import { PaginationWrapperv2 } from "../../adminUserManagement/styled/AdminUserManagementStyle";
import NumberPaginationBox from "../../../controls/components/numberPaginationBox/NumberPaginationBox";
import { PERPAGE } from "../../orderManagement/hook/useGetListHook";
import { SearchBox } from "../../home/HomeIntroMenuv3";
import useStaticContext from "../../../hooks/useStaticContext";

export default function ListSearchStaffWrap(props: {
	staff: Staff[];
	breadCrumb: BreadCrumb[];
	count: number;
	reload: () => void;
	lang: string;
	link: string | null | undefined;
}) {
	const { page, doChangePage, getPathChangePage } = useCommonListFunctions();
	const { staticContext } = useStaticContext();

	return (
		<ExperienceSpaWrap>
			<BreadCrumbStaff breadCrumb={props.breadCrumb} />
			<ExperienceSpaWrapPageTitle>
				{staticContext?.data?.h1Content || TranslateLabels[props.lang || "vi"]?.SEARCH_RESULTS} {props.link || ""}
			</ExperienceSpaWrapPageTitle>

			<ListStaffAtHomeContent>
				<HomeRes>
					<SearchBox mobile={true} />
				</HomeRes>

				<div>
					<ExperienceSpaSearchWrap>
						<ExperienceSpaSearchInner>
							{props.staff?.length > 0 ? (
								props.staff.map((val, index) => (
									<ListSpa
										key={index}
										val={val}
										search={true}
									/>
								))
							) : (
								<DealHotHomePageNote>
									<DealHotHomePageNoteImg
										src="/static/img/Notes.png"
										alt={TranslateLabels[props.lang || "vi"]?.NO_RESULTS}
									/>
									<div>{TranslateLabels[props.lang || "vi"]?.NO_RESULTS}</div>
								</DealHotHomePageNote>
							)}
						</ExperienceSpaSearchInner>
						<PaginationWrapperv2>
							<NumberPaginationBox
								page={page || 1}
								count={props.count}
								per={PERPAGE.PerPage}
								onChange={(val) => doChangePage?.(val)}
								linkGetter={(val) => (getPathChangePage ? getPathChangePage(val) : "")}
							/>
						</PaginationWrapperv2>
					</ExperienceSpaSearchWrap>
				</div>
			</ListStaffAtHomeContent>
		</ExperienceSpaWrap>
	);
}

import React from "react";

import { PaginationWrapper } from "../../adminUserManagement/styled/AdminUserManagementStyle";
import NumberPaginationBox from "../../../controls/components/numberPaginationBox/NumberPaginationBox";
import { PERPAGE } from "../../orderManagement/hook/useGetListHook";
import useCommonListFunctions from "../../../hooks/useCommonList/useCommonListFunctions";
import { DealHotHomePageNote, DealHotHomePageNoteImg } from "../../home/styled/HomeStyles";
import { TranslateLabels } from "../../../controls/layout/content/MultiLanguge";
import {
	ExperienceSpaContentWrap,
	ExperienceSpaInner,
	ExperienceSpaWrap,
	ExperienceSpaWrapPageTitle,
	ListStaffAtHomeContent,
} from "../../FilterAtHome/styled/ListStaffAtHome";
import BreadCrumbStaff from "../../FilterAtHome/component/BreadCrumb";
import { getFilterService } from "../hook/getListStaffAtHome";
import { useParams } from "react-router";
import ListService from "./ListStore";
import FilterListService from "./FilterListService";
import useStaticContext from "../../../hooks/useStaticContext";

export default function ListStaffAtHomeWrap() {
	const { link, lang, apartment } = useParams<{ link: string; lang: string; apartment: string }>();
	const { staff, breadCrumb, count, pageType, pageTitle, reload } = getFilterService({ link, lang, apartment });
	const { page, doChangePage, getPathChangePage } = useCommonListFunctions();
	const { staticContext } = useStaticContext();

	return (
		<ExperienceSpaWrap>
			<BreadCrumbStaff
				breadCrumb={breadCrumb}
				service={true}
				apartment={apartment}
			/>
			<ExperienceSpaWrapPageTitle>{staticContext?.data?.h1Content ||pageTitle}</ExperienceSpaWrapPageTitle>

			<ListStaffAtHomeContent>
				<FilterListService
					reload={reload}
					isService={true}
					apartment={apartment}
				/>
				<ExperienceSpaContentWrap>
					<ExperienceSpaInner>
						{staff?.length > 0 ? (
							staff.map((val, index) => (
								<ListService
									key={index}
									val={val}
								/>
							))
						) : (
							<DealHotHomePageNote>
								<DealHotHomePageNoteImg
									src="/static/img/Notes.png"
									alt={TranslateLabels[lang || "vi"]?.NO_PARTNERS_AVAILABLE_YET}
								/>
								<div>{TranslateLabels[lang || "vi"]?.NO_PARTNERS_AVAILABLE_YET}</div>
							</DealHotHomePageNote>
						)}
					</ExperienceSpaInner>
					<PaginationWrapper>
						<NumberPaginationBox
							page={page || 1}
							count={count}
							per={PERPAGE.PerPage}
							onChange={(val) => doChangePage?.(val)}
							linkGetter={(val) => (getPathChangePage ? getPathChangePage(val) : "")}
						/>
					</PaginationWrapper>
				</ExperienceSpaContentWrap>
			</ListStaffAtHomeContent>
		</ExperienceSpaWrap>
	);
}

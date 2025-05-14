import React from "react";
import { useParams } from "react-router";

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
import FilterListStaff from "../../FilterAtHome/component/FilterListStaff";
import ListStore from "../../FilterAtHome/component/ListStore";
import ListSpa from "../../FilterAtHome/component/ListSpa";
import { getFilterBlogHashTags } from "../hook/getListStaffTags";

export default function ListStaffHashTagsWrap() {
	const { link, lang, apartment } = useParams<{ link: string; lang: string; apartment: string }>();
	const { staff, breadCrumb, count, pageType, pageTitle, reload } = getFilterBlogHashTags({ link, lang, apartment });
	const { page, doChangePage } = useCommonListFunctions();

	return (
		<ExperienceSpaWrap>
			<BreadCrumbStaff
				breadCrumb={breadCrumb}
				apartment={apartment}
			/>
			<ExperienceSpaWrapPageTitle>{pageTitle}</ExperienceSpaWrapPageTitle>

			{pageType && pageType?.includes(3) ? (
				<ListStaffAtHomeContent>
					<FilterListStaff
						reload={reload}
						hashtags={true}
					/>
					<ExperienceSpaContentWrap>
						<ExperienceSpaInner>
							{staff?.length > 0 ? (
								staff.map((val, index) => (
									<ListStore
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
									<div>{TranslateLabels[lang]?.NO_PARTNERS_AVAILABLE_YET}</div>
								</DealHotHomePageNote>
							)}
						</ExperienceSpaInner>
						<PaginationWrapper>
							<NumberPaginationBox
								page={page || 1}
								count={count}
								per={PERPAGE.PerPage}
								onChange={(val) => doChangePage?.(val)}
							/>
						</PaginationWrapper>
					</ExperienceSpaContentWrap>
				</ListStaffAtHomeContent>
			) : (
				<ListStaffAtHomeContent>
					<FilterListStaff
						reload={reload}
						store={true}
						hashtags={true}
					/>
					<ExperienceSpaContentWrap>
						<ExperienceSpaInner>
							{staff?.length > 0 ? (
								staff.map((val, index) => (
									<ListSpa
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
							/>
						</PaginationWrapper>
					</ExperienceSpaContentWrap>
				</ListStaffAtHomeContent>
			)}
		</ExperienceSpaWrap>
	);
}

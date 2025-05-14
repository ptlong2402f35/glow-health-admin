import React from "react";
import useGetListStaff, { getFilterBlogListHome } from "../hook/getListStaffAtHome";
import { useParams } from "react-router";
import {
	ExperienceSpaContentWrap,
	ExperienceSpaInner,
	ExperienceSpaWrap,
	ExperienceSpaWrapPageTitle,
	ListStaffAtHomeContainer,
	ListStaffAtHomeContent,
} from "../styled/ListStaffAtHome";
import BreadCrumbStaff from "./BreadCrumb";
import { PaginationWrapper, PaginationWrapperv2 } from "../../adminUserManagement/styled/AdminUserManagementStyle";
import NumberPaginationBox from "../../../controls/components/numberPaginationBox/NumberPaginationBox";
import ListSpa from "./ListSpa";
import FilterListStaff from "./FilterListStaff";
import { PERPAGE } from "../../orderManagement/hook/useGetListHook";
import useCommonListFunctions from "../../../hooks/useCommonList/useCommonListFunctions";
import ListStore from "./ListStore";
import { DealHotHomePageNote, DealHotHomePageNoteImg } from "../../home/styled/HomeStyles";
import { TranslateLabels } from "../../../controls/layout/content/MultiLanguge";
import Staff, { BreadCrumb, LabelData } from "../../../../models/Staff";
import { AdsenseWrap } from "../../StaffDetail/styled/StaffDetailStyle";
import AdsenseComponent from "../../../controls/AdsenseComponent";
import ContentFilter from "../../Content/ContentFilter";
import ContentFilterSpa from "../../Content/ContentFilterSpa";
import MapSpaScreen from "../../MapSpa/mapSpaPage";
import useStaticContext from "../../../hooks/useStaticContext";

export default function ListStaffAtHomeWrap(props: {
	staff: Staff[];
	breadCrumb: BreadCrumb[];
	count: number;
	pageType: number[];
	pageTitle: string;
	reload: () => void;
	lang: string;
	hashtags?: boolean;
	apartment?: string;
	labelData?: LabelData;
}) {
	const { page, doChangePage, getPathChangePage } = useCommonListFunctions();
	const { staticContext } = useStaticContext();

	return (
		<ExperienceSpaWrap>
			<BreadCrumbStaff
				breadCrumb={props.breadCrumb}
				apartment={props.apartment}
				hashtags={props.hashtags}
			/>
			<ExperienceSpaWrapPageTitle>{staticContext?.data?.h1Content ||props.pageTitle}</ExperienceSpaWrapPageTitle>

			{props.pageType && props.pageType?.includes(3) ? (
				<>
				<>
					<ListStaffAtHomeContent>
						<FilterListStaff
							reload={props.reload}
							hashtags={props.hashtags}
							apartment={props.apartment}
						/>
						<div>
						<ExperienceSpaContentWrap>
							<ExperienceSpaInner>
								{props.staff?.length > 0 ? (
									props.staff.map((val, index) => (
										<ListStore
											key={index}
											val={val}
										/>
									))
								) : (
									<DealHotHomePageNote>
										<DealHotHomePageNoteImg
											src="/static/img/Notes.png"
											alt={TranslateLabels[props.lang || "vi"]?.NO_PARTNERS_AVAILABLE_YET}
										/>
										<div>{TranslateLabels[props.lang]?.NO_PARTNERS_AVAILABLE_YET}</div>
									</DealHotHomePageNote>
								)}
							</ExperienceSpaInner>
							<PaginationWrapperv2>
								<NumberPaginationBox
									page={page || 1}
									count={props.count}
									per={PERPAGE.PerPage}
									onChange={(val) => doChangePage?.(val)}
									linkGetter={(val) => (getPathChangePage ? getPathChangePage(val) : "")}
								/>
							</PaginationWrapperv2>
						</ExperienceSpaContentWrap>
						<ContentFilterSpa labelData={props.labelData} /></div>
					</ListStaffAtHomeContent>
					<AdsenseWrap>
						<AdsenseComponent AdFormat="4244812123" />
					</AdsenseWrap>
				</>

				</>
			) : (
				<>
					<ListStaffAtHomeContent>
						<FilterListStaff
							reload={props.reload}
							store={true}
							hashtags={props.hashtags}
						/>
						<div>
							<ExperienceSpaContentWrap>
								<ExperienceSpaInner>
									{props.staff?.length > 0 ? (
										props.staff.map((val, index) => (
											<ListSpa
												key={index}
												val={val}
											/>
										))
									) : (
										<DealHotHomePageNote>
											<DealHotHomePageNoteImg
												src="/static/img/Notes.png"
												alt={TranslateLabels[props.lang || "vi"]?.NO_PARTNERS_AVAILABLE_YET}
											/>
											<div>{TranslateLabels[props.lang || "vi"]?.NO_PARTNERS_AVAILABLE_YET}</div>
										</DealHotHomePageNote>
									)}
								</ExperienceSpaInner>
								<PaginationWrapperv2>
									<NumberPaginationBox
										page={page || 1}
										count={props.count}
										per={PERPAGE.PerPage}
										onChange={(val) => doChangePage?.(val)}
										linkGetter={(val) => (getPathChangePage ? getPathChangePage(val) : "")}
									/>
								</PaginationWrapperv2>
							</ExperienceSpaContentWrap>
							<ContentFilter labelData={props.labelData} />
						</div>
					</ListStaffAtHomeContent>
					<AdsenseWrap>
						<AdsenseComponent AdFormat="4505516638" />
					</AdsenseWrap>
				</>
			)}
		</ExperienceSpaWrap>
	);
}

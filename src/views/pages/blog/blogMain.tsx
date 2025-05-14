import React from "react";
import {
	BlogBannerImg,
	BlogBannerTitle,
	BlogBannerWrap,
	BlogList,
	BlogListContentContent,
	BlogListContentCreatedAt,
	BlogListContentImg,
	BlogListContentTitle,
	BlogListContentTitleP,
	BlogListContentWrap,
	BlogListWrap,
	BlogWrap,
} from "./styled/blogStyled";
import { getFilterBlogListHome } from "../adminBlogManagement/hook/useGetBlog";
import Blog from "../../../models/Blog";
import moment from "moment";
import useCommonListFunctions from "../../hooks/useCommonList/useCommonListFunctions";
import { PaginationWrapper } from "../adminUserManagement/styled/AdminUserManagementStyle";
import NumberPaginationBox from "../../controls/components/numberPaginationBox/NumberPaginationBox";
import { PERPAGE } from "../orderManagement/hook/useGetListHook";
import { Link, useParams } from "react-router-dom";
import { GlowLink } from "../home/GlowLink";
import { TranslateLabels } from "../../controls/layout/content/MultiLanguge";
import useStaticContext from "../../hooks/useStaticContext";

export default function BlogMain() {
	let { lang } = useParams<{ lang: string }>();
	const { listBlog, count } = getFilterBlogListHome({ branch: true, lang: lang });
	const { page, doChangePage, getPathChangePage } = useCommonListFunctions();
	const { staticContext } = useStaticContext();

	return (
		<BlogWrap>
			<BlogBannerWrap>
				<BlogBannerImg
					src="./static/img/BannerBlogMain2901.jpg"
					alt={TranslateLabels[lang]?.ALT_IMG_BANNER_BLOG}
				/>
				<BlogBannerTitle>{staticContext?.data?.h1Content  || "Bài viết"}</BlogBannerTitle>
			</BlogBannerWrap>

			<BlogListWrap>
				<BlogList>
					{listBlog.map((val, index) => (
						<BlogListContent
							key={index}
							val={val}
						/>
					))}
				</BlogList>
			</BlogListWrap>
			<PaginationWrapper>
				<NumberPaginationBox
					page={page || 1}
					count={count}
					per={PERPAGE.Home}
					onChange={(val) => doChangePage?.(val)}
					linkGetter={(val) => (getPathChangePage ? getPathChangePage(val) : "")}
				/>
			</PaginationWrapper>
		</BlogWrap>
	);
}

export function BlogListContent(props: { key: number; val: Blog }) {
	const handleClick = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};
	return (
		<BlogListContentWrap>
			<GlowLink
				to={`/blog/${props.val.richLink}`}
				onClick={handleClick}>
				<BlogListContentImg
					src={props.val.image || "./static/img/profile-circle.png"}
					alt={"Ảnh mô tả bài viết " + props.val.title || ""}
				/>
			</GlowLink>
			<BlogListContentTitle
				to={`/blog/${props.val.richLink}`}
				onClick={handleClick}>
				<BlogListContentTitleP>{props.val.title}</BlogListContentTitleP>
			</BlogListContentTitle>
			<BlogListContentContent>{props.val.subContent}</BlogListContentContent>
			<BlogListContentCreatedAt>
				{(props.val.createdAt && moment(props.val.createdAt).format("HH:mm, DD-MM-YYYY")) || "--"}
			</BlogListContentCreatedAt>
		</BlogListContentWrap>
	);
}

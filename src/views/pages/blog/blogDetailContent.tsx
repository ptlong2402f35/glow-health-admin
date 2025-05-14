import React, { useEffect } from "react";
import useGetDetailBlog from "../adminBlogManagement/hook/useBlogDetail";
import { useParams } from "react-router";
import {
	BlogDetaiContentImg,
	BlogDetailContentCreatedAt,
	BlogDetailContentHeaderWrap,
	BlogDetailContentInner,
	BlogDetailContentOther,
	BlogDetailContentTitle,
	BlogDetailContentWrap,
	BlogListMore,
	BlogListMoreTitle,
	BlogListMoreTitleWrap,
	BlogListSeeMore,
	BlogListWrap,
} from "./styled/blogStyled";
import moment from "moment";
import { getFilterBlogListHome, useListBlogForDetail } from "../adminBlogManagement/hook/useGetBlog";
import Blog from "../../../models/Blog";
import { Link } from "react-router-dom";
import { BlogListContent } from "./blogMain";
import useGetDetailBlogRickLink from "../adminBlogManagement/hook/useBlogDetailRickLink";
import useStaticContext from "../../hooks/useStaticContext";

export default function BlogDetailContent() {
	let { richLink, lang } = useParams<{ richLink: string; lang: string }>();

	const { blogDetail, reload } = useGetDetailBlogRickLink(richLink, lang);
	const { listBlog, count } = useListBlogForDetail(lang);
	useEffect(() => {
		reload();
	}, [richLink]);
	const { staticContext } = useStaticContext();

	return (
		<BlogDetailContentWrap>
			<BlogDetailContentHeaderWrap>
				{/* <BlogDetaiContentImg
					src={blogDetail?.image || "./static/img/BannerBlogMain2901.jgp"}
					alt={"Ảnh mô tải bài viết " + blogDetail?.title || "Ảnh mô tải bài viết"}
				/> */}
				<BlogDetailContentOther>
					<BlogDetailContentTitle>{staticContext?.data?.h1Content || blogDetail?.title}</BlogDetailContentTitle>
					<BlogDetailContentCreatedAt>
						{(blogDetail?.createdAt && moment(blogDetail?.createdAt).format("HH:mm, DD-MM-YYYY")) || "--"}
					</BlogDetailContentCreatedAt>
				</BlogDetailContentOther>
			</BlogDetailContentHeaderWrap>
			<BlogDetailContentInner dangerouslySetInnerHTML={{ __html: blogDetail?.content || "" }} />
			<BlogListWrap>
				<BlogListMoreTitleWrap>
					<BlogListMoreTitle>Bài viết</BlogListMoreTitle>
					<BlogListSeeMore to="/blog">
						Xem thêm{" "}
						<i
							className="fa fa-angle-right"
							aria-hidden="true"></i>
					</BlogListSeeMore>
				</BlogListMoreTitleWrap>
				<BlogListMore>
					{listBlog.map((val, index) => (
						<BlogListContent
							key={index}
							val={val}
						/>
					))}
				</BlogListMore>
			</BlogListWrap>
		</BlogDetailContentWrap>
	);
}

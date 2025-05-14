import React, { useEffect, useState } from "react";
import { CommonListType, useCommonListWrap } from "../../../hooks/useCommonList/useCommonListWrap";
import UserAddress from "../../../../models/UserAddress";
import { getAllUserAddress } from "../../../../services/AllAddressService";
import useLoadingDialog from "../../../hooks/useLoadingDialog";
import Staff from "../../../../models/Staff";
import StaffDetail from "../../../../models/StaffDetail";
import { getStaffDetail } from "../../../../services/AllStaffService";
import { getBlogDetail, getBlogDetailv2, offlineGetBlogDetail } from "../../../../services/BlogService";
import Blog from "../../../../models/Blog";
import useStaticContext from "../../../hooks/useStaticContext";
import { withSsrRawData, withSsrRawDataMulti } from "../../../controls/common/StaticContextWrap";

export default function useGetDetailBlogRickLink(richLink: string, lang?: string) {
	const { staticContext } = useStaticContext();

	// const [blogDetail, setBlogDetail] = useState<Blog>();
	const [blogDetail, setBlogDetail] = useState<Blog | undefined>(() => {
		if (staticContext?.data?.dataDetailBlog) {
			return staticContext?.data?.dataDetailBlog as Blog;
		}
		return undefined;
	});

	const loadDetailStaff = async () => {
		try {
			if (richLink) {
				// let data = await withSsrRawData<Promise<Blog>>(
				// 	(raw) => offlineGetBlogDetail(raw),
				// 	() => getBlogDetailv2(richLink,lang)
				// );

				let res = await withSsrRawDataMulti<Promise<{ data: Blog }>>(
					(raw) => offlineGetBlogDetail(raw),
					() => getBlogDetailv2(richLink, lang),
					(raw) => raw?.dataDetailBlog,
					(ctx) => (ctx.dataDetailBlog = null)
				);
				setBlogDetail(res.data);
			} else {
				setBlogDetail(undefined);
			}
		} catch {
			setBlogDetail(undefined);
		}
	};
	useEffect(() => {
		reload();
	}, [lang]);

	const reload = async () => {
		loadDetailStaff();
	};
	return {
		reload,
		blogDetail,
	};
}

import React, { useEffect, useState } from "react";
import { CommonListType, useCommonListWrap } from "../../../hooks/useCommonList/useCommonListWrap";
import UserAddress from "../../../../models/UserAddress";
import { getAllUserAddress } from "../../../../services/AllAddressService";
import useLoadingDialog from "../../../hooks/useLoadingDialog";
import Staff from "../../../../models/Staff";
import StaffDetail from "../../../../models/StaffDetail";
import { getStaffDetail } from "../../../../services/AllStaffService";
import { getBlogDetail, offlineGetBlogDetail } from "../../../../services/BlogService";
import Blog from "../../../../models/Blog";
import useStaticContext from "../../../hooks/useStaticContext";
import { withSsrRawData } from "../../../controls/common/StaticContextWrap";

export default function useGetDetailBlog(props: { id?: number }) {
	const { staticContext } = useStaticContext();

	// const [blogDetail, setBlogDetail] = useState<Blog>();
	const [blogDetail, setBlogDetail] = useState<Blog | undefined>(() => {
		if (staticContext?.data) {
			return staticContext?.data as Blog;
		}
		return undefined;
	});
	const loadDetailStaff = async () => {
		try {
			if (props.id) {
				let data = await getBlogDetail(props.id);
				setBlogDetail(data);
			} else {
				setBlogDetail(undefined);
			}
		} catch {
			setBlogDetail(undefined);
		}
	};
	useEffect(() => {
		if (props.id) {
			reload();
		}
	}, [props.id]);

	const reload = async () => {
		loadDetailStaff();
	};
	return {
		reload,
		blogDetail,
	};
}

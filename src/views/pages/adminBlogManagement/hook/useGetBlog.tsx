import { useState, useEffect } from "react";
import { PERPAGE } from "../../orderManagement/hook/useGetListHook";
import { useCommonListWrap } from "../../../hooks/useCommonList/useCommonListWrap";
import { CommonListType } from "../../../hooks/useCommonList/useCommonListWrap";
import BlogService from "../../../../services/BlogService";
import Blog from "../../../../models/Blog";
import useStaticContext from "../../../hooks/useStaticContext";
import { withSsrRawData, withSsrRawDataMulti } from "../../../controls/common/StaticContextWrap";

export default function useListBlog(branch?: boolean, props?: CommonListType, lang?: string) {
	// const [listBlog, setListBlog] = useState<Blog[]>([]);

	const { staticContext } = useStaticContext();

	const [listBlog, setListBlog] = useState<Blog[]>(() => {
		if (staticContext?.data?.dataListBlog) {
			return staticContext?.data?.dataListBlog as Blog[];
		}
		return [];
	});
	const [count, setCount] = useState<number>(() => {
		if (staticContext?.data?.totalDataBlog) {
			return staticContext?.data?.totalDataBlog;
		}
		return 0;
	});
	const loadListStore = async (inPage: number, inPerPage: number) => {
		props?.onBeginLoad?.();
		try {
			// let res = await withSsrRawDataMulti<Promise<{ data: Blog[]; count: number }>>(
			// 	(raw) => BlogService.offlineGetListBlogs(raw),
			// 	() => (branch ? BlogService.getListBlogUser(inPage, inPerPage,lang) : BlogService.getListBlog(inPage, inPerPage, lang)),
			// 	(raw) => raw?.dataListBlog,
			// 	(ctx) => ctx.dataListBlog = null,
			// );
			let res = await withSsrRawDataMulti<Promise<{ data: Blog[]; count: number }>>(
				(raw) => BlogService.offlineGetListBlogs(raw),
				() =>
					branch
						? BlogService.getListBlogUser(inPage, inPerPage, lang)
						: BlogService.getListBlog(inPage, inPerPage, lang),
				(raw) => {
					return !raw?.dataListBlog && !raw?.totalDataBlog
						? null
						: {
								data: raw?.dataListBlog,
								count: raw?.totalDataBlog,
						  };
				},
				(ctx) => {
					return {
						data: (ctx.dataListBlog = null),
						count: (ctx.totalDataBlog = null),
					};
				}
			);

			setListBlog(res.data);
			setCount(res.count);
		} catch {
			setListBlog([]);
		} finally {
			props?.onEndLoad?.();
		}
	};
	const reload = () => {
		loadListStore(props?.page || 1, props?.perPage || 0);
	};
	useEffect(() => {
		reload();
	}, [props?.page, props?.perPage, lang]);
	return {
		listBlog,
		reload,
		count,
	};
}

export const getFilterBlogList = () => {
	const PerPage = PERPAGE.Admin;
	const hookResult = (props: CommonListType) => useListBlog(false, props);
	return useCommonListWrap(PERPAGE.Admin, hookResult);
};
export const getFilterBlogListHome = (prop: { branch?: boolean; lang?: string }) => {
	const PerPage = PERPAGE.Admin;
	const hookResult = (props: CommonListType) => useListBlog(prop?.branch, props, prop?.lang);
	return useCommonListWrap(PERPAGE.Home, hookResult);
};

export function useListBlogForDetail(lang?: string, props?: CommonListType) {
	// const [listBlog, setListBlog] = useState<Blog[]>([]);
	const [count, setCount] = useState(0);
	const { staticContext } = useStaticContext();

	const [listBlog, setListBlog] = useState<Blog[]>(() => {
		if (staticContext?.data?.dataListBlogDetail) {
			return staticContext?.data?.dataListBlogDetail as Blog[];
		}
		return [];
	});
	const loadListStore = async (inPage: number, inPerPage: number) => {
		props?.onBeginLoad?.();
		try {
			let prods = await BlogService.getListBlogUser(1, 8, lang);

			setListBlog(prods.data);
			setCount(prods.count);
		} catch {
			setListBlog([]);
		} finally {
			props?.onEndLoad?.();
		}
	};
	const reload = () => {
		loadListStore(props?.page || 1, props?.perPage || 0);
	};
	useEffect(() => {
		reload();
	}, [props?.page, props?.perPage, lang]);
	return {
		listBlog,
		reload,
		count,
	};
}

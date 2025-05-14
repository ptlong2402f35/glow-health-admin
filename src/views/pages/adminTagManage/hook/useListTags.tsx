import { useState, useEffect } from "react";
import { PERPAGE } from "../../orderManagement/hook/useGetListHook";
import { useCommonListWrap } from "../../../hooks/useCommonList/useCommonListWrap";
import { CommonListType } from "../../../hooks/useCommonList/useCommonListWrap";
import TagsService from "../../../../services/TagService";
import { Tags } from "../../../../models/Staff";

export default function useListTags(props?: CommonListType) {
	const [listTags, setListTags] = useState<Tags[]>([]);
	const [count, setCount] = useState(0);
	const loadListTags = async (inPage: number, inPerPage: number) => {
		props?.onBeginLoad?.();
		try {
			var res = await TagsService.getListTagsAdmin(inPage, inPerPage);
			const data = res.data;
			setListTags(data);
			setCount(res.count);
		} catch {
			setListTags([]);
		} finally {
			props?.onEndLoad?.();
		}
	};
	const reload = () => {
		loadListTags(props?.page || 1, props?.perPage || 0);
	};
	useEffect(() => {
		reload();
	}, [props?.page, props?.perPage]);
	return {
		listTags,
		reload,
		count,
	};
}

export const getFilterTagsList = () => {
	const PerPage = PERPAGE.Admin;
	const hookResult = (props: CommonListType) => useListTags(props);
	return useCommonListWrap(PERPAGE.Admin, hookResult);
};

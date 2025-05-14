import { DefaultModel } from "../models/IModel";
import { Tags } from "../models/Staff";
import Store from "../models/Store";
import http from "./http";

export default class TagsService {
    public static async getListTagsAdmin(
        inPage?: number,
        inPerPage?: number
    ): Promise<{
        data: Tags[];
        count: number;
    }> {
        let params: any = {};
        let results = await Promise.all([
            http.get(`/tag-by-admin?perPage=${inPerPage || 50}&page=${inPage || 1}&${new URLSearchParams(params).toString()}`),
        ]);
        return {
            data: DefaultModel.parseList<Tags>(results[0].data?.docs, () => new Tags()),
            count: results[0].data?.total,
        };
    }

}

export const AddTag = async (
    name: string,
    serviceGroup: string | null | undefined,
) => {
	let { data } = await http.post(`/tag-by-admin`, {
		name: name,
		serviceGroup: serviceGroup,
	});

	return data;
};

export const putTag = async (
    id: number,
	name: string,
    serviceGroup: string | null | undefined,
) => {
	await http.put(`/tag-by-admin/${id}`, {
		name: name,
        allowName: true,
		serviceGroup: serviceGroup,
        allowServiceGroup : true,
	});
};

export const tagAtttachByAdmin = async (
    staffId?: number | null | undefined,
    tagId?: number[],
) => {
	await http.put(`tag-attach-by-admin`, {
		staffId: staffId,
        tagIds: tagId,
	});
};
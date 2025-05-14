import { useEffect, useState } from "react";
import ProductService from "../../../../services/ProductService";
import Service from "../../../../models/Service";

export default function useListDetailProducts() {
	const [listDetail, setListDetail] = useState<Service>();
	const doListDetailProducts = async (id: number) => {
		try {
			const data = await ProductService.getListDetailProducts(id);

			setListDetail(data.data);
		} catch {
			console.log("err");
		}
	};

	return {
		listDetail,
		doListDetailProducts,
	};
}

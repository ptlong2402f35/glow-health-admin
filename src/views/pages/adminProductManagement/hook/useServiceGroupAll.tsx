import { useEffect, useState } from "react";
import ProductService from "../../../../services/ProductService";
import { ServiceGroupAll } from "../../../../models/Service";

export default function useListServiceGrounpAll() {
	const [listAll, setListAll] = useState<ServiceGroupAll[]>([]);
	const loadListServiceGrounpAll = async () => {
		try {
			const data = await ProductService.GetServiceGroupAll();

			setListAll(data.data);
		} catch {
			console.log("err");
		}
	};
	useEffect(() => {
		loadListServiceGrounpAll();
	}, []);

	return {
		listAll,
		loadListServiceGrounpAll,
	};
}

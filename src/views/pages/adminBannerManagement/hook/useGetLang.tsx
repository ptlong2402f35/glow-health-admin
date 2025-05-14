import { useState, useEffect } from "react";
import { getLang } from "../../../../services/BannerService";
import { Country } from "../../../../models/UserGlow";

export default function useListLang() {
	const [listLang, setListLang] = useState<Country[]>([]);
	const loadListLang = async () => {
		try {
			var res = await getLang();
			const data = res.data;
			setListLang(data);
		} catch {
			setListLang([]);
		} finally {
		}
	};
	const reload = () => {
		loadListLang();
	};
	useEffect(() => {
		reload();
	}, []);
	return {
		listLang,
		reload,
	};
}

import { useEffect, useState } from "react";
import { ServiceStaffPartner } from "../../../../services/StaffService";
import Service from "../../../../models/Service";

export default function useServicePersonal(props: { id: number }) {
	const [servicePersonal, setServicePersonal] = useState<Service[]>([]);

	const loadListService = async () => {
		try {
			const data = await ServiceStaffPartner(props.id);
			setServicePersonal(data);
		} catch {
			console.log("err");
		}
	};

	useEffect(() => {
		loadListService();
	}, []);
	return {
		servicePersonal,
	};
}

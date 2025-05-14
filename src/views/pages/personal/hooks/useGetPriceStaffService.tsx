import { useEffect, useState } from "react";
import User from "../../../../models/User";
import { getPersonalInfo } from "../../../../services/PersonalService";
import UserManagement from "../../../../models/UserGlow";
import { StaffServiPrice } from "../../../../services/StaffService";
import StaffService from "../../../../models/StaffService";

export default function useGetPriceStaffService(props: { id: number; staffId: number }) {
	const [priceStaff, setPriceStaff] = useState<StaffService>();

	const getPriceStaff = async () => {
		const data = await StaffServiPrice(props.id, props.staffId);
		setPriceStaff(data);
	};

	useEffect(() => {
		getPriceStaff();
	}, []);

	return {
		priceStaff,
	};
}

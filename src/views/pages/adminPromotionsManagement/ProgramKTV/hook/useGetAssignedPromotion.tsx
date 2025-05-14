import { useState, useEffect } from "react";
import { PromotionAssignedServices } from "../../../../../services/PromotionService";
import StaffDetail from "../../../../../models/StaffDetail";
import { useParams } from "react-router";

export default function useGetAssignedPromotion(props: { filterStaffId: number }) {
	const [listAssignedPromotions, setListAssignedPromotions] = useState<StaffDetail>();
	let { id } = useParams<{ id: string }>();
	const ProId = parseInt(id);
	const loadListAllUser = async () => {
		try {
			if (props.filterStaffId) {
				var res = await PromotionAssignedServices.getPromotionAssignedServices(ProId, props.filterStaffId);
				const data = res.data;
				setListAssignedPromotions(data);
			} else {
				setListAssignedPromotions(new StaffDetail());
			}
		} catch {
			console.error();
		}
	};
	const reload = () => {
		loadListAllUser();
	};
	useEffect(() => {
		reload();
	}, [props.filterStaffId]);
	return {
		listAssignedPromotions,
		reload,
	};
}

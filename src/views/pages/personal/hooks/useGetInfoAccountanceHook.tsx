import { useEffect, useState } from "react";
import UserManagement from "../../../../models/UserGlow";
// import AccountanceService from "../../../../services/AccountanceService";

export default function useGetInfoAccountanceHook(props: {}) {
	const [personalInfo, setPersonalInfo] = useState<UserManagement>();

	const getInfo = async () => {
		// const data = await AccountanceService.getPersonalInfo();
		// console.log(`==== data: `, data);
		// setPersonalInfo(data);
	};

	useEffect(() => {
		getInfo();
	}, []);

	const reload = () => {
		getInfo();
	};

	return {
		personalInfo,
		reload,
	};
}

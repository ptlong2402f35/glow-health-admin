import { useEffect, useState } from "react";
import User from "../../../../models/User";
import { getPersonalInfo } from "../../../../services/PersonalService";
import UserManagement from "../../../../models/UserGlow";

export default function useGetInfoHook(props: {}) {
	const [personalInfo, setPersonalInfo] = useState<UserManagement>();

	const getInfo = async () => {
		const data = await getPersonalInfo();
		setPersonalInfo(data);
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

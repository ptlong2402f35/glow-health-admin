import { useContext } from "react";
import { AuthenticationContext } from "../../controls/auth/AuthenticationWrap";

export default function useUpdateUserInfo() {
	const ctx = useContext(AuthenticationContext);

	return {
		updateUserInfo: ctx?.updateUserInfo,
	};
}

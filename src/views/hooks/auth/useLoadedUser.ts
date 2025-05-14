import { useContext } from "react";
import { AuthenticationContext } from "../../controls/auth/AuthenticationWrap";

export default function useLoadedUser() {
	const ctx = useContext(AuthenticationContext);

	return {
		isValidated: ctx?.isValidated,
		user: ctx?.userInfo,
		token: ctx?.token,
	};
}

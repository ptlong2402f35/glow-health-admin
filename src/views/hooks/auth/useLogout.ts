import { useContext } from "react";
import { AuthenticationContext } from "../../controls/auth/AuthenticationWrap";

export default function useLogout() {
	const ctx = useContext(AuthenticationContext);

	return {
		logout: () => ctx?.forceLogout?.(),
		landingPageLogout: () => ctx?.forceLogout?.(null, "/"),
	};
}

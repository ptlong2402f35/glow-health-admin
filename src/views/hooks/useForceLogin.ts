import React from "react";
import { useHistory, useLocation } from "react-router";

export default function useForceLogin() {
	const history = useHistory();
	const { pathname, search } = useLocation();

	const forceLogin = () => {
		let isHome = !pathname || pathname == "/";
		let backUrl = pathname + search;

		let isHomeEmpty = isHome && (!search || search == "?");
		let homeBackUrl = "/" + search;

		history.push(
			isHome
				? isHomeEmpty
					? `/login`
					: `/login?back=${encodeURIComponent(homeBackUrl)}`
				: `/login?back=${encodeURIComponent(backUrl)}`
		);
	};

	return {
		forceLogin,
	};
}

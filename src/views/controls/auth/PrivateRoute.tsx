import React, { Fragment, useContext, useEffect } from "react";
import { useLocation } from "react-router";
import { AuthenticationContext } from "./AuthenticationWrap";

export default function PrivateRoute(props: {
	children: JSX.Element | JSX.Element[] | string | string[];
	emptyComponent?: JSX.Element | string;
}) {
	const location = useLocation();
	const path = location ? location.pathname + location.search : "";

	const ctx = useContext(AuthenticationContext);
	const { isValidated, isFinishedValidate, forceLogout } = ctx || {};

	useEffect(() => {
		if (isFinishedValidate && !isValidated && !path.startsWith("/login")) {
			forceLogout?.(path);
		}
	}, [isValidated, isFinishedValidate]);

	//user authenticated
	if (isFinishedValidate && isValidated) {
		return <Fragment>{props?.children}</Fragment>;
	}

	//validating
	else {
		return <Fragment>{props?.emptyComponent}</Fragment>;
	}
}

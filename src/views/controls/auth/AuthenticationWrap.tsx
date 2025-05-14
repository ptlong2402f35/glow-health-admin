import React, { createContext, Fragment, useEffect } from "react";
import User from "../../../models/User";
import useAuthentication from "../../hooks/auth/useAuthentication";
import ReactGA from "react-ga4";
import { useLocation } from "react-router";

export type AuthenticationContextType = {
	isValidated: boolean;
	validating: boolean;
	isFinishedValidate: boolean;
	token: string | null;
	userInfo: User | null;
	forceLogout: (backUrl?: string | null, targetUrl?: string) => void;
	onLoginSuccess: (user: User, onSuccess?: () => void) => void;
	updateUserInfo: (nAvatar: string | null, nFirstName: string | null, nLastName: string | null) => void;
};

export const AuthenticationContext = createContext<AuthenticationContextType | null>(null);

export default function AuthenticationWrap(props: { children: JSX.Element | JSX.Element[] | string | string[] }) {
	const {
		isValidated,
		validating,
		isFinishedValidate,
		token,
		userInfo,
		forceLogout,
		onLoginSuccess,
		updateUserInfo,
	} = useAuthentication({
		enableRefreshToken: false,
	});

	const location = useLocation();
	useEffect(() => {
		ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: window.location.pathname });
	}, [location]);

	return (
		<AuthenticationContext.Provider
			value={{
				isValidated,
				validating,
				isFinishedValidate,
				token,
				userInfo,
				forceLogout,
				onLoginSuccess,
				updateUserInfo,
			}}>
			{props.children}
		</AuthenticationContext.Provider>
	);
}

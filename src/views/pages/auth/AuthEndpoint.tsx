import React, { useContext, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import AuthService from "../../../services/AuthService";
import { AuthenticationContext } from "../../controls/auth/AuthenticationWrap";

export default function AuthEndpoint() {
	const { search } = useLocation();
	const history = useHistory();
	const params = new URLSearchParams(search);
	const searchCode = params.get("code") || "";
	const authCtx = useContext(AuthenticationContext);
	const { onLoginSuccess } = authCtx || {};

	useEffect(() => {
		const loginGoogle = async () => {
			try {
				if (searchCode) {
					let user = await AuthService.loginGoogle(searchCode);
					onLoginSuccess?.(user, () => {
						history.push("/");
					});
				}
			} catch (err) {
				console.error(err);
			}
		};
		loginGoogle();
	}, [searchCode]);

	useEffect(() => {
		const loginFacebook = async () => {
			try {
				if (searchCode) {
					let user = await AuthService.loginFacebook(searchCode);
					onLoginSuccess?.(user, () => {
						history.push("/");
					});
				}
			} catch (err) {
				console.error(err);
			}
		};
		loginFacebook();
	}, [searchCode]);

	return <div>AuthEndpoint</div>;
}

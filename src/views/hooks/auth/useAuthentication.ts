import { createContext, useEffect, useState } from "react";
import User from "../../../models/User";
import AuthService from "../../../services/AuthService";
import Logger from "../../../utils/Logger";
import { useHistory } from "react-router";
import { HttpStatus } from "../../../utils/constants";
import useRefreshToken from "./useRefreshToken";
import { proxyStorage } from "../../../utils/proxyStorage";
import HRService from "../../../services/HRService";

const Log = Logger.getLogger("useAuthentication");

export const LocalTokenKey = "token";
export const LocalUserIdKey = "user-id";
export const LocalUserInfoKey = "user-info";
export const LocalRefreshTokenKey = "refresh-token";
export const LocalTokenExpireKey = "token-expire";

export default function useAuthentication(
	props: {
		enableRefreshToken?: boolean;
		customAuthValidate?: (token: string) => Promise<void>;
		HRcustomAuthValidate?: (token: string) => Promise<void>;
	} | null
) {
	const [isValidated, setIsValidated] = useState(false);
	const [validating, setValidating] = useState(false);
	const [isFinishedValidate, setIsFinishedValidate] = useState(false);

	const [token, setToken] = useState(() => proxyStorage()?.getItem(LocalTokenKey) || null);
	const [userInfo, setUserInfo] = useState(() => loadLocalUserInfo());

	Log.log(`states: `, {
		isValidated,
		validating,
		isFinishedValidate,
		token,
		userInfo,
	});

	const history = useHistory();

	const { handleLoginSuccess, onValidateFail, onValidateSuccess } = useRefreshToken({
		onRefreshTokenSuccess: (nToken, nUserInfo) => {
			if (!nToken || !nUserInfo) return;

			setToken(nToken);
			setUserInfo(nUserInfo);

			localStorage.setItem(LocalTokenKey, nToken || "");
			localStorage.setItem(LocalUserIdKey, nUserInfo.id + "");
			storeLocalUserInfo(nUserInfo);

			setIsValidated(true);
			setIsFinishedValidate(true);
		},
		onRefreshTokenFail: () => {
			setIsValidated(false);
			setIsFinishedValidate(true);
		},
	});

	/**
	 * validate current user still authenticated
	 */
	const validate = async (backUrl?: string | null) => {
		if (!token) {
			setIsFinishedValidate(true);
			return;
		}

		setValidating(true);
		try {
			if (props?.customAuthValidate) {
				await props?.customAuthValidate(token);
			}
				else if(props?.HRcustomAuthValidate) {
					await HRService.validate(token);
			} else {
				await AuthService.validate(token);
			}

			setIsValidated(true);
			setIsFinishedValidate(true);

			//trigger refreshToken tracking job
			if (props?.enableRefreshToken) {
				onValidateSuccess();
			}
		} catch (err: any) {
			console.error(err);

			if (err?.response?.status == HttpStatus.Unauthorize) {
				//trigger refreshToken
				if (props?.enableRefreshToken) {
					onValidateFail();
				} else {
					setIsFinishedValidate(true);
				}
			} else {
				setIsFinishedValidate(true);
			}
		} finally {
			setValidating(false);
		}
	};

	const forceLogout = (backUrl?: string | null, targetUrl?: string) => {
		Log.log(`call force logout`, backUrl);
		{
			targetUrl
				? history.push(backUrl ? `/?back=${encodeURIComponent(backUrl)}` : `/`)
				: history.push(backUrl ? `/login?back=${encodeURIComponent(backUrl)}` : `/login`);
		}

		setToken(null);
		setUserInfo(null);
		localStorage.removeItem(LocalTokenKey);
		localStorage.removeItem(LocalUserIdKey);
		localStorage.removeItem(LocalUserInfoKey);
		localStorage.removeItem(LocalRefreshTokenKey);
		localStorage.removeItem(LocalTokenExpireKey);

		setIsValidated(false);
	};

	const onLoginSuccess = (user: User, onSuccess?: () => void) => {
		if (!user) return;

		setToken(user.token);
		setUserInfo(user);

		localStorage.setItem(LocalTokenKey, user.token || "");
		localStorage.setItem(LocalUserIdKey, user.id + "");
		storeLocalUserInfo(user);

		setIsValidated(true);
		setIsFinishedValidate(true);

		//trigger refreshToken tracking job
		if (props?.enableRefreshToken) {
			handleLoginSuccess(user);
		}
		onSuccess?.();
	};

	const updateUserInfo = (nAvatar: string | null, nFirstName: string | null, nLastName: string | null) => {
		let userName = [nFirstName, nLastName].filter((val) => val).join(" ");
		let nUser = new User({
			...userInfo,
			...(nAvatar && { avatar: nAvatar }),
			...((nFirstName || nFirstName === "") && { firstName: nFirstName }),
			...((nLastName || nLastName === "") && { lastName: nLastName }),
			...(userName && { userName: userName }),
		});
		setUserInfo(nUser);
		storeLocalUserInfo(nUser);
	};

	useEffect(() => {
		validate();
	}, []);

	return {
		isValidated,
		validating,
		isFinishedValidate,
		token,
		userInfo,
		validate,
		forceLogout,
		onLoginSuccess,
		updateUserInfo,
	};
}

export function loadLocalUserInfo(): User | null {
	if (!proxyStorage()?.getItem(LocalUserIdKey)) return null;
	if (!proxyStorage()?.getItem(LocalUserInfoKey)) return null;

	let uInfoRaw: any = null;
	let uId: string = "";
	try {
		uId = proxyStorage()?.getItem(LocalUserIdKey) || "";
		uInfoRaw = JSON.parse(proxyStorage()?.getItem(LocalUserInfoKey) || "");
	} catch (err) {
		console.error(err);
	}

	if (!uId || !uInfoRaw) return null;

	return new User({
		...uInfoRaw,
		id: proxyStorage()?.getItem(LocalUserIdKey),
	});
}

export function storeLocalUserInfo(userInfo: User) {
	if (!userInfo) return;

	localStorage.setItem(
		LocalUserInfoKey,
		JSON.stringify({
			role: userInfo.role,
			urlImage: userInfo.urlImage,
			userName: userInfo.userName,
			account: userInfo.account,
			firstName: userInfo.firstName,
			lastName: userInfo.lastName,
			phone: userInfo.phone,
			gender: userInfo.gender,
			countryId: userInfo.countryId,
		})
	);
}

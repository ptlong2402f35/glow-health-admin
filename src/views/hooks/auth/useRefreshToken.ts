import { useEffect, useRef, useState } from "react";
import User from "../../../models/User";
import AuthService from "../../../services/AuthService";
import Logger from "../../../utils/Logger";
import { proxyStorage } from "../../../utils/proxyStorage";
import { LocalRefreshTokenKey, LocalTokenExpireKey } from "./useAuthentication";

const Log = Logger.getLogger("useRefreshToken");

const ExpireTrackingInterval = 60000;

export default function useRefreshToken(props: {
	onRefreshTokenSuccess: (nToken: string | null, nUserInfo: User | null) => void;
	onRefreshTokenFail: () => void;
}) {
	const [refreshToken, setRefreshToken] = useState(() => proxyStorage()?.getItem(LocalRefreshTokenKey) || null);
	const [tokenExpireTime, setTokenExpireTime] = useState(() => loadLocalTokenExpireTime());

	const refreshTokenRef = useRef(refreshToken);
	const tokenExpireTimeRef = useRef(tokenExpireTime);

	Log.log(`states: `, {
		refreshToken,
		tokenExpireTime,
	});

	const expireTrackingJobRef = useRef<NodeJS.Timeout>();

	const handleLoginSuccess = (uInfo: User) => {
		Log.log(`begin handleLoginSuccess`);
		setRefreshToken(uInfo.refreshToken);
		setTokenExpireTime(uInfo.expireTime);
		localStorage.setItem(LocalRefreshTokenKey, uInfo.refreshToken || "");
		storeLocalTokenExpireTime(uInfo.expireTime);

		restartExpireTrackingJob();
	};

	const onValidateFail = async () => {
		Log.log(`begin onValidateFail`);
		doRefreshToken(
			(user) => {
				restartExpireTrackingJob();
				props?.onRefreshTokenSuccess(user.token, user);
			},
			() => {
				Log.log(`doRefreshToken onFail`);
				props?.onRefreshTokenFail();
			}
		);
	};

	const onValidateSuccess = async () => {
		Log.log(`begin onValidateSuccess`);
		restartExpireTrackingJob();
	};

	const doRefreshToken = async (onSuccess: (user: User) => void, onFail?: () => void) => {
		if (!refreshTokenRef.current) {
			onFail?.();
			return;
		}

		Log.log(`doRefreshToken`);
		try {
			let user = await AuthService.refreshToken(refreshTokenRef.current || "");

			Log.log(`call refreshToken successfully: `, user);
			setTokenExpireTime(user.expireTime);
			storeLocalTokenExpireTime(user.expireTime);

			onSuccess(user);
		} catch (err) {
			console.error(err);
			onFail?.();
		}
	};

	const restartExpireTrackingJob = () => {
		Log.log(`restartExpireTrackingJob`);
		if (expireTrackingJobRef.current) {
			clearInterval(expireTrackingJobRef.current);
		}

		expireTrackingJobRef.current = setInterval(expireTracking, ExpireTrackingInterval);
	};

	const expireTracking = () => {
		Log.log(`expireTracking: `, tokenExpireTimeRef.current);
		if (!tokenExpireTimeRef.current) return;

		let current = new Date();
		//if token will be expired soon
		if (tokenExpireTimeRef.current.getTime() - current.getTime() <= ExpireTrackingInterval) {
			doRefreshToken((user) => {
				props?.onRefreshTokenSuccess(user.token, user);
				restartExpireTrackingJob();
			});
		}
	};

	useEffect(() => {
		refreshTokenRef.current = refreshToken;
		tokenExpireTimeRef.current = tokenExpireTime;
	});

	return {
		handleLoginSuccess,
		onValidateFail,
		onValidateSuccess,
	};
}

export function loadLocalTokenExpireTime(): Date | null {
	try {
		if (!proxyStorage()?.getItem(LocalTokenExpireKey)) return null;

		let timestamp = parseInt(proxyStorage()?.getItem(LocalTokenExpireKey) || "");
		return new Date(timestamp);
	} catch (err) {
		console.error(err);
	}

	return null;
}

export function storeLocalTokenExpireTime(expireTime: Date | null) {
	if (!expireTime) return;

	localStorage.setItem(LocalTokenExpireKey, expireTime.getTime() + "");
}

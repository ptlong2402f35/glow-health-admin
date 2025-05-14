import axios from "axios";
import environments from "../environment";
import { DefaultModel } from "../models/IModel";
import http from "./http";
import PhoneAuthen from "../models/Login";
import User from "../models/User";

export const PhoneAuthentication = async (phone: string) => {
	const { data } = await http.post(`/phone-authorize`, {
		phone: phone,
	});
	return { data: new PhoneAuthen().parse(data) };
};

export const LoginForRefresh = async (phone: string, password: string, selectedCountryCode: string) => {
	const { data } = await http.post(`/mobile-login`, {
		email_username: phone,
		password: password,
		prefix: selectedCountryCode || "+84",
	});
	if (!data) {
		throw "error login";
	}
	const { data: me } = await http.get(`/auth/me`, {
		headers: {
			Authorization: `Bearer ${data.token}`,
		},
	});

	let datalogin = new User().parse(me);
	datalogin.token = data.token;
	datalogin.refreshToken = data.refreshToken;

	return datalogin;
};

export const SendOTPToPhone = async (phone: string) => {
	const { data } = await http.post(`/init-register`, {
		phone: phone,
	});
	return data;
};

export const VerifyOTP = async (phone?: string, otp?: string) => {
	const { data } = await http.post(`/verify-otp`, {
		phoneNumber: phone,
		otp: otp,
	});
	return data;
};

export const SignUp = async (otp: string, phone: string, password: string, idToken?: string) => {
	const { data } = await http.post(`/signup`, {
		otp: otp,
		phone: phone,
		password: password,
		passwordConfirmation: password,
		idToken: idToken,
	});
	return data;
};

export const UpdateGenerCountry = async (gender: string, countryId: string) => {
	const { data } = await http.post(`/update-gender-and-country`, {
		gender: gender,
		countryId: countryId,
	});
	return data;
};

export const InitForgetPassword = async (phone: string) => {
	const { data } = await http.post(`/init-forget-password`, {
		phone: phone,
		prefix: "",
	});
	return data;
};

export const OTPForgetPassword = async (phone: string) => {
	const { data } = await http.post(`/otp-forget-password`, {
		phone: phone,
	});
	return data;
};

export const UpdateOTPtPassword = async (phone: string, otp: string, password: string) => {
	const { data } = await http.post(`/update-otp-password`, {
		phone: phone,
		otp: otp,
		password: password,
	});
	return data;
};

export const VerifyOTPEnterPass = async (phone: string, otp: string) => {
	const { data } = await http.post(`/verify-otp`, {
		phoneNumber: phone,
		otp: otp,
	});
	return data;
};

export const VerifyOTPFireBase = async (idToken?: string) => {
	const { data } = await http.post(`/verify-otp-firebase`, {
		idToken: idToken || "",
	});
	return data;
};

export const UpdateOTPtPasswordFireBase = async (idToken: string, password: string) => {
	const { data } = await http.post(`/update-otp-password-firebase`, {
		idToken: idToken,
		password: password,
	});
	return data;
};

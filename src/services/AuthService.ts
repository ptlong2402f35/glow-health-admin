import User from "../models/User";
import { ApiResultErrorException } from "../utils/constants";
import http from "./http";

export default class AuthService {
	public static async login(email: string, password: string): Promise<User> {
		const { data } = await http.post(`/auth/login`, {
			phone: email,
			password: password,
		});

		return new User().parse(data);
	}

	public static async loginGoogle(code: string): Promise<User> {
		const { data } = await http.post(`/login-google`, {
			identify: code,
		});
		return new User().parse(data);
	}

	public static async loginFacebook(code: string): Promise<User> {
		const { data } = await http.post(`/login-facebook`, {
			identify: code,
		});
		return new User().parse(data);
	}

	public static async loginPhoneNumber(code: string): Promise<User> {
		const { data } = await http.post(`/login-firebase`, {
			identify: code,
		});
		return new User().parse(data);
	}

	public static async validate(token: string): Promise<void> {
		// await http.get(`/whoAmI`, {
		await http.get(`/auth/me`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	}

	public static async refreshToken(token: string): Promise<User> {
		const { data } = await http.post(`/refresh-token`, null, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return new User().parse(data);
	}

	public static async registerAccount(
		firstName: string,
		lastName: string,
		email: string,
		password: string,
		repassword: string
	): Promise<void> {
		const { data } = await http.post(`/signup`, {
			password: password,
			avatarUrl: "",
			lastName: lastName,
			firstName: firstName,
			email: email,
			phone: "",
		});
	}

	public static async LoginSystem(userName: string, password: string): Promise<void> {
		const { data } = await http.post(`/count-data`, {
			password: password,
			userName: userName,
		});
		return data;
	}
}

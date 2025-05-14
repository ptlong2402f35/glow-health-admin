import * as React from "react";
import { DefaultModel } from "../models/IModel";

import http from "./http";
import { ImageInputData } from "../views/hooks/useImageUploadInput";
import environments from "../environment";
import UserManagement from "../models/UserGlow";
import axios from "axios";

export async function getPersonalInfo() {
	const { data } = await http.get(`/auth/me`);
	return new UserManagement().parse(data);
}

export async function updatePersonalInfo(
	firstName?: string | null | undefined,
	lastName?: string | null | undefined,
	phoneNumber?: string | null | undefined,
	avatarLink?: string | null | undefined,
	bankName?: string | null | undefined,
	bankCardId?: string | null | undefined,
	bankOwner?: string | null | undefined,
	userName?: string | null | undefined
) {
	const params = {
		...((firstName || firstName === "") && { firstName: firstName, allowFirstName: true }),
		...((lastName || lastName === "") && { lastName: lastName, allowLastName: true }),
		...(phoneNumber && { phoneNumber: phoneNumber, allowPhoneNumber: true }),
		...(avatarLink && { avatarLink: avatarLink, allowAvatarLink: true }),
		...(bankName && { bankName: bankName, allowBankName: true }),
		...(bankCardId && { bankCardId: bankCardId, allowBankCardId: true }),
		...(bankOwner && { bankOwner: bankOwner, allowBankOwner: true }),
	};

	const { data } = await http.patch(`/users-personal`, params);
	return data;
}

export const uploadAvatar = async (avatar?: ImageInputData) => {
	const value = new FormData();
	const uploadUrl = "/aws-upload-single-image";
	// const uploadUrl = environments.uploadRoot + "/upload/avatar";
	value.append("image", avatar?.domData);
	const { data } = await axios.post("https://apidev.glowvietnam.com/api" + uploadUrl, value);
	return data;
};

export const uploadMutipleAvatars = async (avatars?: ImageInputData[]) => {
	const values = new FormData();
	const uploadUrl = "/aws-upload-multiple-image";

	avatars?.forEach((avatar, index) => {
		values.append(`images`, avatar?.domData);
	});

	const { data } = await axios.post("https://apidev.glowvietnam.com/api" +uploadUrl, values);
	return data;
};

export const changeUserPassword = async (
	email: string | null | undefined,
	oldPassword: string | undefined | null,
	newPassword: string | undefined | null
) => {
	const params = {
		email,
		oldPassword,
		newPassword,
	};
	const res = await http.put("/users/change-password", params);
	return res;
};

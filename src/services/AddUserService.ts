import http from "./http";

export interface ParamsAddUserForm {
	// email: string;
	phone: string;
	password: string;
	userName: string;
	// name: string;
	urlImage: string;
}

export interface ParamsUpdateUserForm {
	email: string;
	phone: string;
	password: string;
	id: number;
	urlImage: string;
	userName: string;
}

export async function addUserInfo(
	// email: string | null | undefined,
	phone: string | null | undefined,
	password: string | null | undefined,
	userName: string | null | undefined,
	// name: string | null | undefined,
	avatarLink: string | null | undefined,
	gender: number | null | undefined,
	selectedCountry: string | null | undefined
) {
	const params = {
		// email: email ?? null,
		phone: phone ?? null,
		password: password ?? null,
		userName: userName ?? null,
		// name: name ?? null,
		confirmPassword: password ?? null,
		urlImage: avatarLink ?? null,
		gender: gender ?? null,
		countryId: selectedCountry ?? null,
	};

	await http.post(`/user/create`, params);
}
export async function updateUserInfo(
	email: string | null | undefined,
	phone: string | null | undefined,
	password: string | null | undefined,
	id: number | null | undefined,
	avatarLink: string | null | undefined,
	selectedOwnerNumber: number | null | undefined,
	gender: number | null | undefined,
	selectedCountry: string | null | undefined
) {
	const params = {
		userName: email ?? null,
		phone: phone ?? null,
		password: password ?? null,
		confirmPassword: password ?? null,
		// id: id ?? null,
		urlImage: avatarLink ?? null,
		// storeId: selectedOwnerNumber ?? null,
		gender: gender ?? null,
		// countryId: selectedCountry ?? null,
	};

	await http.post(`/user/update`, params);
}

export async function banUser(id: number | null | undefined, ban: boolean | null | undefined) {
	const params = {
		ban: ban,
	};

	await http.post(`/admin-user/${id}/ban-user`, params);
}
export async function activeUser(id: number | null | undefined, activeTyppe: boolean | null | undefined) {
	const params = {
		active: activeTyppe,
	};

	await http.post(`/user/admin-unactive/${id}`, params);
}
export async function assignOwnerUser(id: number | null | undefined, storeId: number | null | undefined) {
	const params = {
		storeId: storeId,
	};

	await http.post(`/user/${id}/assign-owner`, params);
}
export async function activeStaff(id: number | null | undefined, activeTyppe: boolean | null | undefined) {
	const params = {
		active: activeTyppe,
	};

	await http.patch(`/users/${id}/update-active-staff`, params);
}

export async function addBlockSpam(id?: number) {
	const params = {
		userId: id ?? null,
	};

	await http.post(`release-spam`, params);
}

export async function punishUser(id: number | null | undefined, punishTyppe: boolean | null | undefined) {
	const params = {
		punish: punishTyppe,
	};

	await http.post(`/punish-user/${id}`, params);
}

import environments from "../../../../environment";

export const getGoogleAuthRedirectUrl = () => {
	return (
		`${environments.googleAuthUrl}?` +
		`scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&` +
		`include_granted_scopes=true&` +
		`response_type=code&` +
		`state=""&` +
		`redirect_uri=${environments.googleRedirectUrl}&` +
		`client_id=${environments.googleClientId}`
	);
};
export const getFacebookAuthRedirectUrl = () => {
	return (
		`${environments.facebookAuthUrl}?` +
		`scope=email&` +
		`response_type=code&` +
		`state=""&` +
		`redirect_uri=${environments.facebookRedirectUrl}&` +
		`client_id=${environments.facebookClientId}`
	);
};

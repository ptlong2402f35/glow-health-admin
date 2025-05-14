declare var firebase: any;

export const loginOTPSetPhoneNumber = (phoneNumber: string, verifierId: string) => {
	var appVerifier = new firebase.auth.RecaptchaVerifier(verifierId, { size: "invisible" });
	return firebase
		.auth()
		.signInWithPhoneNumber(phoneNumber, appVerifier)
		.then((confirmationResult: any) => {
			(window as any).__confirmationResult = confirmationResult;
			return Promise.resolve({
				state: true,
			});
		})
		.catch((error: any) => {
			return Promise.resolve({
				state: false,
			});
		});
};

export const loginOTPSetCode = (code: number) => {
	if ((window as any).__confirmationResult == null) {
		return Promise.resolve({
			state: false,
			message: "confirmationResult null",
		});
	} else {
		return (window as any).__confirmationResult
			.confirm(code)
			.then((result: any) => {
				var user = result.user;
				if (!user) {
					return Promise.resolve({
						state: false,
					});
				}
				return user.getIdToken().then((idToken: any) => {
					return Promise.resolve({
						state: true,
						value: {
							phone: user && user.phoneNumber,
							uid: user && user.uid,
							accessToken: idToken,
						},
					});
				});
			})
			.catch((error: any) => {
				return Promise.resolve({
					state: false,
				});
			});
	}
};

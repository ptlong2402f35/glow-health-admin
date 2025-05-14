import useSubmitUpdate from "./useSubmitUpdatePersonalInfo";

export function useUpdatePersonalInfo() {
	const { useConfirmUpdate } = useSubmitUpdate();
	const updatePersonalInfo = (
		userName: string,
		phone: string,
		changeToVisibleType: () => void,
		reload: () => void
	) => {
		if (!userName) {
			useConfirmUpdate("", "", phone, changeToVisibleType, reload);
			return;
		}
		const userNameUpdate = userName?.split(" ");
		switch (userNameUpdate?.length) {
			case 1: {
				useConfirmUpdate(userNameUpdate[0], "", phone, changeToVisibleType, reload);
				break;
			}
			case 2: {
				useConfirmUpdate(userNameUpdate[0], userNameUpdate[1], phone, changeToVisibleType, reload);
				break;
			}
			default: {
				var lastNameConverted = "";
				for (var i = 1; i < userNameUpdate.length; i++) {
					if (i != userNameUpdate.length - 1) lastNameConverted += userNameUpdate[i] + " ";
					else lastNameConverted += userNameUpdate[i];
				}
				useConfirmUpdate(userNameUpdate[0], lastNameConverted, phone, changeToVisibleType, reload);
			}
		}
	};

	return {
		updatePersonalInfo,
	};
}

import { useState } from "react";

export enum AlertType {
	Success = 1,
	Fail = 2,
	Confirm = 3,
}

export type AlertDialogExtraPropType = {
	title?: string;
	declineText?: string;
	acceptText?: string;
};

export type AlertDialogType = {
	open: boolean;
	onClose: () => void;
	type?: AlertType | null;
	content?: string | null;
	afterClose?: () => void;
	onAccept?: () => void;
	onDecline?: () => void;
	extraProps?: AlertDialogExtraPropType;
};

export default function useAttachAlertDialog(props: {}) {
	const onClose = () => {
		setDialogState((pState) => ({
			...pState,
			open: false,
		}));
	};

	const [dialogState, setDialogState] = useState<AlertDialogType>({
		open: false,
		type: AlertType.Success,
		onClose: onClose,
	});

	const openAlertDialog = (
		type: AlertType | null,
		content: string,
		afterClose?: () => void,
		onAccept?: () => void,
		onDecline?: () => void,
		extraProps?: AlertDialogExtraPropType
	) => {
		setDialogState({
			open: true,
			onClose: onClose,
			type: type,
			content: content,
			afterClose: afterClose,
			onAccept: onAccept,
			onDecline: onDecline,
			extraProps: extraProps,
		});
	};

	const closeAlertDialog = () => {
		setDialogState({
			open: false,
			onClose: onClose,
			type: AlertType.Success,
		});
	};

	return {
		dialogState,
		openAlertDialog,
		closeAlertDialog,
	};
}

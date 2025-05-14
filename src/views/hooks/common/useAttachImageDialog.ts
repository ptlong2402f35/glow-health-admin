import { useState } from "react";

export enum ImageDialogQuantityType {
	Single = 1,
	Multiple = 2,
}

export type ImageDialogType = {
	open: boolean;
	onClose: () => void;
	type?: ImageDialogQuantityType;
	url?: string;
	title?: string;
	alt?: string;
	images?: string[];
	currentIndex?: number;
	afterClose?: () => void;
};

export default function useAttachImageDialog(props: {} | undefined) {
	const onClose = () => {
		setDialogState((pState) => ({
			...pState,
			open: false,
		}));
	};

	const [dialogState, setDialogState] = useState<ImageDialogType>({
		open: false,
		onClose: onClose,
	});

	const openImageDialog = (
		url?: string,
		title?: string,
		alt?: string,
		images?: string[],
		afterClose?: () => void
	) => {
		setDialogState({
			open: true,
			onClose: onClose,
			url: url,
			title: title,
			alt: alt,
			images: images,
			afterClose: afterClose,
		});
	};

	const openSingleImageDialog = (url: string, afterClose?: () => void) => {
		setDialogState({
			open: true,
			onClose: onClose,
			url: url,
			afterClose: afterClose,
		});
	};

	const openMultipleImageDialog = (images: string[], index?: number, afterClose?: () => void) => {
		setDialogState({
			open: true,
			onClose: onClose,
			type: ImageDialogQuantityType.Multiple,
			images: images,
			currentIndex: index,
			afterClose: afterClose,
		});
	};

	const closeImageDialog = () => {
		setDialogState({
			open: false,
			onClose: onClose,
		});
	};

	return {
		dialogState,
		openImageDialog,
		openSingleImageDialog,
		openMultipleImageDialog,
		closeImageDialog,
	};
}

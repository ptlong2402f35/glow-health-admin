import { useContext } from "react";
import { CommonComponentsWrapContext } from "../controls/common/CommonComponentsWrap";

export default function useImageDialog() {
	const ctx = useContext(CommonComponentsWrapContext);
	return {
		openImageDialog: ctx?.imageDialog.openImageDialog,
		openSingleImageDialog: ctx?.imageDialog.openSingleImageDialog,
		openMultipleImageDialog: ctx?.imageDialog.openMultipleImageDialog,
		closeImageDialog: ctx?.imageDialog.closeImageDialog,
	};
}

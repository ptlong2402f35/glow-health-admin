import { useContext } from "react";
import { CommonComponentsWrapContext } from "../controls/common/CommonComponentsWrap";

export default function useLoadingDialog() {
	const ctx = useContext(CommonComponentsWrapContext);
	return {
		openLoadingDialog: ctx?.loadingDialog.openLoadingDialog,
		closeLoadingDialog: ctx?.loadingDialog.closeLoadingDialog,
	};
}

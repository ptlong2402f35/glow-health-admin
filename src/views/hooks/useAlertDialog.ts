import { useContext } from "react";
import { CommonComponentsWrapContext } from "../controls/common/CommonComponentsWrap";

export default function useAlertDialog() {
	const ctx = useContext(CommonComponentsWrapContext);
	return {
		openAlertDialog: ctx?.alertDialog.openAlertDialog,
		closeAlertDialog: ctx?.alertDialog.closeAlertDialog,
	};
}

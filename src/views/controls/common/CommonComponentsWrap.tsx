import React, { createContext, useState, useEffect } from "react";
import Logger from "../../../utils/Logger";
import useAttachAlertDialog, { AlertDialogExtraPropType, AlertType } from "../../hooks/common/useAttachAlertDialog";
import useAttachImageDialog from "../../hooks/common/useAttachImageDialog";
import useAttachLoadingDialog, { LoadingType } from "../../hooks/common/useAttachLoadingDialog";
import useFirebaseInit from "../../hooks/common/useFirebaseInit";
import CommonAlertDialog from "../components/commonAlertDialog/CommonAlertDialog";
import CommonImageDialog from "../components/commonImageDialog/CommonImageDialog";
import CommonLoadingDialog from "../components/commonLoadingDialog/CommonLoadingDialog";
import { StyleChatPlugin } from "../components/ChatPlugin/StyleChatPluginFacebook";

const Log = Logger.getLogger("CommonComponentsWrap");

export type CommonComponentsWrapContextType = {
	alertDialog: {
		openAlertDialog: (
			type: AlertType | null,
			content: string,
			afterClose?: () => void,
			onAccept?: () => void,
			onDecline?: () => void,
			extraProps?: AlertDialogExtraPropType
		) => void;
		closeAlertDialog: () => void;
	};
	loadingDialog: {
		openLoadingDialog: (type?: LoadingType | null, label?: string | null, afterClose?: () => void) => void;
		closeLoadingDialog: () => void;
	};
	imageDialog: {
		openImageDialog: (
			url?: string,
			title?: string,
			alt?: string,
			images?: string[],
			afterClose?: () => void
		) => void;
		openSingleImageDialog: (url: string, afterClose?: () => void) => void;
		openMultipleImageDialog: (images: string[], index?: number, afterClose?: () => void) => void;
		closeImageDialog: () => void;
	};
};

export const CommonComponentsWrapContext = createContext<CommonComponentsWrapContextType | null>(null);

export default function CommonComponentsWrap(props: { children: JSX.Element | JSX.Element[] | string | string[] }) {
	const { dialogState: alertDialogState, openAlertDialog, closeAlertDialog } = useAttachAlertDialog({});
	const { dialogState: loadingDialogState, openLoadingDialog, closeLoadingDialog } = useAttachLoadingDialog({});
	const {
		dialogState: imageDialogState,
		openImageDialog,
		openSingleImageDialog,
		openMultipleImageDialog,
		closeImageDialog,
	} = useAttachImageDialog({});

	useFirebaseInit();

	Log.log(`rerender`);

	return (
		<CommonComponentsWrapContext.Provider
			value={{
				alertDialog: {
					openAlertDialog,
					closeAlertDialog,
				},
				loadingDialog: {
					openLoadingDialog,
					closeLoadingDialog,
				},
				imageDialog: {
					openImageDialog,
					openSingleImageDialog,
					openMultipleImageDialog,
					closeImageDialog,
				},
			}}>
			<div className="common-components-wrap">
				<div className="common-components-wrap-inner">{props?.children}</div>
			</div>

			<CommonAlertDialog {...alertDialogState} />
			<CommonLoadingDialog {...loadingDialogState} />
			<CommonImageDialog {...imageDialogState} />
			<StyleChatPlugin />
		</CommonComponentsWrapContext.Provider>
	);
}

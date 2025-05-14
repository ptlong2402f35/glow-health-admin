import React, { createContext, useState } from "react";
import Wallet from "../../../models/Wallet";
import Logger from "../../../utils/Logger";
import useDetectFullScreenStyle from "../../hooks/public/useDetectFullScreenStyle";
import WithdrawRequest from "../../../models/WithdrawRequest";

const Log = Logger.getLogger("PublicComponentsWrap");

export type PublicComponentsWrapContextType = {
	isFullScreen: boolean,
	isDialogOpen: boolean,
	setIsDialogOpen:(val: boolean) => void,
};

export const PublicComponentsWrapContext = createContext<PublicComponentsWrapContextType | null>(null);

export default function PublicComponentsWrap(props: { children: JSX.Element | JSX.Element[] | string | string[] }) {

	const { isFullScreen } = useDetectFullScreenStyle();
	const [isDialogOpen, setIsDialogOpen] = useState(false);


	

	return (
		<PublicComponentsWrapContext.Provider value={{
			isFullScreen: isFullScreen,
			isDialogOpen: isDialogOpen,
			setIsDialogOpen: setIsDialogOpen,

		}}>
			<div className="public-components-wrap">
				<div className="public-components-wrap-inner">{props?.children}</div>
			</div>
		</PublicComponentsWrapContext.Provider>
	);
}

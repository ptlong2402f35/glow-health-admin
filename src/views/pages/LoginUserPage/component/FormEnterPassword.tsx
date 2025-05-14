import React, { createContext, useEffect, useRef, useState } from "react";
import {
	ForgotPassword,
	FormBackDialogLoginImg,
	FormLoginContinue,
	FormLoginDescription,
	FormLoginInput,
	FormLoginInputImg,
	FormLoginInputImgWrap,
	FormLoginInputWrap,
	FormLoginPageWrap,
	FormLoginTitle,
} from "../styled/StyledLogin";
import useAuthentication from "../hook/useLogin";
import PhoneAuthen from "../../../../models/Login";
import useLoginForRefresh from "../hook/LoginForRefesh";
import useLoadedUser from "../../../hooks/auth/useLoadedUser";
import DialogUpdateCouGen from "./DialogUpdateCountryGender";
import { TranslateLabels } from "../../../controls/layout/content/MultiLanguge";

export default function FormEnterPassword(props: {
	phoneAuthen?: PhoneAuthen;
	setIsExist: (val: number) => void;
	handleEnterPass: () => Promise<void>;
	lang: string;
	selectedCountryCode: string;
	loading: boolean;
	setLoading: (val: boolean) => void;
}) {
	const [enterPassword, setEnterPassword] = useState("");
	const { dologin, userInfo } = useLoginForRefresh({});

	// const {user} = useLoadedUser()

	const handleSave = async () => {
		props.setLoading(true);
		await dologin(props.phoneAuthen?.phone || "", enterPassword, props.selectedCountryCode);
		props.setLoading(false);
	};

	const handleCancel = async () => {
		props.setIsExist(1);
	};
	const phoneNumberInputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (phoneNumberInputRef.current) {
			phoneNumberInputRef.current.focus();
		}
	}, []);
	return (
		<>
			<FormBackDialogLoginImg
				onClick={handleCancel}
				src={"/static/img/direction-left01.png"}
			/>
			<FormLoginTitle>{TranslateLabels[props.lang]?.LOGIN_ENTER_YOUR_PASSWORD}</FormLoginTitle>
			<FormLoginDescription>
				{TranslateLabels[props.lang]?.LOGIN_SDT_LOGIN} {props.phoneAuthen?.phone}
			</FormLoginDescription>

			<FormLoginInputWrap>
				<FormLoginInput
					type="password"
					placeholder="Nhập mật khẩu"
					value={enterPassword}
					onChange={(e) => setEnterPassword(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							handleSave();
						}
					}}
					ref={phoneNumberInputRef}
				/>
			</FormLoginInputWrap>
			<ForgotPassword onClick={props.handleEnterPass}>
				{TranslateLabels[props.lang]?.LOGIN_FORGOT_PASSWORD}
			</ForgotPassword>
			<FormLoginContinue
				onClick={handleSave}
				disabled={props.loading}>
				{" "}
				{TranslateLabels[props.lang]?.LOGIN_CONTINUE}
			</FormLoginContinue>
			<></>
		</>
	);
}

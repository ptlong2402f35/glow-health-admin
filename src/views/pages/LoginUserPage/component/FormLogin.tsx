import React, { createContext, useEffect, useRef, useState } from "react";
import {
	AgreeLawLogin,
	AgreeLawLoginLink,
	DropdownContainerFireBase,
	DropdownHeaderFireBase,
	DropdownListContainerFireBase,
	DropdownListFireBase,
	FlagImageFireBase,
	ForgotPassword,
	FormLoginContinue,
	FormLoginDescription,
	FormLoginInput,
	FormLoginInputImg,
	FormLoginInputImgWrap,
	FormLoginInputWrap,
	FormLoginPageWrap,
	FormLoginTitle,
	ListItemFireBase,
} from "../styled/StyledLogin";
import useAuthentication, { setupRecaptcha } from "../hook/useLogin";
import FormEnterPassword from "./FormEnterPassword";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import useAlertDialog from "../../../hooks/useAlertDialog";
import CodeOTPLogin from "./CodeOTPLogin";
import CodeOTPEnterPassword from "./CodeOTPEnterPassword";
import usePostOTPEnterPass from "../hook/usePostOTPEnterPass";
import { TranslateLabels, useLanguage } from "../../../controls/layout/content/MultiLanguge";
import { GlowLink } from "../../home/GlowLink";
import { PHONE_COUNTRY_CODE } from "../hook/phoneCountryCode";

export default function FormLogin(props: { setPhoneNumber: (val: string) => void; phoneNumber: string }) {
	const { doAutthen, phoneAuthen, confirmationResult, setConfirmationResult } = useAuthentication({});
	const [isExist, setIsExist] = useState<number>(1);
	const [phoneNumberError, setPhoneNumberError] = useState("");
	const { openAlertDialog } = useAlertDialog();
	const { doOTP, infoOTPEnPass, setInfoOTPEnPas } = usePostOTPEnterPass({
		setConfirmationResult: setConfirmationResult,
	});
	const [selectedCountryCode, setSelectedCountryCode] = useState(PHONE_COUNTRY_CODE[0].dial_code);
	const [loading, setLoading] = useState(false);

	const validatePhoneNumber = (phoneNumber: string) => {
		const trimmedPhoneNumber = phoneNumber.trim();
		const firstChar = trimmedPhoneNumber.charAt(0);
		const isValidLength = trimmedPhoneNumber.length === (firstChar === "0" ? 10 : 9);

		if (!isValidLength) {
			setPhoneNumberError("Số điện thoại phải có 10 số nếu số đầu tiên là 0 hoặc 9 số nếu không bắt đầu từ 0");
			return false;
		}
		setPhoneNumberError("");
		return true;
	};
	const handleSave = async () => {
		const isValid = validatePhoneNumber(props.phoneNumber);
		if (!isValid) {
			openAlertDialog?.(AlertType.Fail, phoneNumberError || "Số điện thoại không hợp lệ");
			return;
		}
		setLoading(true);
		let formattedPhoneNumber = props.phoneNumber.trim();
		if (formattedPhoneNumber.startsWith("0")) {
			formattedPhoneNumber = formattedPhoneNumber.substring(1);
		}

		formattedPhoneNumber = selectedCountryCode + formattedPhoneNumber;
		await doAutthen(formattedPhoneNumber);
		setIsExist(2);
		setLoading(false);
		// props.setPhoneNumber("")
	};

	const handleEnterPass = async () => {
		const isValid = validatePhoneNumber(props.phoneNumber);
		if (!isValid) {
			openAlertDialog?.(AlertType.Fail, phoneNumberError || "Số điện thoại không hợp lệ");
			return;
		}
		setLoading(true);
		let formattedPhoneNumber = props.phoneNumber.trim();
		if (formattedPhoneNumber.startsWith("0")) {
			formattedPhoneNumber = formattedPhoneNumber.substring(1);
		}

		formattedPhoneNumber = selectedCountryCode + formattedPhoneNumber;
		await doOTP(formattedPhoneNumber);
		setIsExist(3);
		setLoading(false);
		// props.setPhoneNumber("")
	};
	const { lang } = useLanguage();
	const phoneNumberInputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (phoneNumberInputRef.current) {
			phoneNumberInputRef.current.focus();
		}
	}, []);
	return (
		<FormLoginPageWrap>
			{isExist === 1 ? (
				<>
					<FormLoginTitle>{TranslateLabels[lang]?.YOUR_PHONE_NUMBER}</FormLoginTitle>
					<FormLoginDescription>{TranslateLabels[lang]?.PHONE_NUMBER_TO_LOG_OR_SIGN_UP}</FormLoginDescription>

					<FormLoginInputWrap>
						<FormLoginInputImgWrap>
							<CustomDropdown
								selectedCountryCode={selectedCountryCode}
								setSelectedCountryCode={setSelectedCountryCode}
							/>
						</FormLoginInputImgWrap>
						<FormLoginInput
							type="text"
							id="recaptcha-container"
							placeholder={TranslateLabels[lang]?.LOGIN_YOUR_PHONE_NUMBER}
							value={props.phoneNumber}
							onChange={(e) => props.setPhoneNumber(e.target.value)}
							inputMode="numeric"
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									handleSave();
								}
							}}
							ref={phoneNumberInputRef}
						/>
					</FormLoginInputWrap>
					{/* <ForgotPassword onClick={handleEnterPass}>{TranslateLabels[lang]?.LOGIN_FORGOT_PASSWORD}</ForgotPassword> */}
					<FormLoginContinue
						onClick={handleSave}
						disabled={loading}>
						{" "}
						{TranslateLabels[lang]?.LOGIN_CONTINUE}
					</FormLoginContinue>
				</>
			) : isExist === 2 ? (
				<>
					{!phoneAuthen?.isExist ? (
						<>
							<CodeOTPLogin
								phoneAuthen={phoneAuthen}
								setIsExist={setIsExist}
								lang={lang}
								confirmationResult={confirmationResult}
								selectedCountryCode={selectedCountryCode}
								infoOTPEnPass={infoOTPEnPass}
								setConfirmationResult={setConfirmationResult}
							/>
						</>
					) : (
						<FormEnterPassword
							phoneAuthen={phoneAuthen}
							setIsExist={setIsExist}
							handleEnterPass={handleEnterPass}
							lang={lang}
							selectedCountryCode={selectedCountryCode}
							loading={loading}
							setLoading={setLoading}
						/>
					)}
				</>
			) : (
				<>
					<CodeOTPEnterPassword
						phoneAuthen={phoneAuthen}
						setIsExist={setIsExist}
						setInfoOTPEnPas={setInfoOTPEnPas}
						infoOTPEnPass={infoOTPEnPass}
						doOTP={doOTP}
						phoneNumber={props.phoneNumber}
						lang={lang}
						confirmationResult={confirmationResult}
						setConfirmationResult={setConfirmationResult}
					/>
				</>
			)}
			<AgreeLawLogin>
				<AgreeLawLoginLink to="/quy-che">{TranslateLabels[lang]?.AGREE_LAW}</AgreeLawLoginLink>
			</AgreeLawLogin>
		</FormLoginPageWrap>
	);
}

export function CustomDropdown(props: {
	selectedCountryCode: string;
	setSelectedCountryCode: (value: string) => void;
}) {
	const [isOpen, setIsOpen] = useState(false);
	const selectedCountry = PHONE_COUNTRY_CODE.find((country) => country.dial_code === props.selectedCountryCode);

	const toggleDropdown = () => setIsOpen(!isOpen);
	const handleOptionClick = (dial_code: any) => {
		props.setSelectedCountryCode(dial_code);
		setIsOpen(false);
	};

	return (
		<DropdownContainerFireBase>
			<DropdownHeaderFireBase onClick={toggleDropdown}>
				<FlagImageFireBase
					src={selectedCountry?.image}
					alt={selectedCountry?.name}
				/>
				{selectedCountry?.dial_code}{" "}
				<i
					className="fa fa-angle-down"
					aria-hidden="true"></i>
			</DropdownHeaderFireBase>
			{isOpen && (
				<DropdownListContainerFireBase>
					<DropdownListFireBase>
						{PHONE_COUNTRY_CODE.map((country) => (
							<ListItemFireBase
								key={country.code}
								onClick={() => handleOptionClick(country.dial_code)}>
								<FlagImageFireBase
									src={country.image}
									alt={country.name}
								/>
								{country.dial_code} {country.name}
							</ListItemFireBase>
						))}
					</DropdownListFireBase>
				</DropdownListContainerFireBase>
			)}
		</DropdownContainerFireBase>
	);
}

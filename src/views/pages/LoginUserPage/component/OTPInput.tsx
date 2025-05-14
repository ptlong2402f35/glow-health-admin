import React, { useEffect, useRef, useState } from "react";
import { OTPInputBox, OTPInputContainer } from "../styled/StyledLogin";

export function OTPInput(props: {
	length: any;
	setEnteredOTP: (val: string) => void;
	handleSave: () => Promise<void>;
}) {
	const [otp, setOTP] = useState(Array(props.length).fill(""));
	const inputRefs = useRef([]);

	const handleChange = (e: any, index: any) => {
		const newOTP = [...otp];
		const value = e.target.value;

		if (!isNaN(value) && value !== "") {
			newOTP[index] = value;
			setOTP(newOTP);
			if (index < props.length - 1) {
				(inputRefs.current[index + 1] as any).focus();
			}
		} else {
			newOTP[index] = "";
			setOTP(newOTP);
		}
	};

	const handleKeyDown = (e: any, index: any) => {
		if (e.key === "Backspace" && !otp[index] && index > 0) {
			(inputRefs.current[index - 1] as any).focus();
		} else if (e.key === "ArrowLeft" && index > 0) {
			(inputRefs.current[index - 1] as any).focus();
		} else if (e.key === "ArrowRight" && index < props.length - 1) {
			(inputRefs.current[index + 1] as any).focus();
		}
		if (e.key === "Enter") {
			props.handleSave();
		}
	};
	const handleKeyPress = (e: any, index: any) => {
		if (/[0-9]/.test(e.key)) {
			e.preventDefault();
			const newOTP = [...otp];
			newOTP[index] = e.key;
			setOTP(newOTP);
			if (index < props.length - 1) {
				(inputRefs.current[index + 1] as any).focus();
			}
		}
	};

	useEffect(() => {
		props.setEnteredOTP(otp.join(""));
	}, [otp]);

	return (
		<OTPInputContainer>
			{otp.map((digit, index) => (
				<OTPInputBox
					key={index}
					type="text"
					maxLength={1}
					value={digit}
					onChange={(e) => handleChange(e, index)}
					ref={(input) => ((inputRefs.current[index] as any) = input)}
					inputMode="numeric"
					onKeyDown={(e) => handleKeyDown(e, index)}
					onFocus={(e) => e.target.select()}
					onKeyPress={(e) => handleKeyPress(e, index)}
				/>
			))}
		</OTPInputContainer>
	);
}

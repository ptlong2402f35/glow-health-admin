import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
	FormLoginContainer,
	FormLoginCenter,
	FormLoginPanel,
	FormLoginMainBox,
	FormLoginBabel,
	EnvelopeIcon,
	FormLoginEmail,
	EyeIcon,
	FormLoginPassword,
	FormLoginForgotLink,
	ButtunLogin,
	LoginSubmit,
	LoginRegisterBox,
	LoginRegisterLabel,
	LoginTextRegister,
	LoginRegister,
	TextError,
	InputWrapper,
	LoginSubmitWrap,
	TextAssign,
	TextWebName,
	FormLoginForgotLinkWrap,
} from "./styled/LoginStyles";
import { Link } from "react-router-dom";
import useLoginForm from "./styled/hook/useLoginForm";
interface IFormInput {
	identify: string;
	password: string;
}

export default function Login() {
	const [isChecked, setIsChecked] = useState(false);

	function handleChange() {
		setIsChecked(!isChecked);
	}
	const [visible, setVisible] = useState(false);

	const { login, disableButton } = useLoginForm();

	const yupObj = {
		identify: yup.string().required("Cần nhập giá trị này"),
		password: yup.string().required("Cần nhập giá trị này").trim().min(4, "Mật khẩu ít nhất 4 ký tự"),
	};

	const schema = yup.object(yupObj).required();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormInput>({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data: IFormInput) => {
		login(data);
	};

	return (
		<>
			<FormLoginContainer>
				<FormLoginCenter>
					<FormLoginPanel>
						<form onSubmit={handleSubmit(onSubmit)}>
							<FormLoginMainBox>
								<FormLoginBabel>Xin chào</FormLoginBabel>
								<InputWrapper>
									<EnvelopeIcon>
										<i className="fa fa-envelope"></i>
									</EnvelopeIcon>
									<FormLoginEmail
										placeholder="Mã khách hàng/Email"
										{...register("identify")}
									/>
								</InputWrapper>
								<TextError>{errors.identify?.message}</TextError>
								<InputWrapper>
									<EnvelopeIcon>
										<i className="fa fa-lock"></i>
									</EnvelopeIcon>
									<EyeIcon onClick={() => setVisible(!visible)}>
										{visible ? <i className="fa fa-eye"></i> : <i className="fa fa-eye-slash"></i>}
									</EyeIcon>
									<FormLoginPassword
										type={visible ? "text" : "password"}
										placeholder="Mật khẩu"
										{...register("password")}
									/>
								</InputWrapper>
								<TextError>{errors.password?.message}</TextError>
								<LoginSubmit>
									<LoginSubmitWrap></LoginSubmitWrap>
									<ButtunLogin
										disableButton={disableButton}
										disabled={disableButton ? true : false}
										type="submit">
										Đăng nhập
									</ButtunLogin>
								</LoginSubmit>
							</FormLoginMainBox>
						</form>
					</FormLoginPanel>
				</FormLoginCenter>
			</FormLoginContainer>
			{/* <FormLoginPhoneNumber
				closeForm={closeForm}
				setCloseForm={setCloseForm}
			/> */}
		</>
	);
}

/* <WapperButton>
					<Button
						onClick={() => login}
						type="submit">
						<Text>Đăng nhập</Text>
					</Button>
					<LoginWithGoogle href={getGoogleAuthRedirectUrl()}>
						<div>Đăng nhập với Google</div>
					</LoginWithGoogle>
					<LoginWithFacebook href={getFacebookAuthRedirectUrl()}>
						<div>Đăng nhập với FaceBook</div>
					</LoginWithFacebook>
					<LoginWithPhoneNumber onClick={() => setCloseForm(false)}>
						Đăng nhập với số điện thoại
					</LoginWithPhoneNumber>
				</WapperButton> */

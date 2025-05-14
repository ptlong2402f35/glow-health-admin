import React, { useState } from "react";
import { PageCenter, PageHeader, PageWrap } from "../../controls/components/form/Page";
import {
	ButtunLogin,
	FormLoginBabel,
	FormLoginMainBox,
	LoginSubmit,
	LoginSubmitWrap,
	InputWrapper,
	FormLoginPassword,
	FormLoginEmail,
	EnvelopeIcon,
	EyeIcon,
} from "../login/styled/LoginStyles";
import { FormLoginSystemManagement } from "./styled/StyledAdminSystem";
import useLoginSystem from "./hook/useLoginSystem";
import AdminSystemTable from "./AdminSystemTable";

export default function AdminSystemManagement() {
	const [visible, setVisible] = useState(false);
	const {
		createdVoucher,
		soCuaHangMoi,
		soLuongGiaoDich,
		soLuongTruyCap,
		soNguoiBan,
		soNguoiBanMoi,
		soSanPhamMoi,
		tongGiaTriGiaoDich,
		tongSoCuaHang,
		tongSoDonHangKhongThanhCong,
		tongSoDonHangThanhCong,
		tongSoSanPham,
		annuallyData,
	} = useLoginSystem();

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [dataFetched, setDataFetched] = useState(false);

	const handleUsernameChange = (e: any) => {
		setUsername(e.target.value);
	};

	const handlePasswordChange = (e: any) => {
		setPassword(e.target.value);
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		createdVoucher(username, password)
			.then(() => {
				setDataFetched(true);
			})
			.catch(() => {
				setDataFetched(false);
			});
	};

	return (
		<PageWrap>
			{!dataFetched ? (
				<PageCenter>
					<FormLoginSystemManagement>
						<FormLoginBabel>Đăng nhập để xem thống kê</FormLoginBabel>
						<form onSubmit={handleSubmit}>
							<InputWrapper>
								<EnvelopeIcon>
									<i className="fa fa-envelope"></i>
								</EnvelopeIcon>
								<FormLoginEmail
									type="text"
									placeholder="Mã khách hàng/Email"
									value={username}
									onChange={handleUsernameChange}
								/>
							</InputWrapper>
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
									value={password}
									onChange={handlePasswordChange}
								/>
							</InputWrapper>
							<LoginSubmit>
								<LoginSubmitWrap></LoginSubmitWrap>
								<ButtunLogin type="submit">Đăng nhập</ButtunLogin>
							</LoginSubmit>
						</form>
					</FormLoginSystemManagement>
				</PageCenter>
			) : (
				<AdminSystemTable
					soCuaHangMoi={soCuaHangMoi}
					soLuongGiaoDich={soLuongGiaoDich}
					soLuongTruyCap={soLuongTruyCap}
					soNguoiBan={soNguoiBan}
					soNguoiBanMoi={soNguoiBanMoi}
					soSanPhamMoi={soSanPhamMoi}
					tongGiaTriGiaoDich={tongGiaTriGiaoDich}
					tongSoCuaHang={tongSoCuaHang}
					tongSoDonHangKhongThanhCong={tongSoDonHangKhongThanhCong}
					tongSoDonHangThanhCong={tongSoDonHangThanhCong}
					tongSoSanPham={tongSoSanPham}
					annuallyData={annuallyData}
				/>
			)}
		</PageWrap>
	);
}

import ProductService from "../../../../services/ProductService";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import { ImageInputData } from "../../../hooks/useImageUploadInput";
import { uploadAvatar, uploadMutipleAvatars } from "../../../../services/PersonalService";
import VoucherService from "../../../../services/VoucherService";
import AuthService from "../../../../services/AuthService";
import { useState } from "react";
import { AnnuallyData } from "../../../../models/Bank";

export default function useLoginSystem() {
	const [soCuaHangMoi, setSoCuaHangMoi] = useState(0);
	const [soLuongGiaoDich, setSoLuongGiaoDich] = useState(0);
	const [soLuongTruyCap, setSoLuongTruyCap] = useState(0);
	const [soNguoiBan, setSoNguoiBan] = useState(0);
	const [soNguoiBanMoi, setSoNguoiBanMoi] = useState(0);
	const [soSanPhamMoi, setSoSanPhamMoi] = useState(0);
	const [tongGiaTriGiaoDich, setTongGiaTriGiaoDich] = useState(0);
	const [tongSoCuaHang, setTongSoCuaHang] = useState(0);
	const [tongSoDonHangKhongThanhCong, setTongSoDonHangKhongThanhCong] = useState(0);
	const [tongSoDonHangThanhCong, setTongSoDonHangThanhCong] = useState(0);
	const [tongSoSanPham, setTongSoSanPham] = useState(0);
	const [annuallyData, setAnnuallyData] = useState<AnnuallyData[]>([]);

	const { openAlertDialog } = useAlertDialog();
	const createdVoucher = async (userName: string, password: string) => {
		try {
			var data: any = await AuthService.LoginSystem(userName, password);
			console.log(data);
			setSoCuaHangMoi(data.soCuaHangMoi);
			setSoLuongGiaoDich(data.soLuongGiaoDich);
			setSoLuongTruyCap(data.soLuongTruyCap);
			setSoNguoiBan(data.soNguoiBan);
			setSoNguoiBanMoi(data.soNguoiBanMoi);
			setSoSanPhamMoi(data.soSanPhamMoi);
			setTongGiaTriGiaoDich(data.tongGiaTriGiaoDich);
			setTongSoCuaHang(data.tongSoCuaHang);
			setTongSoDonHangKhongThanhCong(data.tongSoDonHangKhongThanhCong);
			setTongSoDonHangThanhCong(data.tongSoDonHangThanhCong);
			setTongSoSanPham(data.tongSoSanPham);
			setAnnuallyData(data.annuallyData);
		} catch (error) {
			openAlertDialog?.(AlertType.Fail, "Tài khoản hoặc mật khẩu không chính xác!");
			throw error;
		}
	};

	return {
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
	};
}

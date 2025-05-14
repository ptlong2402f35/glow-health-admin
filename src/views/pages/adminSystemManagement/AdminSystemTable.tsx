import React from "react";
import {
	AdminSystemTableBody,
	AdminSystemTableHead,
	AdminSystemTableInner,
	AdminSystemTableMain,
	AdminSystemTableTitle,
	AdminSystemTableTitleWrap,
	AdminSystemTableWidth200,
	AdminSystemTableWidth250,
	AdminSystemTableWrap,
	AdminSystemTitleYear,
} from "./styled/StyledAdminSystem";
import { format } from "date-fns";
import { AnnuallyData } from "../../../models/Bank";
import moment from "moment";

export default function AdminSystemTable(props: {
	soCuaHangMoi: number;
	soLuongGiaoDich: number;
	soLuongTruyCap: number;
	soNguoiBan: number;
	soNguoiBanMoi: number;
	soSanPhamMoi: number;
	tongGiaTriGiaoDich: number;
	tongSoCuaHang: number;
	tongSoDonHangKhongThanhCong: number;
	tongSoDonHangThanhCong: number;
	tongSoSanPham: number;
	annuallyData: AnnuallyData[];
}) {
	const currentDate = new Date();
	return (
		<AdminSystemTableWrap>
			<AdminSystemTableTitleWrap>
				<AdminSystemTableTitle>Báo cáo số liệu</AdminSystemTableTitle>
				<div>Từ ngày: 01/01/2023 đến {format(currentDate, "dd/MM/yyyy HH:mm:ss")}</div>
			</AdminSystemTableTitleWrap>
			<AdminSystemTitleYear>Tổng cộng</AdminSystemTitleYear>
			<AdminSystemTableMain>
				<AdminSystemTableHead>
					<AdminSystemTableWidth200>Tiêu chí</AdminSystemTableWidth200>
					<div>Số lượng</div>
				</AdminSystemTableHead>
				<AdminSystemTableBody>
					<AdminSystemTableWidth250>
						{/* <AdminSystemTableInner>Số lượng giao dịch</AdminSystemTableInner>
						<AdminSystemTableInner>Số lượng truy cập</AdminSystemTableInner> */}
						<AdminSystemTableInner>Số người bán</AdminSystemTableInner>
						{/* <AdminSystemTableInner>Số người bán mới</AdminSystemTableInner> */}
						<AdminSystemTableInner>Số sản phẩm / Dịch vụ</AdminSystemTableInner>
						{/* <AdminSystemTableInner>Số sản phẩm / Dịch vụ mới</AdminSystemTableInner>
						<AdminSystemTableInner>Số đơn hàng thành công</AdminSystemTableInner>
						<AdminSystemTableInner>Số đơn hàng không thành công </AdminSystemTableInner>
						<AdminSystemTableInner>Tổng giá trị giao dịch</AdminSystemTableInner> */}
					</AdminSystemTableWidth250>
					<div>
						{/* <AdminSystemTableInner>{props.soLuongGiaoDich}</AdminSystemTableInner>
						<AdminSystemTableInner>{props.soLuongTruyCap}</AdminSystemTableInner> */}
						<AdminSystemTableInner>{props.soNguoiBan}</AdminSystemTableInner>
						{/* <AdminSystemTableInner>{props.soNguoiBanMoi}</AdminSystemTableInner> */}
						<AdminSystemTableInner>{props.tongSoSanPham}</AdminSystemTableInner>
						{/* <AdminSystemTableInner>{props.soSanPhamMoi}</AdminSystemTableInner>
						<AdminSystemTableInner>{props.tongSoDonHangThanhCong}</AdminSystemTableInner>
						<AdminSystemTableInner>{props.tongSoDonHangKhongThanhCong}</AdminSystemTableInner>
						<AdminSystemTableInner>{props.tongGiaTriGiaoDich}</AdminSystemTableInner> */}
					</div>
				</AdminSystemTableBody>
			</AdminSystemTableMain>
			{props.annuallyData.map((val, index) => (
				<>
					<AdminSystemTitleYear>
						{" "}
						Năm {(val.yearStart && moment(val.yearStart).format("YYYY")) || "--"}
					</AdminSystemTitleYear>
					<AdminSystemTableMain>
						<AdminSystemTableHead>
							<AdminSystemTableWidth200>Tiêu chí</AdminSystemTableWidth200>
							<div>Số lượng</div>
						</AdminSystemTableHead>
						<AdminSystemTableBody>
							<AdminSystemTableWidth250>
								<AdminSystemTableInner>Số lượng giao dịch</AdminSystemTableInner>
								<AdminSystemTableInner>Số lượng truy cập</AdminSystemTableInner>
								{/* <AdminSystemTableInner>Số người bán</AdminSystemTableInner> */}
								<AdminSystemTableInner>Số người bán mới</AdminSystemTableInner>
								{/* <AdminSystemTableInner>Số sản phẩm / Dịch vụ</AdminSystemTableInner> */}
								<AdminSystemTableInner>Số sản phẩm / Dịch vụ mới</AdminSystemTableInner>
								<AdminSystemTableInner>Số đơn hàng thành công</AdminSystemTableInner>
								<AdminSystemTableInner>Số đơn hàng không thành công </AdminSystemTableInner>
								<AdminSystemTableInner>Tổng giá trị giao dịch</AdminSystemTableInner>
							</AdminSystemTableWidth250>
							<div>
								<AdminSystemTableInner>{val.soLuongGiaoDich}</AdminSystemTableInner>
								<AdminSystemTableInner>{val.soLuongTruyCap}</AdminSystemTableInner>
								{/* <AdminSystemTableInner>{val.soNguoiBan}</AdminSystemTableInner> */}
								<AdminSystemTableInner>{val.soNguoiBanMoi}</AdminSystemTableInner>
								{/* <AdminSystemTableInner>{val.tongSoSanPham}</AdminSystemTableInner> */}
								<AdminSystemTableInner>{val.soSanPhamMoi}</AdminSystemTableInner>
								<AdminSystemTableInner>{val.tongSoDonHangThanhCong}</AdminSystemTableInner>
								<AdminSystemTableInner>{val.tongSoDonHangKhongThanhCong}</AdminSystemTableInner>
								<AdminSystemTableInner>{val.tongGiaTriGiaoDich}</AdminSystemTableInner>
							</div>
						</AdminSystemTableBody>
					</AdminSystemTableMain>
				</>
			))}
		</AdminSystemTableWrap>
	);
}

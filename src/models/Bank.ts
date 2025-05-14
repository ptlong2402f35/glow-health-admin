import IModel from "./IModel";

export default class Bank implements IModel<Bank> {
	id?: number | null;
	userId?: string | null;
	status?: number | null;
	bankName?: string | null;
	bankCardId?: string | null;
	bankOwner?: string | null;
	createdAt?: Date | null;
	updatedAt?: Date | null;
	deletedAt?: Date | null;
	constructor(input?: Partial<Bank>) {
		this.id = input?.id;
		this.userId = input?.userId;
		this.status = input?.status;
		this.bankName = input?.bankName;
		this.bankCardId = input?.bankCardId;
		this.bankOwner = input?.bankOwner;
		this.createdAt = input?.createdAt;
		this.updatedAt = input?.updatedAt;
		this.deletedAt = input?.deletedAt;
	}

	parse(json?: any): Bank {
		if (!json) return this;

		Object.assign(this, {
			...json,
			id: json.id,
			userId: json.userId,
			status: json.status,
			bankName: json.bankName,
			bankCardId: json.bankCardId,
			bankOwner: json.bankOwner,
			createdAt: json.createdAt && new Date(json.createdAt),
			updatedAt: json.updatedAt && new Date(json.updatedAt),
			deletedAt: json.deletedAt && new Date(json.deletedAt),
		});

		return this;
	}
	clone(): Bank {
		return new Bank({
			...this,
		});
	}
}

export class AnnuallyData implements IModel<AnnuallyData> {
	soCuaHangMoi?: number;
	soLuongGiaoDich?: number;
	soLuongTruyCap?: number;
	soNguoiBan?: number;
	soNguoiBanMoi?: number;
	soSanPhamMoi?: number;
	tongGiaTriGiaoDich?: number;
	tongSoCuaHang?: number;
	tongSoDonHangKhongThanhCong?: number;
	tongSoDonHangThanhCong?: number;
	tongSoSanPham?: number;
	yearStart?: Date | null;

	constructor(input?: Partial<AnnuallyData>) {
		this.soCuaHangMoi = input?.soCuaHangMoi;
		this.soLuongGiaoDich = input?.soLuongGiaoDich;
		this.soLuongTruyCap = input?.soLuongTruyCap;
		this.soNguoiBan = input?.soNguoiBan;
		this.soNguoiBanMoi = input?.soNguoiBanMoi;
		this.soSanPhamMoi = input?.soSanPhamMoi;
		this.tongGiaTriGiaoDich = input?.tongGiaTriGiaoDich;
		this.tongSoCuaHang = input?.tongSoCuaHang;
		this.tongSoDonHangKhongThanhCong = input?.tongSoDonHangKhongThanhCong;
		this.tongSoDonHangThanhCong = input?.tongSoDonHangThanhCong;
		this.tongSoSanPham = input?.tongSoSanPham;
		this.yearStart = input?.yearStart;
	}

	parse(json?: any): AnnuallyData {
		if (!json) return this;

		Object.assign(this, {
			...json,
			soCuaHangMoi: json.soCuaHangMoi,
			soLuongGiaoDich: json.soLuongGiaoDich,
			soLuongTruyCap: json.soLuongTruyCap,
			soNguoiBan: json.soNguoiBan,
			soNguoiBanMoi: json.soNguoiBanMoi,
			soSanPhamMoi: json.soSanPhamMoi,
			tongGiaTriGiaoDich: json.tongGiaTriGiaoDich,
			tongSoCuaHang: json.tongSoCuaHang,
			tongSoDonHangKhongThanhCong: json.tongSoDonHangKhongThanhCong,
			tongSoDonHangThanhCong: json.tongSoDonHangThanhCong,
			tongSoSanPham: json.tongSoSanPham,
			yearStart: json.yearStart && new Date(json.yearStart),
		});

		return this;
	}

	parseFromDetailData(json?: any): AnnuallyData {
		return this.parse(json);
	}

	clone(): AnnuallyData {
		return new AnnuallyData({
			...this,
		});
	}
}

export const statusWithdrawRequest = (statusNumber: number) => {
	switch (statusNumber) {
		case 1:
			return "Mới tạo";
		case 2:
			return " Đã chấp nhận";
		case 3:
			return " Đã từ chối";
		case 4:
			return " Đã hủy";
		default:
			return "--";
	}
};

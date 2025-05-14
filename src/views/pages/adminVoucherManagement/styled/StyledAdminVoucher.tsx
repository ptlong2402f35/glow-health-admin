import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { TableRow } from "@material-ui/core";

export const AdminVoucherDialogInput = styled.div`
	width: 30%;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;
export const AdminVoucherDialogInputPromotion = styled(AdminVoucherDialogInput)`
	width: 48%;
	@media screen and (max-width: 768px) {
		width: 100%;
		display: block;
	}
`;
export const AdminVoucherDialogInputPromotionv2 = styled.div`
	width: 48%;
	@media screen and (max-width: 768px) {
		width: 100%;
		display: block;
	}
`;
export const AdminVoucherDialogInputRes = styled.div`
	display: none;
	@media screen and (max-width: 768px) {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
`;
export const VoucherEffective = styled.div`
	color: var(--primary-color);
`;
export const VoucherNoEffective = styled.div`
	color: var(--alert-color);
`;

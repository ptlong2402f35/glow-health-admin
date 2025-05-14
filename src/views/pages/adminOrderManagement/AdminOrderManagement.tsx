import React, { createContext, useState } from "react";
import {
	PageCenter,
	PageInner,
	PageTitle,
	PageTitleInner,
	PageBody,
	PageWrap,
} from "../../controls/components/form/Page";
import {
	AdminOrderManagementPageInner,
	AdminOrderManagementWrap,
	AdminOrderPageTitleInner,
} from "./styled/StyledAdminOrdermanagement";
import AdminOrderManagementControl from "./AdminOrderManagementControl";
import AdminOrderManagementList from "./AdminOrderManagementList";
import {
	CommonListFunctionsType,
	useExtendCommonListFunctions,
} from "../../hooks/useCommonList/useCommonListFunctions";
import {
	AdminOrderExtraParams,
	AdminOrderExtractor,
	AdminOrderParams,
	PERPAGE,
	getAdminOrdersWrap,
} from "./hooks/useGetAdminOrders";
import NumberPaginationBox from "../../controls/components/numberPaginationBox/NumberPaginationBox";
import { PaginationWrapper } from "../adminUserManagement/styled/AdminUserManagementStyle";
import AdminOrderCancelDialog from "./AdminOrderCancelDialog";
import Orderv2 from "../../../models/Orderv2";
import { AlertType } from "../../hooks/common/useAttachAlertDialog";
import useAlertDialog from "../../hooks/useAlertDialog";
import useCancelAdminOrders from "./hooks/useCancelAdminOrders";
import AdminOrderFeedbackDialog from "./AdminOrderFeedbackDialog";
import AdminOrderManagementStatistics from "./AdminOrderManagementStatistics";
import AdminOrderOriginCancelDialog from "./AdminOrderOriginCancelDialog";

export const AdminOrderWrapContext = createContext<any>(null);

export default function AdminOrderManagement() {
	const [openCancelDialog, setOpenCancelDialog] = useState(false);
	const [openFeedbackDialog, setOpenFeedbackDialog] = useState(false);
	const [openOriginCancelDialog, setOpenOriginCancelDialog] = useState(false);
	const [orderSelected, setOrderSelected] = useState<Orderv2>();
	const { page, doChangePage } = useExtendCommonListFunctions(
		AdminOrderExtractor,
		AdminOrderExtraParams,
		(nFilter: AdminOrderParams, nFunctions: CommonListFunctionsType) => ({
			...nFilter,
			...nFunctions,
		})
	);
	const { openAlertDialog } = useAlertDialog();
	const { onConfirmCancelAdminOrder, loading: loadingCancel } = useCancelAdminOrders({
		onSuccess: () => {
			openAlertDialog?.(AlertType.Success, "Hủy đơn thành công", () => {
				reload();
				setOpenCancelDialog(false);
			});
		},
		onFail: () => openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra"),
	});
	const { orders, countDatas, reload } = getAdminOrdersWrap();
	return (
		<AdminOrderWrapContext.Provider
			value={{
				setOrderSelected: setOrderSelected,
				setOpenCancelDialog: setOpenCancelDialog,
				setOpenFeedbackDialog: setOpenFeedbackDialog,
				setOpenOriginCancelDialog: setOpenOriginCancelDialog,
				reload: reload,
			}}>
			<PageWrap>
				<PageCenter>
					<AdminOrderManagementPageInner>
						<PageTitle>
							<AdminOrderPageTitleInner>Quản lý đơn hàng</AdminOrderPageTitleInner>
						</PageTitle>
						<PageBody>
							<AdminOrderManagementStatistics
								data={countDatas}
								reload={reload}
							/>
							<AdminOrderManagementControl reload={reload} />
							<PaginationWrapper>
								<NumberPaginationBox
									page={page || 1}
									count={countDatas?.total || 1}
									per={PERPAGE}
									onChange={(val) => doChangePage?.(val)}
								/>
							</PaginationWrapper>
							<AdminOrderManagementList listOrders={orders} reload={reload}/>
							<PaginationWrapper>
								<NumberPaginationBox
									page={page || 1}
									count={countDatas?.total || 1}
									per={PERPAGE}
									onChange={(val) => doChangePage?.(val)}
								/>
							</PaginationWrapper>
						</PageBody>
						<AdminOrderCancelDialog
							open={openCancelDialog}
							onClose={() => setOpenCancelDialog(false)}
							order={orderSelected}
							submit={(order, reason) => onConfirmCancelAdminOrder(order?.id && order.id, reason)}
						/>
						<AdminOrderFeedbackDialog
							open={openFeedbackDialog}
							onClose={() => setOpenFeedbackDialog(false)}
							reload={reload}
							order={orderSelected}
						/>
						<AdminOrderOriginCancelDialog
							open={openOriginCancelDialog}
							onClose={() => setOpenOriginCancelDialog(false)}
							reload={reload}
							order={orderSelected}
						/>
					</AdminOrderManagementPageInner>
				</PageCenter>
			</PageWrap>
		</AdminOrderWrapContext.Provider>
	);
}

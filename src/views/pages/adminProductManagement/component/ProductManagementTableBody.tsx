import React, { useEffect, useState } from "react";
import Service, { ActiveType, ActiveTypeMap, ScopeTypeMap, StatusTypeMap } from "../../../../models/Service";
import {
	ProductTableRowStyle,
	ButtonAdminProductManagement,
	ImgProductTableItem,
} from "../styled/ProductManagementStyle";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import {
	StyleTableCell,
	StyleTableCellRespContain,
	StyleTableCellText,
} from "../../adminUserManagement/styled/StyledTableUserManagement";
import {} from "../../adminUserManagement/styled/AdminUserManagementStyle";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import useActiveService from "../hook/useActiveService";
import DialogUpdateService from "./UpdateProductDialog";
import useToTopService from "../hook/useToTopService";
import useListServiceGrounpAll from "../hook/useServiceGroupAll";
import useListDetailProducts from "../hook/useGetListDetailProduct";
import { AdminParnerOptionOperation } from "../../adminPartnerManagement/styled/StyleParner";
import { Popover } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import moment from "moment";

export default function ProductManagementTableBody(props: {
	val: Service;
	reload: () => void;
	openUpdateServiceDialog: boolean;
	setOpenUpdateServiceDialog: (value: boolean) => void;
	doListDetailProducts: (value: number) => void;
	setList: (val: Service) => void;
	openUpdatePriceServiceDialog: boolean;
	setOpenUpdatePriceServiceDialog: (value: boolean) => void;
}) {
	const { openAlertDialog } = useAlertDialog();
	const { loadListAllUser } = useActiveService({ reload: props.reload });
	const { doToTop } = useToTopService({ reload: props.reload });

	const onUpdateStatus = async (id: number) => {
		openAlertDialog?.(
			AlertType.Confirm,
			"Bạn chắc chắn muốn thay đổi trạng thái dịch vụ này?",
			() => {},
			() => loadListAllUser(id || 0),
			undefined,
			{
				declineText: "Hủy bỏ",
				acceptText: "Xác nhận",
			}
		);
	};

	const onToTop = async (id: number) => {
		openAlertDialog?.(
			AlertType.Confirm,
			"Bạn chắc chắn muốn cho dich vụ này lên top không?",
			() => {},
			() => doToTop(id || 0),
			undefined,
			{
				declineText: "Hủy bỏ",
				acceptText: "Xác nhận",
			}
		);
	};

	const onEditService = async () => {
		props.setList(props.val);
		props.doListDetailProducts(props.val.id || 0);
		props.setOpenUpdateServiceDialog(true);
	};
	const onEditPriceService = async () => {
		props.setList(props.val);
		props.doListDetailProducts(props.val.id || 0);
		props.setOpenUpdatePriceServiceDialog(true);
	};
	const [anchorEl, setAnchorEl] = useState(null);
	const handleClick = (event: any) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	const open = Boolean(anchorEl);
	return (
		<>
			<ProductTableRowStyle>
				<TableCell align="left">
					{/* <ImgProductTableItem src={(props.val.imageUrl || "") as any} /> */}
					{props.val.name}
				</TableCell>



				<TableCell align="center">
					{props.val.active ? ActiveTypeMap.get(ActiveType.ACCTIVE) : ActiveTypeMap.get(ActiveType.UNACCTIVE)}
				</TableCell>

				<TableCell align="center">
					<>{props.val.serviceGroup}</>
				</TableCell>

				<TableCell align="center">
					{(props.val.createdAt && moment(props.val.createdAt).format("HH:mm DD-MM-YYYY")) || "--"}
				</TableCell>

				<TableCell align="center">
					<StyleTableCellRespContain>
						<div>
							<MoreVertIcon
								onClick={handleClick}
								style={{ cursor: "pointer" }}
							/>
							<Popover
								open={open}
								anchorEl={anchorEl}
								onClose={handleClose}
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "right",
								}}
								transformOrigin={{
									vertical: "top",
									horizontal: "right",
								}}>
								<div>
									<AdminParnerOptionOperation onClick={onEditService}>Sửa</AdminParnerOptionOperation>
									<AdminParnerOptionOperation onClick={() => onUpdateStatus(props.val.id || 0)}>
										{props.val.active ? "Ngừng KH" : "Kích hoạt"}
									</AdminParnerOptionOperation>
								</div>
							</Popover>
						</div>
					</StyleTableCellRespContain>
				</TableCell>
			</ProductTableRowStyle>
		</>
	);
}

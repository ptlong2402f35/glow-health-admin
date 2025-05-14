import React, { Fragment, useEffect } from "react";
import StaffDetail from "../../../../models/StaffDetail";
import { ProductTableRowStyle } from "../../adminProductManagement/styled/ProductManagementStyle";
import TableCell from "@material-ui/core/TableCell";
import Services from "../../../../models/Services";
import StaffService from "../../../../models/StaffService";
import useRemoveServicePersonal from "../hooks/useRemoveServicePersonal";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import { PriceFafaBan, PriceFafaBanBlack, PriceLinkPrice } from "../styled/StylePersonal";
import useUptoTopStaffService from "../hooks/useUptoTopService";

export default function ServicePersonalTable(props: {
	staffService: StaffService;
	openUpdateServiceDialog: boolean;
	setOpenUpdateServiceDialog: (value: boolean) => void;
	reload: () => void;
	openUpdatePriceDialog: boolean;
	setOpenUpdatePriceDialog: (value: boolean) => void;
	setServiceStaffId: (value: number) => void;
	setServiceName: (value: string) => void;
	setStaffService: (value: any) => void;
	setStaffServicePersonal: (value: any) => void;
	setDescription: (value: string) => void;
	staffDetail?: StaffDetail | null | undefined;
	index: number;
}) {
	const { openAlertDialog } = useAlertDialog();

	const { removeService } = useRemoveServicePersonal({ reload: props.reload });
	const { uptoTopStaffService } = useUptoTopStaffService({ reload: props.reload });

	const onremoveService = async (id: number) => {
		openAlertDialog?.(
			AlertType.Confirm,
			"Bạn chắc chắn muốn xóa không?",
			() => {},
			() => removeService(id || 0),
			undefined,
			{
				declineText: "Hủy bỏ",
				acceptText: "Xác nhận",
			}
		);
	};

	const onOpen = async () => {
		props.setServiceName(props.staffService?.service?.name || ""),
			props.setServiceStaffId(props.staffService?.id || 0),
			props.setStaffService(props.staffService),
			props.setOpenUpdatePriceDialog(true);
		props.setDescription(props.staffService?.description || "");
	};

	const onUpToTopService = async (idService: number) => {
		openAlertDialog?.(
			AlertType.Confirm,
			"Bạn chắc chắn muốn cho dịch vụ lên top không?",
			() => {},
			() => uptoTopStaffService(props.staffDetail?.id || 0, idService || 0),
			undefined,
			{
				declineText: "Hủy bỏ",
				acceptText: "Xác nhận",
			}
		);
	};

	return (
		<>
			<ProductTableRowStyle>
				<TableCell align="center">{props.index + 1}</TableCell>
				<TableCell align="center">{props.staffService?.name}</TableCell>
				<TableCell align="center">{props.staffService?.service?.name}</TableCell>

				<TableCell align="center">
					<PriceLinkPrice onClick={onOpen}>
						<>Xem bảng giá</>
					</PriceLinkPrice>
				</TableCell>
				<TableCell align="center">{props.staffService?.service?.serviceGroup}</TableCell>

				<TableCell align="center">
					<div
						onClick={() => {
							props.setStaffServicePersonal(props.staffService), props.setOpenUpdateServiceDialog(true);
						}}>
						<i
							className="fa fa-pencil"
							aria-hidden="true"></i>
					</div>
					<PriceFafaBan onClick={() => onremoveService(props.staffService?.id || 0)}>
						<i
							className="fa fa-ban"
							aria-hidden="true"></i>
					</PriceFafaBan>
					<PriceFafaBanBlack onClick={() => onUpToTopService(props.staffService?.id || 0)}>
						<i
							className="fa fa-arrow-circle-o-up"
							aria-hidden="true"></i>
					</PriceFafaBanBlack>
				</TableCell>
			</ProductTableRowStyle>
		</>
	);
}

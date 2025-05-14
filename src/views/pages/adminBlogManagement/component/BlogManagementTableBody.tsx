import React, { useEffect, useState } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import {
	StyleTableCell,
	StyleTableCellRespContain,
	StyleTableCellText,
} from "../../adminUserManagement/styled/StyledTableUserManagement";
import { RebateImg } from "../../adminUserManagement/styled/AdminUserManagementStyle";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import {
	ButtonAdminProductManagement,
	ProductTableRowStyle,
} from "../../adminProductManagement/styled/ProductManagementStyle";
import Store, { StatusType, StatusTypeMap } from "../../../../models/Store";
import moment from "moment";
import { Popover } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { AdminParnerOptionOperation } from "../../adminPartnerManagement/styled/StyleParner";
import Blog from "../../../../models/Blog";
import useUpdateActive from "../hook/useUpdateStatus";
import useDeleteBlog from "../hook/useDeleteBlog";
import { BlogListContentTitle } from "../../blog/styled/blogStyled";
import { Link, useHistory } from "react-router-dom";

export default function BlogManagementTableBody(props: {
	val: Blog;
	reload: () => void;
	openUpdateBlogDialog: boolean;
	setOpenUpdateBlogDialog: (value: boolean) => void;
	setList: (val: Blog) => void;
}) {
	const { openAlertDialog } = useAlertDialog();
	const [anchorEl, setAnchorEl] = useState(null);
	const handleClick = (event: any) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const onEditService = async () => {
		props.setList(props.val);
		props.setOpenUpdateBlogDialog(true);
	};

	const { updateActive } = useUpdateActive({ reload: props.reload });
	const { deleteBlog } = useDeleteBlog({ reload: props.reload });

	const onUpdateStatus = async (id: number, status: number) => {
		openAlertDialog?.(
			AlertType.Confirm,
			"Bạn chắc chắn muốn thay đổi trạng thái Blog này?",
			() => {},
			() => updateActive(id || 0, status),
			undefined,
			{
				declineText: "Hủy bỏ",
				acceptText: "Xác nhận",
			}
		);
	};

	const onDelete = async (id: number) => {
		openAlertDialog?.(
			AlertType.Confirm,
			"Bạn chắc chắn muốn xóa Blog này?",
			() => {},
			() => deleteBlog(id || 0),
			undefined,
			{
				declineText: "Hủy bỏ",
				acceptText: "Xác nhận",
			}
		);
	};
	const history = useHistory();
	const handleSeeDetailsClick = () => {
		const id = props.val.id;

		history.push(`/update-blog/${id}`);
	};

	const open = Boolean(anchorEl);
	return (
		<>
			<ProductTableRowStyle>
				<TableCell align="left">{props.val.id}</TableCell>
				<TableCell align="left">
					<RebateImg
						src={props.val.image || "./static/img/profile-circle.png"}
						alt=""
					/>
				</TableCell>
				<TableCell align="left">{props.val.title}</TableCell>
				<TableCell align="center">
					<>
						{props.val.status == StatusType.ACCTIVE
							? StatusTypeMap.get(StatusType.ACCTIVE)
							: StatusTypeMap.get(StatusType.UNACCTIVE)}
					</>
				</TableCell>

				<TableCell align="center">{props.val.subContent || "--"}</TableCell>

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
									{props.val.status === StatusType.ACCTIVE ? (
										<AdminParnerOptionOperation
											onClick={() => onUpdateStatus(props.val.id || 0, 2)}>
											Ngừng KH
										</AdminParnerOptionOperation>
									) : (
										<AdminParnerOptionOperation
											onClick={() => onUpdateStatus(props.val.id || 0, 1)}>
											Kích hoạt
										</AdminParnerOptionOperation>
									)}
									<AdminParnerOptionOperation onClick={() => onDelete(props.val.id || 0)}>
										Xóa
									</AdminParnerOptionOperation>
									<Link to={`/blog/${props.val.id}`}>
										<AdminParnerOptionOperation>Xem</AdminParnerOptionOperation>
									</Link>
									<AdminParnerOptionOperation onClick={handleSeeDetailsClick}>
										Sửa đa ngữ
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

import React, { useState } from "react";
import { useCommonTableStyles } from "../../../controls/components/commonTable/CommonTable";
import {
	$xStyleConstWidthSmTable,
	$xStyleConstWidthTable,
	StyleCommonTableContainerResp,
} from "../../adminUserManagement/styled/StyledTableUserManagement";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import { AdminTableRowStyle, xStyleTableCellRespHead } from "../../adminUserManagement/styled/AdminUserManagementStyle";
import { CommonTableHeadCellResp } from "../../../controls/components/commonTable/StyledCommonTableResp";
import Blog from "../../../../models/Blog";
import BlogManagementTableBody from "./BlogManagementTableBody";
import DialogUpdatedBlog from "./DialogUpdateBlog";
export function BlogManagementTable(props: { listBlog: Blog[]; reload: () => void }) {
	const classes = useCommonTableStyles();
	const [openUpdateBlogDialog, setOpenUpdateBlogDialog] = useState(false);
	const [list, setList] = useState<Blog>();

	return (
		<React.Fragment>
			<StyleCommonTableContainerResp>
				<Table aria-label="simple table">
					<TableHead>
						<AdminTableRowStyle>
							<CommonTableHeadCellResp
								$xStyleConstWidthHead={$xStyleConstWidthSmTable}
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								ID
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleConstWidthHead={$xStyleConstWidthSmTable}
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								Ảnh
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								Tiêu đề
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								Trạng thái
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleConstWidthHead={$xStyleConstWidthSmTable}
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								Tóm tắt
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								{" "}
								Ngày tạo
							</CommonTableHeadCellResp>
							<CommonTableHeadCellResp
								$xStyleTableCellRespHead={xStyleTableCellRespHead}
								className={classes.th}
								align="center">
								{" "}
								Chi tiết
							</CommonTableHeadCellResp>
						</AdminTableRowStyle>
					</TableHead>
					<TableBody>
						{props.listBlog.map((val, index) => (
							<BlogManagementTableBody
								key={index}
								val={val}
								reload={props.reload}
								setOpenUpdateBlogDialog={setOpenUpdateBlogDialog}
								openUpdateBlogDialog={openUpdateBlogDialog}
								setList={setList}
							/>
						))}
					</TableBody>
				</Table>
			</StyleCommonTableContainerResp>
			<DialogUpdatedBlog
				openUpdateBlogDialog={openUpdateBlogDialog}
				setOpenUpdateBlogDialog={setOpenUpdateBlogDialog}
				reload={props.reload}
				blog={list}
			/>
		</React.Fragment>
	);
}

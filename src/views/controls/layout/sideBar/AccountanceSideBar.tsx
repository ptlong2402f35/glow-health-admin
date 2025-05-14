import React, { Fragment, useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { SidebarWrap, BtnIcon } from "./styled/StyledSideBar";
import { Link } from "react-router-dom";

export default function AccountanceSideBar() {
	const [collapsed, setCollapsed] = useState(false);
	return (
		<SidebarWrap>
			<Sidebar
				backgroundColor="#e0e9dd"
				collapsed={collapsed}
				width="300px">
				<Menu closeOnClick>
					<MenuItem
						icon={<BtnIcon className="fa fa-bars"></BtnIcon>}
						onClick={() => {
							setCollapsed(!collapsed);
						}}>
						{" "}
						KẾ TOÁN{" "}
					</MenuItem>
					{/* <MenuItem
						component={
							<Link
								to="/dashboard"
								className="link"
							/>
						}
						icon={<BtnIcon className="fa fa-line-chart"></BtnIcon>}>
						{" "}
						Tổng quan{" "}
					</MenuItem> */}
					{/* <MenuItem
						component={
							<Link
								to="/refer-stats"
								className="link"
							/>
						}
						icon={<BtnIcon className="fa fa-shopping-cart"></BtnIcon>}>
						{" "}
						Thông tin Affiliate{" "}
					</MenuItem>
					<MenuItem
						component={
							<Link
								to="/order-stats"
								className="link"
							/>
						}
						icon={<BtnIcon className="fa fa-shopping-cart"></BtnIcon>}>
						{" "}
						Doanh thu hàng ngày{" "}
					</MenuItem> */}
					<MenuItem
						component={
							<Link
								to="/collect-fee"
								className="link"
							/>
						}
						icon={<BtnIcon className="fa fa-shopping-cart"></BtnIcon>}>
						{" "}
						Quản lí thu phí KTV{" "}
					</MenuItem>
					<MenuItem
						component={
							<Link
								to="/discount"
								className="link"
							/>
						}
						icon={<BtnIcon className="fa fa-shopping-cart"></BtnIcon>}>
						{" "}
						Quản lí chiết khấu CTV
					</MenuItem>
					<MenuItem
						component={
							<Link
								to="/manager-history"
								className="link"
							/>
						}
						icon={<BtnIcon className="fa fa-shopping-cart"></BtnIcon>}>
						{" "}
						Lịch sử giao dịch
					</MenuItem>
				</Menu>
			</Sidebar>
		</SidebarWrap>
	);
}

import React, { Fragment, useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { SidebarWrap, BtnIcon } from "./styled/StyledSideBar";
import { Link } from "react-router-dom";

export default function SideBar() {
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
						ADMIN{" "}
					</MenuItem>
					
					<SubMenu
						label="Người dùng"
						icon={<BtnIcon className="fa fa-user"></BtnIcon>}>
						<MenuItem icon={<BtnIcon className="fa fa-user-circle"></BtnIcon>}> Tài khoản </MenuItem>
						<MenuItem
							component={
								<Link
									to="/users"
									className="link"
								/>
							}
							icon={<BtnIcon className="fa fa-users"></BtnIcon>}>
							{" "}
							Quản lý người dùng{" "}
						</MenuItem>
					</SubMenu>
					<SubMenu
						label="Kỹ thuật viên"
						icon={<BtnIcon className="fa fa-user"></BtnIcon>}>
						<MenuItem
							component={
								<Link
									to="/technicians"
									className="link"
								/>
							}
							icon={<BtnIcon className="fa fa-address-book"></BtnIcon>}>
							{" "}
							Kỹ thuật viên tại nhà{" "}
						</MenuItem>
					</SubMenu>

					<MenuItem
						component={
							<Link
								to="/product"
								className="link"
							/>
						}
						icon={<BtnIcon className="fa fa-shopping-cart"></BtnIcon>}>
						{" "}
						Sản phẩm - Dịch vụ{" "}
					</MenuItem>
					<MenuItem
						icon={<BtnIcon className="fa fa-book"></BtnIcon>}
						component={
							<Link
								to="/admin-order"
								className="link"
							/>
						}>
						{" "}
						Quản lý đơn hàng{" "}
					</MenuItem>
					<MenuItem
						icon={<BtnIcon className="fa fa-barcode"></BtnIcon>}
						component={
							<Link
								to="/voucher"
								className="link"
							/>
						}>
						{" "}
						Voucher - Giảm giá{" "}
					</MenuItem>
					<MenuItem
						icon={<BtnIcon className="fa fa-credit-card"></BtnIcon>}
						component={
							<Link
								to="/manager-history"
								className="link"
							/>
						}>
						{" "}
						Giao dịch ví Glow{" "}
					</MenuItem>
					
					<MenuItem
						icon={<BtnIcon className="fa fa-address-book"></BtnIcon>}
						component={
							<Link
								to="/store"
								className="link"
							/>
						}>
						{" "}
						Chủ cơ sở{" "}
					</MenuItem>
				</Menu>
			</Sidebar>
		</SidebarWrap>
	);
}

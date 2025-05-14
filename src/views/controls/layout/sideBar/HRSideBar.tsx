import React, { Fragment, useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { SidebarWrap, BtnIcon } from "./styled/StyledSideBar";
import { Link } from "react-router-dom";

export default function HRSideBar() {
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
						HR{" "}
					</MenuItem>
					<MenuItem
						component={
							<Link
								to="/technicians"
								className="link"
							/>
						}
						icon={<BtnIcon className="fa fa-line-chart"></BtnIcon>}>
						{" "}
						Quản lí KTV{" "}
					</MenuItem>
				</Menu>
			</Sidebar>
		</SidebarWrap>
	);
}

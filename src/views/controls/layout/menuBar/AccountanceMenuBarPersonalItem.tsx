import React, { useState } from "react";
import Collapse from "@material-ui/core/Collapse";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { Link, useLocation } from "react-router-dom";
import {
	MenuBarMainRightAnchorPersonalAvatar,
	MenuBarMainRightAnchorPersonalDropdown,
	MenuBarMainRightAnchorPersonalDropdownBox,
	MenuBarMainRightAnchorPersonalDropdownBoxInner,
	MenuBarMainRightAnchorPersonalDropdownBoxUser,
	MenuBarMainRightAnchorPersonalDropdownBoxUserAvatar,
	MenuBarMainRightAnchorPersonalDropdownBoxUserInner,
	MenuBarMainRightAnchorPersonalDropdownBoxUserUserAccount,
	MenuBarMainRightAnchorPersonalDropdownBoxUserUserBody,
	MenuBarMainRightAnchorPersonalDropdownBoxUserUserName,
	MenuBarMainRightAnchorPersonalIndicator,
	MenuBarMainRightAnchorPersonalItem,
	MenuBarMainRightAnchorPersonalItemInner,
	MenuBarMainRightAchorItem,
	MenuBarMainRightAchorItemDot,
	MenuBarMainRightAnchorPersonalItemWrap,
	MenuBarMainRightAnchorPersonalDropdownBoxRes,
	MenuBarMainRightAnchorPersonalDropdownBoxInnerRes,
	MenuBarMainRightAnchorPersonalDropdownHeader,
	MenuBarMainRightAnchorPersonalDropdownBoxClose,
	MenuBarMainRightAnchorPersonalDropdownBoxContent,
	MenuBarMainRightAnchorPersonalDropdownBoxItem,
	MenuBarMainRightAnchorPersonalItemIconWrap,
	MenuBarMainRightAnchorPersonalItemIcon,
	MenuBarMainRightAnchorPersonalDropdownBoxItemWrap,
	MenuBarMainRightAnchorPersonalDropdownBoxInfoAvt,
	MenuBarMainRightAnchorPersonalDropdownBoxInfoAvtWrap,
	MenuBarMainRightAnchorPersonalDropdownBoxInfoName,
	MenuBarMainRightAnchorPersonalDropdownBoxInfoNameWrap,
	MenuBarMainRightAnchorPersonalDropdownBoxInfoWrap,
	MenuBarMainRightAnchorPersonalDropdownBoxItemContain,
	MenuBarMainRightAnchorPersonalDropdownBoxItemIcon,
} from "./styled/StyledMenuBar";
import useLogout from "../../../hooks/auth/useLogout";

import { MenuBarPersonalExpandItem } from "./MenuBarPersonalItem";

export function AccountanceMenuBarPersonalItem() {
	const [open, setOpen] = useState(false);

	const doToggle = () => setOpen((pState) => !pState);
	const doClose = () => setOpen(false);

	const { logout } = useLogout();

	return (
		<>
			<ClickAwayListener onClickAway={doClose}>
				<MenuBarMainRightAnchorPersonalItem>
					<MenuBarMainRightAnchorPersonalItemInner onClick={doToggle}>
						<MenuBarMainRightAnchorPersonalAvatar>
							<img src="" />
						</MenuBarMainRightAnchorPersonalAvatar>
						<MenuBarMainRightAnchorPersonalIndicator>
							<MenuBarMainRightAchorItem>
								<MenuBarMainRightAchorItemDot></MenuBarMainRightAchorItemDot>
								<MenuBarMainRightAchorItemDot></MenuBarMainRightAchorItemDot>
								<MenuBarMainRightAchorItemDot></MenuBarMainRightAchorItemDot>
							</MenuBarMainRightAchorItem>
						</MenuBarMainRightAnchorPersonalIndicator>
					</MenuBarMainRightAnchorPersonalItemInner>

					<MenuBarMainRightAnchorPersonalDropdown>
						<Collapse in={open}>
							<MenuBarMainRightAnchorPersonalDropdownBox>
								<MenuBarMainRightAnchorPersonalDropdownBoxInner>
									<MenuBarMainRightAnchorPersonalDropdownBoxUser>
										<MenuBarMainRightAnchorPersonalDropdownBoxUserInner className="clearfix">
											<MenuBarMainRightAnchorPersonalDropdownBoxUserAvatar
												to="/personal"
												onClick={doClose}>
												<img src="" />
											</MenuBarMainRightAnchorPersonalDropdownBoxUserAvatar>
											<MenuBarMainRightAnchorPersonalDropdownBoxUserUserBody>
												<MenuBarMainRightAnchorPersonalDropdownBoxUserUserName>
													<Link
														to="/personal"
														onClick={doClose}>
														Kế toán
													</Link>
												</MenuBarMainRightAnchorPersonalDropdownBoxUserUserName>
												<MenuBarMainRightAnchorPersonalDropdownBoxUserUserAccount>
													Kế toán
												</MenuBarMainRightAnchorPersonalDropdownBoxUserUserAccount>
											</MenuBarMainRightAnchorPersonalDropdownBoxUserUserBody>
										</MenuBarMainRightAnchorPersonalDropdownBoxUserInner>
									</MenuBarMainRightAnchorPersonalDropdownBoxUser>

									<MenuBarPersonalExpandItem
										onClick={() => logout()}
										text="Đăng xuất"
										icon={<img src="./static/img/send-square.png" />}
									/>
								</MenuBarMainRightAnchorPersonalDropdownBoxInner>
							</MenuBarMainRightAnchorPersonalDropdownBox>
						</Collapse>
					</MenuBarMainRightAnchorPersonalDropdown>
				</MenuBarMainRightAnchorPersonalItem>
			</ClickAwayListener>
			<AccountanceMenuBarPersonalItemRes />
		</>
	);
}

export function AccountanceMenuBarPersonalItemRes() {
	const [open, setOpen] = useState(false);
	const doToggle = () => setOpen((pState) => !pState);
	const doClose = () => setOpen(false);
	const { pathname, hash, search } = useLocation();
	const { logout } = useLogout();
	return (
		<ClickAwayListener onClickAway={doClose}>
			<MenuBarMainRightAnchorPersonalItemWrap>
				<MenuBarMainRightAnchorPersonalItemInner onClick={doToggle}>
					<MenuBarMainRightAnchorPersonalItemIconWrap>
						<MenuBarMainRightAnchorPersonalItemIcon src="./static/img/icon_personRes.png" />
					</MenuBarMainRightAnchorPersonalItemIconWrap>
				</MenuBarMainRightAnchorPersonalItemInner>

				<MenuBarMainRightAnchorPersonalDropdown>
					<Collapse in={open}>
						<MenuBarMainRightAnchorPersonalDropdownBoxRes>
							<MenuBarMainRightAnchorPersonalDropdownBoxInnerRes>
								<MenuBarMainRightAnchorPersonalDropdownHeader>
									<MenuBarMainRightAnchorPersonalDropdownBoxClose
										src="./static/img/Close_menubar.jpg"
										onClick={doClose}></MenuBarMainRightAnchorPersonalDropdownBoxClose>
								</MenuBarMainRightAnchorPersonalDropdownHeader>
								<MenuBarMainRightAnchorPersonalDropdownBoxContent>
									<MenuBarMainRightAnchorPersonalDropdownBoxInfoWrap
										onClick={doClose}
										to={"/"}>
										<MenuBarMainRightAnchorPersonalDropdownBoxInfoAvtWrap>
											<MenuBarMainRightAnchorPersonalDropdownBoxInfoAvt src=""></MenuBarMainRightAnchorPersonalDropdownBoxInfoAvt>
										</MenuBarMainRightAnchorPersonalDropdownBoxInfoAvtWrap>
										<MenuBarMainRightAnchorPersonalDropdownBoxInfoNameWrap>
											<MenuBarMainRightAnchorPersonalDropdownBoxInfoName>
												Kế toán
											</MenuBarMainRightAnchorPersonalDropdownBoxInfoName>
											My profile
										</MenuBarMainRightAnchorPersonalDropdownBoxInfoNameWrap>
									</MenuBarMainRightAnchorPersonalDropdownBoxInfoWrap>
									<MenuBarMainRightAnchorPersonalDropdownBoxItemWrap>
										<MenuBarMainRightAnchorPersonalDropdownBoxItem
											$isActive={pathname === "/" && (!hash || hash === "#home-instruct")}
											to="/"
											onClick={doClose}>
											Trang chủ
										</MenuBarMainRightAnchorPersonalDropdownBoxItem>
									</MenuBarMainRightAnchorPersonalDropdownBoxItemWrap>
									{/* <MenuBarMainRightAnchorPersonalDropdownBoxItemWrap>
										<MenuBarMainRightAnchorPersonalDropdownBoxItem
											$isActive={pathname === "/refer-stats"}
											to="/refer-stats"
											onClick={doClose}>
											Thông tin Affiliate
										</MenuBarMainRightAnchorPersonalDropdownBoxItem>
									</MenuBarMainRightAnchorPersonalDropdownBoxItemWrap>
									<MenuBarMainRightAnchorPersonalDropdownBoxItemWrap>
										<MenuBarMainRightAnchorPersonalDropdownBoxItem
											$isActive={pathname === "/order-stats"}
											to="/order-stats"
											onClick={doClose}>
											Doanh thu hàng ngày
										</MenuBarMainRightAnchorPersonalDropdownBoxItem>
									</MenuBarMainRightAnchorPersonalDropdownBoxItemWrap> */}
									<MenuBarMainRightAnchorPersonalDropdownBoxItemWrap>
										<MenuBarMainRightAnchorPersonalDropdownBoxItem
											$isActive={pathname === "/collect-fee"}
											to="/collect-fee"
											onClick={doClose}>
											Quản lí thu phí KTV
										</MenuBarMainRightAnchorPersonalDropdownBoxItem>
									</MenuBarMainRightAnchorPersonalDropdownBoxItemWrap>
									<MenuBarMainRightAnchorPersonalDropdownBoxItemWrap>
										<MenuBarMainRightAnchorPersonalDropdownBoxItem
											$isActive={pathname === "/discount"}
											to="/discount"
											onClick={doClose}>
											Quản lí chiết khấu CTV
										</MenuBarMainRightAnchorPersonalDropdownBoxItem>
									</MenuBarMainRightAnchorPersonalDropdownBoxItemWrap>
									<MenuBarMainRightAnchorPersonalDropdownBoxItemWrap>
										<MenuBarMainRightAnchorPersonalDropdownBoxItem
											$isActive={pathname === "/manager-history"}
											to="/manager-history"
											onClick={doClose}>
											Lịch sử giao dịch
										</MenuBarMainRightAnchorPersonalDropdownBoxItem>
									</MenuBarMainRightAnchorPersonalDropdownBoxItemWrap>
									<MenuBarMainRightAnchorPersonalDropdownBoxItemWrap>
										<MenuBarMainRightAnchorPersonalDropdownBoxItem
											$isActive={false}
											to="/login"
											onClick={logout}>
											<MenuBarMainRightAnchorPersonalDropdownBoxItemContain>
												<MenuBarMainRightAnchorPersonalDropdownBoxItemIcon src="./static/img/logout_icon_res.png"></MenuBarMainRightAnchorPersonalDropdownBoxItemIcon>
											</MenuBarMainRightAnchorPersonalDropdownBoxItemContain>
											Đăng xuất
										</MenuBarMainRightAnchorPersonalDropdownBoxItem>
									</MenuBarMainRightAnchorPersonalDropdownBoxItemWrap>
								</MenuBarMainRightAnchorPersonalDropdownBoxContent>
							</MenuBarMainRightAnchorPersonalDropdownBoxInnerRes>
						</MenuBarMainRightAnchorPersonalDropdownBoxRes>
					</Collapse>
				</MenuBarMainRightAnchorPersonalDropdown>
			</MenuBarMainRightAnchorPersonalItemWrap>
		</ClickAwayListener>
	);
}

import React, { Fragment, useState } from "react";
import useLoadedUser from "../../../hooks/auth/useLoadedUser";
import Collapse from "@material-ui/core/Collapse";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { Link, useLocation } from "react-router-dom";
import {
	MenuBarMainRightAnchorPersonalAvatar,
	MenuBarMainRightAnchorPersonalDropdown,
	MenuBarMainRightAnchorPersonalDropdownBox,
	MenuBarMainRightAnchorPersonalDropdownBoxInner,
	MenuBarMainRightAnchorPersonalDropdownBoxLink,
	MenuBarMainRightAnchorPersonalDropdownBoxLinkItem,
	MenuBarMainRightAnchorPersonalDropdownBoxUser,
	MenuBarMainRightAnchorPersonalDropdownBoxUserAvatar,
	MenuBarMainRightAnchorPersonalDropdownBoxUserInner,
	MenuBarMainRightAnchorPersonalDropdownBoxUserUserAccount,
	MenuBarMainRightAnchorPersonalDropdownBoxUserUserBody,
	MenuBarMainRightAnchorPersonalDropdownBoxUserUserName,
	MenuBarMainRightAnchorPersonalIndicator,
	MenuBarMainRightAnchorPersonalItem,
	MenuBarMainRightAnchorPersonalItemInner,
	BalanceRes,
	PersonalRes,
	PersonalWeb,
	MenuBarMainRightAchorItem,
	MenuBarMainRightAchorItemDot,
	MenuBarMainRightAnchorPersonalItemWrap,
	MenuBarMainRightAnchorPersonalDropdownBoxRes,
	MenuBarMainRightAnchorPersonalDropdownBoxInnerRes,
	MenuBarMainRightAnchorPersonalDropdownHeader,
	MenuBarMainRightAnchorPersonalDropdownBoxClose,
	MenuBarMainRightAnchorPersonalDropdownBoxContent,
	MenuBarMainRightAnchorPersonalDropdownBoxItem,
	MenuBarMainRightAnchorPersonalDropdownBoxGuideBtn,
	MenuBarMainRightAnchorPersonalItemIconWrap,
	MenuBarMainRightAnchorPersonalItemIcon,
	MenuBarMainRightAnchorPersonalDropdownBoxItemWrap,
	MenuBarMainRightAnchorPersonalDropdownBoxGuideWrap,
	MenuBarMainRightAnchorPersonalDropdownBoxInfoAvt,
	MenuBarMainRightAnchorPersonalDropdownBoxInfoAvtWrap,
	MenuBarMainRightAnchorPersonalDropdownBoxInfoName,
	MenuBarMainRightAnchorPersonalDropdownBoxInfoNameWrap,
	MenuBarMainRightAnchorPersonalDropdownBoxInfoWrap,
	MenuBarMainRightAnchorPersonalDropdownBoxItemContain,
	MenuBarMainRightAnchorPersonalDropdownBoxItemIcon,
} from "./styled/StyledMenuBar";
import useLogout from "../../../hooks/auth/useLogout";
import StringManipulator from "../../../../utils/StringManipulator";

import UserManagement from "../../../../models/UserGlow";
import useGetInfoHook from "../../../pages/personal/hooks/useGetInfoHook";

export default function MenuBarPersonalItem() {
	const [open, setOpen] = useState(false);
	const { personalInfo } = useGetInfoHook({});

	const doToggle = () => setOpen((pState) => !pState);
	const doClose = () => setOpen(false);

	const { logout } = useLogout();

	return (
		<>
			<ClickAwayListener onClickAway={doClose}>
				<MenuBarMainRightAnchorPersonalItem>
					<MenuBarMainRightAnchorPersonalItemInner onClick={doToggle}>
						<MenuBarMainRightAnchorPersonalAvatar>
							<img src={personalInfo?.urlImage || ""} />
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
												<img src={personalInfo?.urlImage || ""} />
											</MenuBarMainRightAnchorPersonalDropdownBoxUserAvatar>
											<MenuBarMainRightAnchorPersonalDropdownBoxUserUserBody>
												<MenuBarMainRightAnchorPersonalDropdownBoxUserUserName>
													<Link
														to="/personal"
														onClick={doClose}>
														{personalInfo?.userName}
													</Link>
												</MenuBarMainRightAnchorPersonalDropdownBoxUserUserName>
												<MenuBarMainRightAnchorPersonalDropdownBoxUserUserAccount>
													{`(${personalInfo?.userName})`}
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
			<MenuBarPersonalItemRes personalInfo={personalInfo} />
		</>
	);
}

export function MenuBarPersonalExpandItem(props: {
	onClick: () => void;
	path?: string;
	icon: JSX.Element | string;
	text: JSX.Element | string;
}) {
	return (
		<MenuBarMainRightAnchorPersonalDropdownBoxLink>
			<MenuBarMainRightAnchorPersonalDropdownBoxLinkItem
				to={props.path || ""}
				onClick={props.onClick}>
				{props.icon}
				<p>{props.text}</p>
			</MenuBarMainRightAnchorPersonalDropdownBoxLinkItem>
		</MenuBarMainRightAnchorPersonalDropdownBoxLink>
	);
}

export function MenuBarPersonalItemRes(props: { personalInfo: UserManagement | undefined | null }) {
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
										to={"./personal"}>
										<MenuBarMainRightAnchorPersonalDropdownBoxInfoAvtWrap>
											<MenuBarMainRightAnchorPersonalDropdownBoxInfoAvt
												src={
													props.personalInfo?.urlImage || ""
												}></MenuBarMainRightAnchorPersonalDropdownBoxInfoAvt>
										</MenuBarMainRightAnchorPersonalDropdownBoxInfoAvtWrap>
										<MenuBarMainRightAnchorPersonalDropdownBoxInfoNameWrap>
											<MenuBarMainRightAnchorPersonalDropdownBoxInfoName>
												{props.personalInfo?.userName}
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
									<MenuBarMainRightAnchorPersonalDropdownBoxItemWrap>
										<MenuBarMainRightAnchorPersonalDropdownBoxItem
											$isActive={pathname === "/users"}
											to="/users"
											onClick={doClose}>
											Quản lý người dùng
										</MenuBarMainRightAnchorPersonalDropdownBoxItem>
									</MenuBarMainRightAnchorPersonalDropdownBoxItemWrap>
									<MenuBarMainRightAnchorPersonalDropdownBoxItemWrap>
										<MenuBarMainRightAnchorPersonalDropdownBoxItem
											$isActive={pathname === "/technicians"}
											to="/technicians"
											onClick={doClose}>
											Kỹ thuật viên tại nhà
										</MenuBarMainRightAnchorPersonalDropdownBoxItem>
									</MenuBarMainRightAnchorPersonalDropdownBoxItemWrap>
									<MenuBarMainRightAnchorPersonalDropdownBoxItemWrap>
										<MenuBarMainRightAnchorPersonalDropdownBoxItem
											$isActive={pathname === "/technicians-store"}
											to="/technicians-store"
											onClick={doClose}>
											Chi nhánh
										</MenuBarMainRightAnchorPersonalDropdownBoxItem>
									</MenuBarMainRightAnchorPersonalDropdownBoxItemWrap>
									<MenuBarMainRightAnchorPersonalDropdownBoxItemWrap>
										<MenuBarMainRightAnchorPersonalDropdownBoxItem
											$isActive={pathname === "/product"}
											to="/product"
											onClick={doClose}>
											Sản phẩm - Dịch vụ
										</MenuBarMainRightAnchorPersonalDropdownBoxItem>
									</MenuBarMainRightAnchorPersonalDropdownBoxItemWrap>
									<MenuBarMainRightAnchorPersonalDropdownBoxItemWrap>
										<MenuBarMainRightAnchorPersonalDropdownBoxItem
											$isActive={pathname === "/admin-order"}
											to={"/admin-order"}
											onClick={doClose}>
											Quản lý đơn hàng
										</MenuBarMainRightAnchorPersonalDropdownBoxItem>
									</MenuBarMainRightAnchorPersonalDropdownBoxItemWrap>
									<MenuBarMainRightAnchorPersonalDropdownBoxItemWrap>
										<MenuBarMainRightAnchorPersonalDropdownBoxItem
											$isActive={hash === "voucher"}
											to={"/voucher"}
											onClick={doClose}>
											Voucher - Giảm giá
										</MenuBarMainRightAnchorPersonalDropdownBoxItem>
									</MenuBarMainRightAnchorPersonalDropdownBoxItemWrap>
									<MenuBarMainRightAnchorPersonalDropdownBoxItemWrap>
										<MenuBarMainRightAnchorPersonalDropdownBoxItem
											$isActive={pathname === "/manager-history"}
											to="/manager-history"
											onClick={doClose}>
											Giao dịch ví Glow
										</MenuBarMainRightAnchorPersonalDropdownBoxItem>
									</MenuBarMainRightAnchorPersonalDropdownBoxItemWrap>
									<MenuBarMainRightAnchorPersonalDropdownBoxItemWrap>
										<MenuBarMainRightAnchorPersonalDropdownBoxItem
											$isActive={pathname === "/so-lieu"}
											to="/so-lieu"
											onClick={doClose}>
											Thống kê hệ thống
										</MenuBarMainRightAnchorPersonalDropdownBoxItem>
									</MenuBarMainRightAnchorPersonalDropdownBoxItemWrap>
									<MenuBarMainRightAnchorPersonalDropdownBoxItemWrap>
										<MenuBarMainRightAnchorPersonalDropdownBoxItem
											$isActive={pathname === "/store"}
											to="/store"
											onClick={doClose}>
											Chủ cơ sở
										</MenuBarMainRightAnchorPersonalDropdownBoxItem>
									</MenuBarMainRightAnchorPersonalDropdownBoxItemWrap>
									<MenuBarMainRightAnchorPersonalDropdownBoxItemWrap>
										<MenuBarMainRightAnchorPersonalDropdownBoxItem
											$isActive={pathname === "/banner"}
											to="/banner"
											onClick={doClose}>
											Banner
										</MenuBarMainRightAnchorPersonalDropdownBoxItem>
									</MenuBarMainRightAnchorPersonalDropdownBoxItemWrap>
									<MenuBarMainRightAnchorPersonalDropdownBoxItemWrap>
										<MenuBarMainRightAnchorPersonalDropdownBoxItem
											$isActive={pathname === "/promotions"}
											to="/promotions"
											onClick={doClose}>
											Chương trình khuyến mãi
										</MenuBarMainRightAnchorPersonalDropdownBoxItem>
									</MenuBarMainRightAnchorPersonalDropdownBoxItemWrap>
									<MenuBarMainRightAnchorPersonalDropdownBoxItemWrap>
										<MenuBarMainRightAnchorPersonalDropdownBoxItem
											$isActive={pathname === "/admin-blog"}
											to="/admin-blog"
											onClick={doClose}>
											Blog
										</MenuBarMainRightAnchorPersonalDropdownBoxItem>
									</MenuBarMainRightAnchorPersonalDropdownBoxItemWrap>
									<MenuBarMainRightAnchorPersonalDropdownBoxItemWrap>
										<MenuBarMainRightAnchorPersonalDropdownBoxItem
											$isActive={pathname === "/review-update-profile"}
											to="/review-update-profile"
											onClick={doClose}>
											QL Update Profile
										</MenuBarMainRightAnchorPersonalDropdownBoxItem>
									</MenuBarMainRightAnchorPersonalDropdownBoxItemWrap>
									<MenuBarMainRightAnchorPersonalDropdownBoxItemWrap>
										<MenuBarMainRightAnchorPersonalDropdownBoxItem
											$isActive={pathname === "/bankmanagement"}
											to="/login"
											onClick={logout}>
											<MenuBarMainRightAnchorPersonalDropdownBoxItemContain>
												<MenuBarMainRightAnchorPersonalDropdownBoxItemIcon src="./static/img/logout_icon_res.png"></MenuBarMainRightAnchorPersonalDropdownBoxItemIcon>
											</MenuBarMainRightAnchorPersonalDropdownBoxItemContain>
											Đăng xuất
										</MenuBarMainRightAnchorPersonalDropdownBoxItem>
									</MenuBarMainRightAnchorPersonalDropdownBoxItemWrap>
									<MenuBarMainRightAnchorPersonalDropdownBoxGuideWrap>
										<MenuBarMainRightAnchorPersonalDropdownBoxGuideBtn
											to={"/" + search + "#home-instruct"}
											onClick={doClose}>
											Cách nhận hoàn tiền
										</MenuBarMainRightAnchorPersonalDropdownBoxGuideBtn>
									</MenuBarMainRightAnchorPersonalDropdownBoxGuideWrap>
								</MenuBarMainRightAnchorPersonalDropdownBoxContent>
							</MenuBarMainRightAnchorPersonalDropdownBoxInnerRes>
						</MenuBarMainRightAnchorPersonalDropdownBoxRes>
					</Collapse>
				</MenuBarMainRightAnchorPersonalDropdown>
			</MenuBarMainRightAnchorPersonalItemWrap>
		</ClickAwayListener>
	);
}

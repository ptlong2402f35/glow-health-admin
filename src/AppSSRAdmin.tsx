import React, { Fragment } from "react";
// import { BrowserRouter } from "react-router-dom";
// import { UserRole } from "./models/User";
import AdminUserManagement from "./views/pages/adminUserManagement/UserManagement";
import AuthenticationWrap from "./views/controls/auth/AuthenticationWrap";
// import ByRoleRoute from "./views/controls/auth/ByRoleRoute";
// import PrivateRoute from "./views/controls/auth/PrivateRoute";
import CommonComponentsWrap from "./views/controls/common/CommonComponentsWrap";
import PublicComponentsWrap from "./views/controls/public/PublicComponentsWrap";
// import TransformRoute from "./views/controls/components/transformRoute/TransformRoute";
import { GlobalStyleWrap } from "./views/controls/GlobalStyleWrap";
import LayoutWrap from "./views/controls/layout/LayoutWrap";
import Login from "./views/pages/login/Login";
import AuthEndpoint from "./views/pages/auth/AuthEndpoint";
import Logger from "./utils/Logger";
import SSRTransformRoute from "./views/controls/components/transformRoute/SSRTransformRoute";
import ProductManagement from "./views/pages/adminProductManagement/ProductManagement";
import AdminVoucherManagement from "./views/pages/adminVoucherManagement/AdminVoucherManagement";
import HistoryManagement from "./views/pages/adminHistoryManagement/AdminHistoryManagement";
import AdminSystemManagement from "./views/pages/adminSystemManagement/AdminSystemManagement";
import LandingPageWrap from "./views/controls/layout/LandingPageWrap";
import AdminStoreManagement from "./views/pages/adminStoreManagement/AdminStoremanagement";
import BannerManagement from "./views/pages/adminBannerManagement/adminBannerManagement";
import PromotionsManagement from "./views/pages/adminPromotionsManagement/PromotionsManagement";
import PromotionsKTVManagement from "./views/pages/adminPromotionsManagement/ProgramKTV/ProgramKtvManagement";
import AdminPartnerManagement from "./views/pages/adminPartnerManagement/PartnerManagement";
import AdminBlogManagement from "./views/pages/adminBlogManagement/AdminBlogMangement";
import CreatedPartnerDetail from "./views/pages/partnerDetail/CreatedParnerDetail";
import PartnerDetail from "./views/pages/partnerDetail/PartnerDetail";
import UserAddress from "./views/pages/userAddress/UserAddress";
import AdminFakeReviewManagement from "./views/pages/adminFakeReviewManagement/AdminFakeReviewManagement";
import UpdateBlogMutiLang from "./views/pages/adminBlogManagement/componentMutiLang/UpdateBlogMutiLang";
import DescriptionLangManagement from "./views/pages/adminPartnerManagement/DescriptionLang/DescriptionLangManagement";
import AdminChatPage from "./views/pages/adminChat/adminChat";
import AdminCustomSEOManagement from "./views/pages/adminCustomSEO/CustomSEOManagement";
import AdminTagsManagement from "./views/pages/adminTagManage/AdminTagManage";
import AdminReviewUpdateProfileManagement from "./views/pages/AdminReviewUpdateProfile/AdminReviewUpdateProfile";
const Log = Logger.getLogger("App");

export default function AppSSR() {
	return (
		<Fragment>
			<div className="app-wrapper">
				<CommonComponentsWrap>
					{/* <BrowserRouter basename="/"> */}
					<AuthenticationWrap>
						<PublicComponentsWrap>
							<GlobalStyleWrap />

							<LayoutWrap
								includePaths={[
									"/",
									"/personal/:path?",
									"/users",
									"/technicians",
									"/technicians-store",
									"/users/address/:userId",
									"/technicians/:userId",
									"/auth/:vendor?",
									"/admin-order",
									"/product",
									"/voucher",
									"/manager-history",
									"/store",
									"/technicians-add",
									"/banner",
									"/promotions",
									"/promotions/:id",
									"/admin-blog",
									"/fake-review",
									"/update-blog/:id",
									"/description-lang/:id",
									"/chat/:id",
									"/custom-link",
									"/tags-manage",
									"/review-update-profile",
								]}>
								<SSRTransformRoute
									exact
									path="/">
									<div />
								</SSRTransformRoute>
								<SSRTransformRoute
									exact
									path="/personal/:path?">
									<div />
								</SSRTransformRoute>
								<SSRTransformRoute
									exact
									path="/users">
									<AdminUserManagement />
								</SSRTransformRoute>
								<SSRTransformRoute
									exact
									path="/technicians">
									<AdminPartnerManagement />
								</SSRTransformRoute>
								<SSRTransformRoute
									exact
									path="/technicians-store">
									<AdminPartnerManagement store={true} />
								</SSRTransformRoute>
								<SSRTransformRoute
									exact
									path="/users/address/:userId">
									<UserAddress />
								</SSRTransformRoute>
								<SSRTransformRoute
									exact
									path="/technicians/:userId">
									<PartnerDetail />
								</SSRTransformRoute>
								<SSRTransformRoute
									exact
									path="/auth/:vendor?">
									<AuthEndpoint />
								</SSRTransformRoute>
								<SSRTransformRoute
									exact
									path="/admin-order">
									<AdminPartnerManagement />
								</SSRTransformRoute>
								<SSRTransformRoute
									exact
									path="/product">
									<ProductManagement />
								</SSRTransformRoute>
								<SSRTransformRoute
									exact
									path="/voucher">
									<AdminVoucherManagement />
								</SSRTransformRoute>
								<SSRTransformRoute
									exact
									path="/manager-history">
									<HistoryManagement />
								</SSRTransformRoute>
								<SSRTransformRoute
									exact
									path="/store">
									<AdminStoreManagement />
								</SSRTransformRoute>
								<SSRTransformRoute
									exact
									path="/technicians-add">
									<CreatedPartnerDetail />
								</SSRTransformRoute>
								<SSRTransformRoute
									exact
									path="/banner">
									<BannerManagement />
								</SSRTransformRoute>
								<SSRTransformRoute
									exact
									path="/promotions">
									<PromotionsManagement />
								</SSRTransformRoute>
								<SSRTransformRoute
									exact
									path="/promotions/:id">
									<PromotionsKTVManagement />
								</SSRTransformRoute>
								<SSRTransformRoute
									exact
									path="/admin-blog">
									<AdminBlogManagement />
								</SSRTransformRoute>
								<SSRTransformRoute
									exact
									path="/fake-review">
									<AdminFakeReviewManagement />
								</SSRTransformRoute>
								<SSRTransformRoute
									exact
									path="/update-blog/:id">
									<UpdateBlogMutiLang />
								</SSRTransformRoute>
								<SSRTransformRoute
									exact
									path="/description-lang/:id">
									<DescriptionLangManagement />
								</SSRTransformRoute>
								<SSRTransformRoute
									exact
									path="/chat/:id">
									<AdminChatPage />
								</SSRTransformRoute>
								<SSRTransformRoute
									exact
									path="/custom-link">
									<AdminCustomSEOManagement />
								</SSRTransformRoute>
								<SSRTransformRoute
									exact
									path="/tags-manage">
									<AdminTagsManagement />
								</SSRTransformRoute>
								<SSRTransformRoute
									exact
									path="/review-update-profile">
									<AdminReviewUpdateProfileManagement />
								</SSRTransformRoute>
							</LayoutWrap>
							<LandingPageWrap includePaths={["/login", "/so-lieu"]}>
								<SSRTransformRoute
									exact
									path="/login">
									<Login />
								</SSRTransformRoute>
								<SSRTransformRoute
									exact
									path="/so-lieu">
									<AdminSystemManagement />
								</SSRTransformRoute>
							</LandingPageWrap>
						</PublicComponentsWrap>
					</AuthenticationWrap>
					{/* </BrowserRouter> */}
				</CommonComponentsWrap>
			</div>
		</Fragment>
	);
}

import React, { Fragment, Suspense, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { UserRole } from "./models/User";
import AuthenticationWrap from "./views/controls/auth/AuthenticationWrap";
import ByRoleRoute from "./views/controls/auth/ByRoleRoute";
import PrivateRoute from "./views/controls/auth/PrivateRoute";
import CommonComponentsWrap from "./views/controls/common/CommonComponentsWrap";
import PublicComponentsWrap from "./views/controls/public/PublicComponentsWrap";
import TransformRoute from "./views/controls/components/transformRoute/TransformRoute";
import { GlobalStyleWrap } from "./views/controls/GlobalStyleWrap";
import LayoutWrap from "./views/controls/layout/LayoutWrap";
import Logger from "./utils/Logger";
import ReactGA from "react-ga4";
import environments from "./environment";
import DashBoard from "./views/pages/dashboard/DashBoard";
import UserAddress from "./views/pages/userAddress/UserAddress";
import AdminPartnerManagement from "./views/pages/adminPartnerManagement/PartnerManagement";
import PartnerDetail from "./views/pages/partnerDetail/PartnerDetail";
import ProductManagement from "./views/pages/adminProductManagement/ProductManagement";
import AdminVoucherManagement from "./views/pages/adminVoucherManagement/AdminVoucherManagement";
import HistoryManagement from "./views/pages/adminHistoryManagement/AdminHistoryManagement";
import About from "./views/pages/about/About";
import Partner from "./views/pages/partner/Partner";
import Policy from "./views/pages/policy/Policy";
import Rules from "./views/pages/rules/Rules";
import LandingPageWrap from "./views/controls/layout/LandingPageWrap";
import AdminSystemManagement from "./views/pages/adminSystemManagement/AdminSystemManagement";
import AdminStoreManagement from "./views/pages/adminStoreManagement/AdminStoremanagement";
import CreatedPartnerDetail from "./views/pages/partnerDetail/CreatedParnerDetail";
import BannerManagement from "./views/pages/adminBannerManagement/adminBannerManagement";
import PromotionsManagement from "./views/pages/adminPromotionsManagement/PromotionsManagement";
import PromotionsKTVManagement from "./views/pages/adminPromotionsManagement/ProgramKTV/ProgramKtvManagement";
import AdminFakeReviewManagement from "./views/pages/adminFakeReviewManagement/AdminFakeReviewManagement";
import AdminBlogManagement from "./views/pages/adminBlogManagement/AdminBlogMangement";
import Blog from "./views/pages/blog/blog";
import BlogDetail from "./views/pages/blog/blogDetail";
import UpdateBlogMutiLang from "./views/pages/adminBlogManagement/componentMutiLang/UpdateBlogMutiLang";
import DescriptionLangManagement from "./views/pages/adminPartnerManagement/DescriptionLang/DescriptionLangManagement";
import AdminChatPage from "./views/pages/adminChat/adminChat";
import AdminCustomSEOManagement from "./views/pages/adminCustomSEO/CustomSEOManagement";
import AdminTagsManagement from "./views/pages/adminTagManage/AdminTagManage";
import AdminReviewUpdateProfileManagement from "./views/pages/AdminReviewUpdateProfile/AdminReviewUpdateProfile";

// import Register from "./views/pages/register/Register";
// import Login from "./views/pages/login/Login";
const Login = React.lazy(() => import("./views/pages/login/Login"));
// import Home from "./views/pages/home/Home";
const Home = React.lazy(() => import("./views/pages/home/Home"));
// import AuthEndpoint from "./views/pages/auth/AuthEndpoint";
const AuthEndpoint = React.lazy(() => import("./views/pages/home/Home"));
// import UserWithdrawRequest from "./views/pages/useWithdrawRequest/UserWithdrawRequest";
// import TransactionManagement from "./views/pages/transactionManagement/TransactionManagement";
// import OrderManagement from "./views/pages/orderManagement/OrderManagement";
// import Privacy from "./views/pages/privacy/Privacy";
// import OrderImport from "./views/pages/orderImport/OrderImport";
const PersonalPagev2 = React.lazy(() => import("./views/pages/personal/Personalv2"));
const AdminUserManagement = React.lazy(() => import("./views/pages/adminUserManagement/UserManagement"));
const AdminOrderManagement = React.lazy(() => import("./views/pages/adminOrderManagement/AdminOrderManagement"));

export default function App() {
	useEffect(() => {
		ReactGA.initialize(environments.gaKey || "");
		ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: window.location.pathname });
		const observer = new PerformanceObserver(performanceObserver);
		observer.observe({
			entryTypes: ["navigation"],
		});
	}, []);
	const performanceObserver = (list: PerformanceObserverEntryList) => {
		list.getEntriesByType("navigation").forEach((entry) => {
			ReactGA.gtag("config", "GA_MEASUREMENT_ID", {
				custom_map: {
					TotalAppLoadTime: (entry as any).responseEnd - (entry as any).requestStart,
				},
			});
			ReactGA.gtag("config", "GA_MEASUREMENT_ID", {
				custom_map: {
					DownloadTime: (entry as any).responseEnd - (entry as any).responseStart,
				},
			});
			ReactGA.gtag("config", "GA_MEASUREMENT_ID", {
				custom_map: {
					ServerLatency: (entry as any).responseStart - (entry as any).requestStart,
				},
			});
			ReactGA.gtag("event", "PagePerformance", {
				TotalAppLoadTime: (entry as any).responseEnd - (entry as any).requestStart,
			});
			ReactGA.gtag("event", "PagePerformance", {
				DownloadTime: (entry as any).responseEnd - (entry as any).responseStart,
			});
			ReactGA.gtag("event", "PagePerformance", {
				ServerLatency: (entry as any).responseStart - (entry as any).requestStart,
			});
		});
	};
	return (
		<Fragment>
			<div className="app-wrapper">
				<CommonComponentsWrap>
					<BrowserRouter basename="/">
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
										"/review-update-profile"
									]}>
									<TransformRoute
										exact
										path="/">
										<Suspense fallback={<div />}>
											<PrivateRoute emptyComponent={<div />}>
												<DashBoard />
											</PrivateRoute>
										</Suspense>
									</TransformRoute>
									<TransformRoute path="/personal/:path?">
										<Suspense fallback={<div />}>
											<PrivateRoute emptyComponent={<div />}>
												<PersonalPagev2 />
											</PrivateRoute>
										</Suspense>
									</TransformRoute>
									<TransformRoute
										exact
										path="/users">
										<Suspense fallback={<div />}>
											<PrivateRoute emptyComponent={<div />}>
												<AdminUserManagement />
											</PrivateRoute>
										</Suspense>
									</TransformRoute>
									<TransformRoute
										exact
										path="/technicians">
										<Suspense fallback={<div />}>
											<PrivateRoute emptyComponent={<div />}>
												<AdminPartnerManagement />
											</PrivateRoute>
										</Suspense>
									</TransformRoute>
									<TransformRoute
										exact
										path="/technicians-store">
										<Suspense fallback={<div />}>
											<PrivateRoute emptyComponent={<div />}>
												<AdminPartnerManagement store={true} />
											</PrivateRoute>
										</Suspense>
									</TransformRoute>
									<TransformRoute
										exact
										path="/users/address/:userId">
										<Suspense fallback={<div />}>
											<PrivateRoute emptyComponent={<div />}>
												<UserAddress />
											</PrivateRoute>
										</Suspense>
									</TransformRoute>
									<TransformRoute
										exact
										path="/technicians/:userId">
										<Suspense fallback={<div />}>
											<PrivateRoute emptyComponent={<div />}>
												<PartnerDetail />
											</PrivateRoute>
										</Suspense>
									</TransformRoute>
									<TransformRoute
										exact
										path="/auth/:vendor?">
										<Suspense fallback={<div />}>
											<AuthEndpoint />
										</Suspense>
									</TransformRoute>
									<TransformRoute
										exact
										path="/admin-order">
										<Suspense fallback={<div />}>
											<PrivateRoute emptyComponent={<div />}>
												<AdminOrderManagement />
											</PrivateRoute>
										</Suspense>
									</TransformRoute>
									<TransformRoute
										exact
										path="/product">
										<Suspense fallback={<div />}>
											<PrivateRoute emptyComponent={<div />}>
												<ProductManagement />
											</PrivateRoute>
										</Suspense>
									</TransformRoute>
									<TransformRoute
										exact
										path="/voucher">
										<Suspense fallback={<div />}>
											<PrivateRoute emptyComponent={<div />}>
												<AdminVoucherManagement />
											</PrivateRoute>
										</Suspense>
									</TransformRoute>
									<TransformRoute
										exact
										path="/manager-history">
										<Suspense fallback={<div />}>
											<PrivateRoute emptyComponent={<div />}>
												<HistoryManagement />
											</PrivateRoute>
										</Suspense>
									</TransformRoute>
									<TransformRoute
										exact
										path="/store">
										<Suspense fallback={<div />}>
											<PrivateRoute emptyComponent={<div />}>
												<AdminStoreManagement />
											</PrivateRoute>
										</Suspense>
									</TransformRoute>
									<TransformRoute
										exact
										path="/technicians-add">
										<Suspense fallback={<div />}>
											<PrivateRoute emptyComponent={<div />}>
												<CreatedPartnerDetail />
											</PrivateRoute>
										</Suspense>
									</TransformRoute>
									<TransformRoute
										exact
										path="/banner">
										<Suspense fallback={<div />}>
											<PrivateRoute emptyComponent={<div />}>
												<BannerManagement />
											</PrivateRoute>
										</Suspense>
									</TransformRoute>
									<TransformRoute
										exact
										path="/promotions">
										<Suspense fallback={<div />}>
											<PrivateRoute emptyComponent={<div />}>
												<PromotionsManagement />
											</PrivateRoute>
										</Suspense>
									</TransformRoute>
									<TransformRoute
										exact
										path="/promotions/:id">
										<Suspense fallback={<div />}>
											<PrivateRoute emptyComponent={<div />}>
												<PromotionsKTVManagement />
											</PrivateRoute>
										</Suspense>
									</TransformRoute>
									<TransformRoute
										exact
										path="/admin-blog">
										<Suspense fallback={<div />}>
											<PrivateRoute emptyComponent={<div />}>
												<AdminBlogManagement />
											</PrivateRoute>
										</Suspense>
									</TransformRoute>
									<TransformRoute
										exact
										path="/fake-review">
										<Suspense fallback={<div />}>
											<PrivateRoute emptyComponent={<div />}>
												<AdminFakeReviewManagement />
											</PrivateRoute>
										</Suspense>
									</TransformRoute>
									<TransformRoute
										exact
										path="/update-blog/:id">
										<Suspense fallback={<div />}>
											<PrivateRoute emptyComponent={<div />}>
												<UpdateBlogMutiLang />
											</PrivateRoute>
										</Suspense>
									</TransformRoute>
									<TransformRoute
										exact
										path="/description-lang/:id">
										<Suspense fallback={<div />}>
											<PrivateRoute emptyComponent={<div />}>
												<DescriptionLangManagement />
											</PrivateRoute>
										</Suspense>
									</TransformRoute>
									<TransformRoute
										exact
										path="/chat/:id">
										<Suspense fallback={<div />}>
											<PrivateRoute emptyComponent={<div />}>
												<AdminChatPage />
											</PrivateRoute>
										</Suspense>
									</TransformRoute>
									<TransformRoute
										exact
										path="/custom-link">
										<Suspense fallback={<div />}>
											<PrivateRoute emptyComponent={<div />}>
												<AdminCustomSEOManagement />
											</PrivateRoute>
										</Suspense>
									</TransformRoute>
									<TransformRoute
										exact
										path="/tags-manage">
										<Suspense fallback={<div />}>
											<PrivateRoute emptyComponent={<div />}>
												<AdminTagsManagement />
											</PrivateRoute>
										</Suspense>
									</TransformRoute>
									<TransformRoute
										exact
										path="/review-update-profile">
										<Suspense fallback={<div />}>
											<PrivateRoute emptyComponent={<div />}>
												<AdminReviewUpdateProfileManagement />
											</PrivateRoute>
										</Suspense>
									</TransformRoute>
								</LayoutWrap>
								<LandingPageWrap includePaths={["/login", "/so-lieu"]}>
									<TransformRoute
										exact
										path="/login">
										<Suspense fallback={<div />}>
											<Login />
										</Suspense>
									</TransformRoute>
									<TransformRoute
										exact
										path="/so-lieu">
										<Suspense fallback={<div />}>
											<AdminSystemManagement />
										</Suspense>
									</TransformRoute>
								</LandingPageWrap>
							</PublicComponentsWrap>
						</AuthenticationWrap>
					</BrowserRouter>
				</CommonComponentsWrap>
			</div>
		</Fragment>
	);
}

import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import BlogService from "../../../../services/BlogService";
import { uploadAvatar } from "../../../../services/PersonalService";
import { ImageInputData } from "../../../hooks/useImageUploadInput";
import { ForeignContent } from "../../../../models/Blog";
import { LoginForRefresh, PhoneAuthentication } from "../../../../services/LoginService";
import { useContext, useState } from "react";
import PhoneAuthen from "../../../../models/Login";
import { AuthenticationContext } from "../../../controls/auth/AuthenticationWrap";
import { useHistory, useLocation } from "react-router";
import { getBackPath } from "../../login/hook/useGetBackPack";
import User from "../../../../models/User";
import { PublicComponentsWrapContext } from "../../../controls/public/PublicComponentsWrap";

export default function useLoginForRefresh(props: {}) {
	const { openAlertDialog } = useAlertDialog();
	const history = useHistory();
	const authCtx = useContext(AuthenticationContext);
	const { search } = useLocation();
	const backPath = getBackPath(search);
	const { onLoginSuccess } = authCtx || {};
	const [userInfo, setUserPass] = useState<User>();
	const ctx = useContext(PublicComponentsWrapContext);
	const dologin = async (phone: string, password: string, selectedCountryCode: string) => {
		try {
			let user = await LoginForRefresh(phone, password, selectedCountryCode);
			onLoginSuccess?.(user, () => {
				if (backPath) {
					history.push(backPath);
				} else {
					history.push("/");
				}
			});
			{
				user && (!user.gender || !user.countryId) && ctx?.setIsDialogOpen(true);
			}
			setUserPass(user);
		} catch (error: any) {
			openAlertDialog?.(AlertType.Fail, error?.response.data.message || "Đã có lỗi xảy ra!");
		} finally {
		}
	};

	return {
		dologin,
		userInfo,
	};
}

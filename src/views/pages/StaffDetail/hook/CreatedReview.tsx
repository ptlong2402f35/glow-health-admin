import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import BlogService from "../../../../services/BlogService";
import { uploadAvatar, uploadMutipleAvatars } from "../../../../services/PersonalService";
import { ImageInputData } from "../../../hooks/useImageUploadInput";
import { ForeignContent } from "../../../../models/Blog";
import { PhoneAuthentication, SendOTPToPhone, SignUp } from "../../../../services/LoginService";
import { useState } from "react";
import PhoneAuthen from "../../../../models/Login";
import { StaffReviewv4 } from "../../../../services/StaffService";

export default function useReview(props: { reload: () => void }) {
	const { openAlertDialog } = useAlertDialog();
	const doReview = async (
		staffId: number,
		serviceId: string,
		reviewData: {
			type: number;
			rateReview: number;
		}[],
		noteReview: string,
		images?: any
	) => {
		let avatarMuti;
		if (images && !images?.isExisted) {
			const avatar = await uploadMutipleAvatars(images);
			avatarMuti = avatar;
		}
		try {
			let res = await StaffReviewv4(staffId, serviceId, reviewData, noteReview, avatarMuti);
			openAlertDialog?.(AlertType.Success, "Đánh giá thành công", () => {
				// props?.reload()
			});
		} catch {
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
		} finally {
		}
	};

	return {
		doReview,
	};
}

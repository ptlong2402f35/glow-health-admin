import { Image } from "../../../../models/Service";
import { WorkTimeType } from "../../../../models/StaffDetail";
import { updatePartnerInfo } from "../../../../services/AddPartnerService";
import { updateUserInfo } from "../../../../services/AddUserService";
import { uploadAvatar, uploadMutipleAvatars } from "../../../../services/PersonalService";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { ImageInputData } from "../../../hooks/useImageUploadInput";
import { useHistory } from "react-router";
import { AdminPartnerDetailManagementContext } from "../PartnerDetail";
import { useContext } from "react";
import { updatePartnerInfoHR } from "../../../../services/HRService";

export default function useSubmitUpdatePartner(props: { existedImage?: string | undefined | null }) {
	const { openAlertDialog } = useAlertDialog();
	const history = useHistory();
	const ctx = useContext(AdminPartnerDetailManagementContext);
	const useUpdatePartner = async (
		birthDay?: string | null | undefined,
		name?: string | null | undefined,
		gender?: Boolean,
		userId?: number | null | undefined,
		id?: number | null | undefined,
		address?: string | null | undefined,
		phone?: string | null | undefined,
		placeIssue?: string | null | undefined,
		identifyCard?: string | null | undefined,
		phoneFamily?: string | null | undefined,
		description?: string | null | undefined,
		provinceId?: number | null | undefined,
		districtId?: number | null | undefined,
		communeId?: number | null | undefined,
		avtData?: ImageInputData | null | undefined,
		reload?: () => void,
		setIsDisable?: (val: boolean) => void,
		images?: any,
		long?: number | null | undefined,
		lat?: number | null | undefined,
		storeId?: string | null | undefined,
		imagesOld?: Image[] | null,
		workTime?: WorkTimeType[] | null,
		staffType?: number | null,
		imagesSelf?: ImageInputData,
		imagesIdentityOld?: Image[],
		imagesIdentify?: ImageInputData[],
		imagesCertificateOld?: Image[],
		imagesCertificate?: ImageInputData[],
		linkWebsite?: string,
		linkFacebook?: string,
		linkYoutube?: string,
		linkTiktok?: string,
		linkInstagram?: string,
		linkYoutubeView?: string,
		identifyName?: string,
		identifyBirthday?: string,
		identifyAddress?: string,
		dateOfIssueIdentify?: string,
		placeOfIssueIdentify?: string,
	) => {
		setIsDisable?.(true);
		let avatarLink;
		if (avtData && !avtData?.isExisted) {
			const avatar = await uploadAvatar(avtData);
			avatarLink = avatar.path;
		} else if (avtData && avtData?.isExisted) {
			avatarLink = avtData?.urlData;
		}
		const deletedImages =
			imagesOld && imagesOld.length > 0 && images && images.length > 0
				? imagesOld.filter((oldImage) => images.some((newImage: any) => newImage.urlData === oldImage.path))
				: [];

		let avatarMuti;
		if (images && images.length > 0) {
			const data = await uploadMutipleAvatars(images);
			avatarMuti = deletedImages && deletedImages.length > 0 ? deletedImages.concat(data) : data;
		}
		const selectedStoreId = storeId ? parseInt(storeId) : undefined;
		let avatarLinkSelf;
		if (imagesSelf && !imagesSelf?.isExisted) {
			const avatar = await uploadAvatar(imagesSelf);
			avatarLinkSelf = avatar.path;
		} else if (imagesSelf && imagesSelf?.isExisted) {
			avatarLinkSelf = imagesSelf?.urlData;
		}

		const deletedImagesIdentity =
			imagesIdentityOld && imagesIdentityOld.length > 0 && imagesIdentify && imagesIdentify.length > 0
				? imagesIdentityOld.filter((oldImage) =>
						imagesIdentify.some((newImage: any) => newImage.urlData === oldImage.path)
				  )
				: [];

		let avatarMutiIdentify;
		if (imagesIdentify && imagesIdentify.length > 0) {
			const data = await uploadMutipleAvatars(imagesIdentify);
			avatarMutiIdentify =
				deletedImagesIdentity && deletedImagesIdentity.length > 0 ? deletedImagesIdentity.concat(data) : data;
		}

		const pathList = avatarMutiIdentify?.map((item: any) => item.path);

		const deletedImagesCertificate =
			imagesCertificateOld && imagesCertificateOld.length > 0 && imagesCertificate && imagesCertificate.length > 0
				? imagesCertificateOld.filter((oldImage) =>
						imagesCertificate.some((newImage: any) => newImage.urlData === oldImage.path)
				  )
				: [];

		let avatarMutiCertificate;
		if (imagesCertificate && imagesCertificate.length > 0) {
			const data = await uploadMutipleAvatars(imagesCertificate);
			avatarMutiCertificate =
				deletedImagesCertificate && deletedImagesCertificate.length > 0
					? deletedImagesCertificate.concat(data)
					: data;
		}

		const pathListCertificate = avatarMutiCertificate?.map((item: any) => item.path);
		
		try {
			await updatePartnerInfo(
				birthDay,
				name,
				gender,
				userId,
				id,
				address,
				phone,
				placeIssue,
				identifyCard,
				phoneFamily,
				description,
				provinceId,
				districtId,
				communeId,
				avatarLink,
				avatarMuti,
				long,
				lat,
				selectedStoreId,
				workTime,
				staffType,
				avatarLinkSelf || "",
				pathList || null,
				pathListCertificate || null,
				linkWebsite,
				linkFacebook,
				linkYoutube,
				linkTiktok,
				linkInstagram,
				JSON.parse(linkYoutubeView||"[]"),
				identifyName,
				identifyBirthday,
				identifyAddress,
				dateOfIssueIdentify,
				placeOfIssueIdentify,
			);
			reload?.();
			openAlertDialog?.(
				AlertType.Success,
				"Cập nhật thông tin thành công!"
				// () => { history.push("."); }
			);
		} catch {
			openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
		} finally {
			setIsDisable?.(false);
		}
	};

	return {
		useUpdatePartner,
	};
}

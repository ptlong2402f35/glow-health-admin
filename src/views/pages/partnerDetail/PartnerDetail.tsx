import React from "react";
import * as yup from "yup";
import { useEffect, useState, createContext } from "react";
import { PageCenter, PageHeader, PageWrap } from "../../controls/components/form/Page";
import { useParams } from "react-router";
import {
	InnerRightContent,
	StylePagePersonContentInput,
	StylePagePersonContentRightInfov2,
	StylePersonalLabelBank,
	StyleUploadUserImage,
} from "../personal/component/StylePerson";
import { Grid } from "@material-ui/core";
import {
	GridPartnerFlex,
	PartnerDetailLeftWrap,
	StylePersonalLabelInfoStaff,
	StyledInfoStaffRightTitle,
	StyledInfoStaffRightWrap,
} from "./styled/StylePartnerDetail";
import { DatePicker } from "@material-ui/pickers";
import useGetDetailStaff from "./hook/useDetailStaff";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PartnerDetailForm from "./component/PartnerDetailForm";
import useGetProvince from "./hook/useGetProvince";
import useGetDistrict from "./hook/useGetDistrict";
import StaffAddressPath from "../../../models/StaffAddressPath";
import { AvtUserManagementSection } from "../personal/component/AvtUserManagementSection";
import { ImageInputData, convertUrlsToImageDatas } from "../../hooks/useImageUploadInput";
import { AvatarServicePersonalMulti } from "../personal/component/AvatarServicePersonal";
import { Image } from "../../../models/Service";
import PersonalInformation from "./component/PersonalInformation";
import LinkSocial from "./component/LinkSocial";
import { stringify } from "querystring";
import { DescriptionParnerTextAreav2 } from "../adminPartnerManagement/styled/StyleParner";

export const AdminPartnerDetailManagementContext = createContext<{
    isHR?: boolean;
} | null>(null);

export default function PartnerDetail(props:{isHR?:boolean}) {
	let { userId } = useParams<{ userId: string }>();
	let userIdNumber = parseInt(userId);
	const { reload, staffDetail } = useGetDetailStaff({userId:userIdNumber, isHR:props.isHR || false});

	const [openImgDialog, setOpenImgDialog] = useState(false);
	const [avtData, setAvtData] = useState<ImageInputData[]>(convertUrlsToImageDatas([""]));
	const [avtMultiData, setAvtMultiData] = useState<ImageInputData[]>(
		convertUrlsToImageDatas(staffDetail?.images?.map((image) => image?.path || "").filter((val) => val) || [])
	);
	const [images, setImages] = useState<Image[]>([]);
	const [openImgMultiDialog, setOpenImgMultiDialog] = useState(false);
	const [openImgMultiDialogv2, setOpenImgMultiDialogv2] = useState(false);

	const schema = yup.object().shape({
		name: yup.string().required("Vui lòng nhập tên khách hàng"),
	});
	const [imagesSelf, setImagesSelf] = useState<ImageInputData[]>(convertUrlsToImageDatas([""]));
	const [imagesIdentityOld, setImagesIdentityOld] = useState<Image[]>([]);
	const [imagesIdentify, setImagesIdentify] = useState<ImageInputData[]>(
		convertUrlsToImageDatas(
			staffDetail?.identifyImages?.map((image) => image?.path || "").filter((val) => val) || []
		)
	);
	const [identifyCard, setIdentifyCard] = useState<string>("");
	const [imagesCertificateOld, setImagesCertificateOld] = useState<Image[]>([]);
	const [imagesCertificate, setImagesCertificate] = useState<ImageInputData[]>(
		convertUrlsToImageDatas(
			staffDetail?.certificateImages?.map((image) => image?.path || "").filter((val) => val) || []
		)
	);
	const [linkWebsite, setLinkWebsite] = useState(staffDetail?.socialMedia?.website || "");
	const [linkFacebook, setLinkFacebook] = useState(staffDetail?.socialMedia?.facebook || "");
	const [linkYoutube, setLinkYoutube] = useState(staffDetail?.socialMedia?.youtube || "");
	const [linkTiktok, setLinkTiktok] = useState(staffDetail?.socialMedia?.tiktok || "");
	const [linkInstagram, setLinkInstagram] = useState(staffDetail?.socialMedia?.instagram || "");
	const [linkYoutubeView, setLinkYoutubeView] = useState(
		JSON.stringify(staffDetail?.promotionalVideos?.map((val) => val?.url) || [])
	  );
	  const [identifyName, setidentifyName] = useState(staffDetail?.identifyName || "");
	  const [identifyBirthday, setIdentifyBirthday] = useState(staffDetail?.identifyBirthday || "");
	  const [identifyAddress, setIdentifyAddress] = useState(staffDetail?.identifyAddress || "");
	  const [dateOfIssueIdentify, setDateOfIssueIdentify] = useState(staffDetail?.dateOfIssueIdentify || "");
	  const [placeOfIssueIdentify, setPlaceOfIssueIdentify] = useState(staffDetail?.placeOfIssueIdentify || "");


	useEffect(() => {
		setAvtMultiData(
			convertUrlsToImageDatas(staffDetail?.images?.map((image) => image?.path || "").filter((val) => val) || [])
		);
		setAvtData(convertUrlsToImageDatas([staffDetail?.user?.urlImage || ""]));
		setImages(staffDetail?.images || []);
		setImagesIdentityOld(staffDetail?.identifyImages || []);
		setIdentifyCard(staffDetail?.identifyCard || "");
		setImagesIdentify(
			convertUrlsToImageDatas(
				staffDetail?.identifyImages?.map((image) => image?.path || "").filter((val) => val) || []
			)
		);
		setImagesCertificateOld(staffDetail?.certificateImages || []);
		setImagesCertificate(
			convertUrlsToImageDatas(
				staffDetail?.certificateImages?.map((image) => image?.path || "").filter((val) => val) || []
			)
		);
		setLinkWebsite(staffDetail?.socialMedia?.website || "");
		setLinkFacebook(staffDetail?.socialMedia?.facebook || "");
		setLinkYoutube(staffDetail?.socialMedia?.youtube || "");
		setLinkTiktok(staffDetail?.socialMedia?.tiktok || "");
		setLinkInstagram(staffDetail?.socialMedia?.instagram || "");
		setLinkYoutubeView(JSON.stringify(staffDetail?.promotionalVideos?.map((val) => val?.url) || []));
		setidentifyName(staffDetail?.identifyName || "");
		setIdentifyBirthday(staffDetail?.identifyBirthday || "");
		setIdentifyAddress(staffDetail?.identifyAddress || "");
		setDateOfIssueIdentify(staffDetail?.dateOfIssueIdentify || "");
		setPlaceOfIssueIdentify(staffDetail?.placeOfIssueIdentify || "");
	}, [staffDetail]);

	return (
		<AdminPartnerDetailManagementContext.Provider
					value={{
						isHR: props.isHR,
						
					}}>
		<PageWrap>
			<PageCenter>
				<PageHeader>Chi tiết khách hàng</PageHeader>
				<>
					<GridPartnerFlex
						container
						spacing={4}
						style={{ margin: "0", width: "100%" }}>
						<Grid
							item
							xs={12}
							md={8}
							style={{ border: "thin solid rgba(0,0,0,.12)", padding: "0" }}>
							{staffDetail && (
								<PartnerDetailForm
									userId={userIdNumber}
									staffDetail={staffDetail}
									reload={reload}
									avtData={avtData}
									avtMultiData={avtMultiData}
									images={images}
									identifyCard={identifyCard}
									imagesSelf={imagesSelf}
									imagesIdentityOld={imagesIdentityOld}
									imagesIdentify={imagesIdentify}
									imagesCertificateOld={imagesCertificateOld}
									imagesCertificate={imagesCertificate}
									linkWebsite={linkWebsite}
									linkFacebook={linkFacebook}
									linkYoutube={linkYoutube}
									linkTiktok={linkTiktok}
									linkInstagram={linkInstagram}
									linkYoutubeView={linkYoutubeView}
									identifyName={identifyName}
									identifyBirthday={identifyBirthday}
									identifyAddress={identifyAddress}
									dateOfIssueIdentify={dateOfIssueIdentify}
									placeOfIssueIdentify={placeOfIssueIdentify}
									isHR={props.isHR|| false}
								/>
							)}
						</Grid>
						<Grid
							item
							xs={12}
							md={3}
							// style={{ border: "thin solid rgba(0,0,0,.12)", margin: "0 0 0 24px" }}
						>
							<StylePersonalLabelInfoStaff>Ảnh đại diện</StylePersonalLabelInfoStaff>
							<StyleUploadUserImage>
								<AvtUserManagementSection
									existedImage={staffDetail?.user?.urlImage}
									type={true}
									openImgDialog={setOpenImgDialog}
									avtData={avtData}
									setAvtData={setAvtData}
									staffDetail={staffDetail}
								/>
							</StyleUploadUserImage>
							<StylePersonalLabelInfoStaff>Ảnh Profile</StylePersonalLabelInfoStaff>
							<StyleUploadUserImage>
								<AvatarServicePersonalMulti
									type={true}
									avtMultiData={avtMultiData}
									setAvtMultiData={setAvtMultiData}
									openImgDialog={setOpenImgMultiDialog}
									staffDetail={staffDetail}
								/>
							</StyleUploadUserImage>
							{/* <StylePersonalLabelInfoStaff>Video</StylePersonalLabelInfoStaff>
							<StyleUploadUserImage>
							<DescriptionParnerTextAreav2
								value={linkYoutubeView}
								onChange={(e) => setLinkYoutubeView(e.target.value)}
								/>
							</StyleUploadUserImage>
							<StyledInfoStaffRightWrap>
								<StyledInfoStaffRightTitle> Thông tin cá nhân</StyledInfoStaffRightTitle>
								<div>
									<PersonalInformation
										identifyName={identifyName}
										setidentifyName={setidentifyName}
										identifyBirthday={identifyBirthday}
										setIdentifyBirthday={setIdentifyBirthday}
										identifyAddress={identifyAddress}
										setIdentifyAddress={setIdentifyAddress}
										dateOfIssueIdentify={dateOfIssueIdentify}
										setDateOfIssueIdentify={setDateOfIssueIdentify}
										placeOfIssueIdentify={placeOfIssueIdentify}
										setPlaceOfIssueIdentify={setPlaceOfIssueIdentify}
										imagesIdentify={imagesIdentify}
										setImagesIdentify={setImagesIdentify}
										imagesSelf={imagesSelf}
										setImagesSelf={setImagesSelf}
										identifyCard={identifyCard}
										setIdentifyCard={setIdentifyCard}
										staffDetail={staffDetail}
									/>
								</div>
							</StyledInfoStaffRightWrap>

							<StylePersonalLabelInfoStaff>Ảnh chứng chỉ</StylePersonalLabelInfoStaff>
							<StyleUploadUserImage>
								<AvatarServicePersonalMulti
									type={true}
									avtMultiData={imagesCertificate}
									setAvtMultiData={setImagesCertificate}
									openImgDialog={setOpenImgMultiDialogv2}
									orther="certificate"
								/>
							</StyleUploadUserImage>
							<StyleUploadUserImage>
								<LinkSocial
									linkWebsite={linkWebsite}
									setLinkWebsite={setLinkWebsite}
									linkFacebook={linkFacebook}
									setLinkFacebook={setLinkFacebook}
									linkYoutube={linkYoutube}
									setLinkYoutube={setLinkYoutube}
									linkTiktok={linkTiktok}
									setLinkTiktok={setLinkTiktok}
									linkInstagram={linkInstagram}
									setLinkInstagram={setLinkInstagram}
								/>
							</StyleUploadUserImage> */}
						</Grid>
					</GridPartnerFlex>
				</>
			</PageCenter>
		</PageWrap>
		</AdminPartnerDetailManagementContext.Provider>
	);
}

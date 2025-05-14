import React, { useEffect, useState } from "react";
import { DialogWrapMedium, DialogWrapSmall } from "../../../controls/components/dialogWrap/DialogWrap";
import Orderv2, { OrderStatusLabelMapv3, OrderStatusv2 } from "../../../../models/Orderv2";
import useGetReviewProperty from "../hook/getReviewProperty";
import { StaffServiceHome } from "../../../../models/Service";
import Staff, { ReviewProps } from "../../../../models/Staff";
import { ImageInputData, convertUrlsToImageDatas } from "../../../hooks/useImageUploadInput";
import { AvatarServicePersonalMulti } from "./ImageReviewUser";
import useReview from "../hook/CreatedReview";
import {
	ConfirmNumberStarDialogGetInfoVoucher,
	ConfirmNumberStarImg,
	ConfirmNumberStarSpan,
	ConfirmNumberStarWrap,
	DialogGetInfoVoucherAvatarServicePersonalMulti,
	DialogGetInfoVoucherButton,
	DialogGetInfoVoucherContainerWrap,
	DialogGetInfoVoucherImgTitle,
	DialogGetInfoVoucherImgWrap,
	DialogGetInfoVoucherSelect,
	DialogGetInfoVoucherTextArea,
} from "../styled/StaffDetailStyle";
import { TranslateLabels, useLanguage } from "../../../controls/layout/content/MultiLanguge";

export default function DialogGetInfoVoucher(props: {
	isDialogOrderOpen: boolean;
	setIsDialogOrderOpen: (val: boolean) => void;
	staffServices: StaffServiceHome[];
	staff: Staff;
	reload: () => void;
}) {
	const { reviewProperty } = useGetReviewProperty({});
	const [selectedServiceId, setSelectedServiceId] = useState<string>("");
	const [reviewContent, setReviewContent] = useState<string>("");
	const [reviewData, setReviewData] = useState<{ type: number; rateReview: number }[]>([]);
	useEffect(() => {
		setReviewData(reviewProperty.map((item) => ({ type: item.type || 0, rateReview: item.rateReview || 0 })));
	}, [reviewProperty]);
	const [openImgMultiDialog, setOpenImgMultiDialog] = useState(false);
	const handleServiceChange = (event: any) => {
		setSelectedServiceId(event.target.value);
	};

	const handleReviewContentChange = (event: any) => {
		setReviewContent(event.target.value);
	};

	const handleRatingChange = (index: number, rating: number) => {
		const updatedReviewData = [...reviewData];
		updatedReviewData[index] = { type: reviewProperty[index].type || 1, rateReview: rating };
		setReviewData(updatedReviewData);
	};
	const [avtMultiData, setAvtMultiData] = useState<ImageInputData[]>(convertUrlsToImageDatas(null));

	const { doReview } = useReview({ reload: props.reload });

	const Review = async () => {
		await doReview(props.staff.id || 0, selectedServiceId, reviewData, reviewContent, avtMultiData);
		props.setIsDialogOrderOpen(false);
	};
	useEffect(() => {
		setSelectedServiceId("");
		setReviewContent("");
		setReviewData(reviewProperty.map((item) => ({ type: item.type || 0, rateReview: item.rateReview || 0 })));
		setAvtMultiData(convertUrlsToImageDatas(null));
	}, [props.isDialogOrderOpen]);
	const { lang } = useLanguage();
	return (
		<DialogWrapMedium
			disableEnforceFocus={true}
			open={props.isDialogOrderOpen || false}
			onClose={() => {
				props.setIsDialogOrderOpen(false);
			}}
			center={true}
			hideFooter={true}
			title={TranslateLabels[lang]?.LOGIN_READ_REVIEW}>
			<>
				<DialogGetInfoVoucherContainerWrap>
					<DialogGetInfoVoucherSelect
						value={selectedServiceId}
						onChange={handleServiceChange}>
						<option value="">{TranslateLabels[lang]?.LOGIN_SELECT_SERVICE}</option>
						{props.staffServices.map((service) => (
							<option
								key={service.id}
								value={service.id}>
								{service.name}
							</option>
						))}
					</DialogGetInfoVoucherSelect>

					<DialogGetInfoVoucherTextArea
						value={reviewContent}
						onChange={handleReviewContentChange}
						placeholder={TranslateLabels[lang]?.LOGIN_ENTER_REVIEW}
						rows={5}
						cols={40}
					/>

					<ConfirmNumberStarDialogGetInfoVoucher>
						<ConfirmNumberStar
							reviewProperty={reviewProperty}
							reviewData={reviewData}
							handleRatingChange={handleRatingChange}
						/>
					</ConfirmNumberStarDialogGetInfoVoucher>
					<DialogGetInfoVoucherImgWrap>
						<DialogGetInfoVoucherImgTitle>
							{TranslateLabels[lang]?.LOGIN_ADD_IMAGE}
						</DialogGetInfoVoucherImgTitle>
						<DialogGetInfoVoucherAvatarServicePersonalMulti>
							<AvatarServicePersonalMulti
								type={true}
								avtMultiData={avtMultiData}
								setAvtMultiData={setAvtMultiData}
								openImgDialog={setOpenImgMultiDialog}
							/>
						</DialogGetInfoVoucherAvatarServicePersonalMulti>
					</DialogGetInfoVoucherImgWrap>
					<DialogGetInfoVoucherButton onClick={() => Review()}>
						{TranslateLabels[lang]?.PARTNER_TITLE_3}
					</DialogGetInfoVoucherButton>
				</DialogGetInfoVoucherContainerWrap>
			</>
		</DialogWrapMedium>
	);
}

export function ConfirmNumberStar(props: {
	reviewProperty: ReviewProps[];
	reviewData: {
		type: number;
		rateReview: number;
	}[];
	handleRatingChange: (index: number, rating: number) => void;
}) {
	return (
		<>
			{props.reviewProperty?.map((val, index) => {
				return (
					<ConfirmNumberStarWrap key={index}>
						<ConfirmNumberStarSpan>
							{val.name} <span style={{ color: "#DB281F" }}>*</span>
						</ConfirmNumberStarSpan>
						<div>
							{[1, 2, 3, 4, 5].map((rating) => (
								<ConfirmNumberStarImg
									key={rating}
									src={
										rating <= props.reviewData[index]?.rateReview
											? "/static/img/starReview.png"
											: "/static/img/unStar.png"
									}
									alt={
										rating <= props.reviewData[index]?.rateReview ? "filled star" : "unfilled star"
									}
									onClick={() => props.handleRatingChange(index, rating)}
								/>
							))}
						</div>
					</ConfirmNumberStarWrap>
				);
			})}
		</>
	);
}

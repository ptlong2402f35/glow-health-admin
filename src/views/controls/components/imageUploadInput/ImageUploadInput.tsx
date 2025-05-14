import React from "react";
import useImageUploadInput, { ImageInputData, UploadInputType } from "../../../hooks/useImageUploadInput";
import {
	ImagesEditorControlWrapper,
	ImagesEditorTypeSingleControlAction,
	ImagesEditorTypeSingleControlBox,
	ImagesEditorTypeSingleControlBtn,
	ImagesEditorTypeSingleControlBtnLabel,
	ImagesEditorTypeSingleControlClear,
	ImagesEditorTypeSingleControlCounter,
	ImagesEditorTypeSingleControlCounterInner,
	ImagesEditorTypeSingleControlImg,
	ImagesEditorTypeSingleControlImgInner,
} from "./StyledImageUploadInput";

export default function ImageUploadInput(props: {
	type?: UploadInputType;
	imageDatas: ImageInputData[];
	onImageDatasChange: (imageDatas: ImageInputData[]) => void;
	id: string;
	btnText?: string;
}) {
	const { onUploadInputChange, onRemoveImageClicked, onClearImageClicked } = useImageUploadInput(props);

	if (props.type == UploadInputType.Multiple)
		return (
			<ImagesEditorControlWrapper>
				<ImagesEditorTypeSingleControlBox>
					<input
						type="file"
						multiple
						id={props.id}
						onChange={onUploadInputChange}
						accept="image/*"
					/>

					{props.imageDatas.length ? (
						<ImagesEditorTypeSingleControlImg>
							<ImagesEditorTypeSingleControlImgInner htmlFor={props.id}>
								<img src={(props.imageDatas[0].urlData || "") as any} />

								{props.imageDatas.length > 1 && (
									<ImagesEditorTypeSingleControlCounter>
										<ImagesEditorTypeSingleControlCounterInner
											title={`Tất cả ${props.imageDatas.length} ảnh`}>
											{"+" + (props.imageDatas.length - 1)}
										</ImagesEditorTypeSingleControlCounterInner>
									</ImagesEditorTypeSingleControlCounter>
								)}
							</ImagesEditorTypeSingleControlImgInner>
							<ImagesEditorTypeSingleControlClear onClick={onClearImageClicked}>
								<i className="fa fa-times-circle"></i>
							</ImagesEditorTypeSingleControlClear>
						</ImagesEditorTypeSingleControlImg>
					) : (
						<ImagesEditorTypeSingleControlAction>
							<ImagesEditorTypeSingleControlBtn htmlFor={props.id}>
								<i className="fa fa-cloud-upload"></i>
								{props.btnText && (
									<ImagesEditorTypeSingleControlBtnLabel>
										{props.btnText}
									</ImagesEditorTypeSingleControlBtnLabel>
								)}
							</ImagesEditorTypeSingleControlBtn>
						</ImagesEditorTypeSingleControlAction>
					)}
				</ImagesEditorTypeSingleControlBox>
			</ImagesEditorControlWrapper>
		);
	else
		return (
			<ImagesEditorControlWrapper>
				<ImagesEditorTypeSingleControlBox>
					<input
						type="file"
						id={props.id}
						onChange={onUploadInputChange}
						accept="image/*"
					/>

					{props.imageDatas.length ? (
						<ImagesEditorTypeSingleControlImg>
							<ImagesEditorTypeSingleControlImgInner htmlFor={props.id}>
								<img src={(props.imageDatas[0].urlData || "") as any} />
							</ImagesEditorTypeSingleControlImgInner>
							<ImagesEditorTypeSingleControlClear onClick={onClearImageClicked}>
								<i className="fa fa-times-circle"></i>
							</ImagesEditorTypeSingleControlClear>
						</ImagesEditorTypeSingleControlImg>
					) : (
						<ImagesEditorTypeSingleControlAction>
							<ImagesEditorTypeSingleControlBtn htmlFor={props.id}>
								<i className="fa fa-cloud-upload"></i>
								{props.btnText && (
									<ImagesEditorTypeSingleControlBtnLabel>
										{props.btnText}
									</ImagesEditorTypeSingleControlBtnLabel>
								)}
							</ImagesEditorTypeSingleControlBtn>
						</ImagesEditorTypeSingleControlAction>
					)}
				</ImagesEditorTypeSingleControlBox>
			</ImagesEditorControlWrapper>
		);
}

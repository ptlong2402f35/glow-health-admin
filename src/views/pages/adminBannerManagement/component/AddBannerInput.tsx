import React, { useEffect, useState } from "react";
import { ImageInputData, convertUrlsToImageDatas } from "../../../hooks/useImageUploadInput";
import {
	StylePagePersonContentInput,
	StylePersonalLabelBank,
	StyleUploadUserImage,
} from "../../personal/component/StylePerson";
import { AvtBannerManagementSection } from "./AddImgBanner";
import {
	BannerClusterImgWrap,
	BannerClusterImgmap,
	BannerHanldeAddItemButton,
	BannerHanldeAddItemWrap,
	BannerHanldeDeleteItemButton,
	BannerHanldeDeleteItemWrap,
	BannerItemsWrap,
	BannerMoveButton,
	BannerMoveButtonWrap,
} from "../styled/StyledBannerManagement";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";

export default function AddBannerInput(props: {
	bannerName: string;
	setBannerName: (value: string) => void;
	action: string;
	setAction: (value: string) => void;
	country: any;
	setCountry: (value: any) => void;
	avtDataArray: ImageInputData[][];
	setAvtDataArray: (value: ImageInputData[][]) => void;
	items: {
		action: string;
		path: {
			lang: string;
			value: string;
		}[];
	}[];
	setItems: (value: any) => void;
	listCountries: {
		lang: string;
		name: string;
	}[];
}) {
	const [openImgDialog, setOpenImgDialog] = useState(false);

	const handleAddItem = () => {
		props.setItems([
			...props.items,
			{
				action: "",
				path: props.listCountries.map((item) => ({
					lang: item.lang,
					value: "",
				})),
			},
		]);
		const updatedAvtDataArray = props.avtDataArray.map((array) => [...array]);
		updatedAvtDataArray.push(
			Array(props.listCountries.length).fill({
				isExisted: false,
				domData: null,
				urlData: null,
			})
		);
		props.setAvtDataArray(updatedAvtDataArray);
	};

	const setAvtDataBanner = (imageData: any, index: number, countryIndex: number) => {
		const updatedAvtDataArray = props.avtDataArray.map((array) => [...array]);
		updatedAvtDataArray[index][countryIndex] = imageData;
		props.setAvtDataArray(updatedAvtDataArray);
	};
	const setAction = (e: any, index: number) => {
		const updatedItems = [...props.items];
		updatedItems[index].action = e.target.value;
		props.setItems(updatedItems);
	};
	const { openAlertDialog } = useAlertDialog();

	const onDelete = async (index: number) => {
		openAlertDialog?.(
			AlertType.Confirm,
			`Bạn chắc chắn muốn xóa Item thứ ${index + 1}?`,
			() => {},
			() => handleDeleteItem(index),
			undefined,
			{
				declineText: "Hủy bỏ",
				acceptText: "Xác nhận",
			}
		);
	};
	const handleDeleteItem = (index: number) => {
		const updatedItems = [...props.items];
		updatedItems.splice(index, 1);
		props.setItems(updatedItems);

		const updatedAvtDataArray = props.avtDataArray.map((array) => [...array]);
		updatedAvtDataArray.splice(index, 1);
		props.setAvtDataArray(updatedAvtDataArray);
	};

	const moveItemUp = (index: number) => {
		if (index === 0) return;
		const updatedItems = [...props.items];
		const tempItem = updatedItems[index - 1];
		updatedItems[index - 1] = updatedItems[index];
		updatedItems[index] = tempItem;
		props.setItems(updatedItems);

		const updatedAvtDataArray = [...props.avtDataArray];
		const tempData = updatedAvtDataArray[index - 1];
		updatedAvtDataArray[index - 1] = updatedAvtDataArray[index];
		updatedAvtDataArray[index] = tempData;
		props.setAvtDataArray(updatedAvtDataArray);
	};

	const moveItemDown = (index: number) => {
		if (index === props.items.length - 1) return;
		const updatedItems = [...props.items];
		const tempItem = updatedItems[index + 1];
		updatedItems[index + 1] = updatedItems[index];
		updatedItems[index] = tempItem;
		props.setItems(updatedItems);

		const updatedAvtDataArray = [...props.avtDataArray];
		const tempData = updatedAvtDataArray[index + 1];
		updatedAvtDataArray[index + 1] = updatedAvtDataArray[index];
		updatedAvtDataArray[index] = tempData;
		props.setAvtDataArray(updatedAvtDataArray);
	};

	return (
		<div>
			<div>
				<StylePersonalLabelBank>Tên Banner</StylePersonalLabelBank>
				<StylePagePersonContentInput
					type="text"
					value={props.bannerName}
					onChange={(e) => props.setBannerName(e.target.value)}
				/>
			</div>

			<BannerItemsWrap>
				{props.items.map((item, index) => (
					<div key={index}>
						<BannerHanldeDeleteItemWrap>
							<BannerMoveButtonWrap>
								<BannerMoveButton onClick={() => moveItemUp(index)}>Lên</BannerMoveButton>
								<BannerMoveButton onClick={() => moveItemDown(index)}>Xuống</BannerMoveButton>
							</BannerMoveButtonWrap>
							<BannerHanldeDeleteItemButton onClick={() => onDelete(index)}>
								Xóa
							</BannerHanldeDeleteItemButton>
						</BannerHanldeDeleteItemWrap>

						<div>
							<StylePersonalLabelBank>Chọn ảnh: </StylePersonalLabelBank>
							<div>
								<BannerClusterImgWrap>
									{props.country.map((image: any, countryIndex: number) => (
										<BannerClusterImgmap key={countryIndex}>
											<StylePersonalLabelBank>{image?.name}</StylePersonalLabelBank>

											<AvtBannerManagementSection
												// openImgDialog={setOpenImgDialog}
												avtData={props.avtDataArray[index][countryIndex]}
												setAvtData={(imageData: ImageInputData | null) =>
													setAvtDataBanner(imageData, index, countryIndex)
												}
												htmlFor={`input-${index}_${countryIndex}`}
											/>
										</BannerClusterImgmap>
									))}
								</BannerClusterImgWrap>
							</div>
						</div>
						<div>
							<StylePersonalLabelBank>Hoạt động</StylePersonalLabelBank>
							<StylePagePersonContentInput
								type="text"
								value={item.action}
								onChange={(e) => setAction(e, index)}
							/>
						</div>
					</div>
				))}
				<BannerHanldeAddItemWrap>
					<BannerHanldeAddItemButton onClick={handleAddItem}>Thêm</BannerHanldeAddItemButton>
				</BannerHanldeAddItemWrap>
			</BannerItemsWrap>
		</div>
	);
}

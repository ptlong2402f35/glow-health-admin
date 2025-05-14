import React, { useEffect, useState } from "react";
import DialogWrap from "../../../controls/components/dialogWrap/DialogWrap";
import {
	UserFormServiceButtonClose,
	UserFormServiceButtonCreated,
} from "../../adminProductManagement/styled/ProductManagementStyle";
import AddBannerInput from "./AddBannerInput";
import useListLang from "../hook/useGetLang";
import { ImageInputData, convertUrlsToImageDatas } from "../../../hooks/useImageUploadInput";
import useCreatedBanner from "../hook/useCreatedBanner";
import Banner, { Item } from "../../../../models/Banner";
import useUpdateBanner from "../hook/useUpdateBanner";
import { uploadAvatar } from "../../../../services/PersonalService";
import { convertBannerItems } from "../hook/useConverItemBanner";
import { convertUrlsToImageDatasBanner } from "../hook/useConvertUrlsToImage";

export default function DialogUpdateBanner(props: {
	openAddBannerDialog: boolean;
	setOpenAddBannerDialog: (value: boolean) => void;
	reload: () => void;
	selectedBanner: Banner;
	selectedBannerIndex: number;
	listBanner: Banner[];
}) {
	const { updateBanner } = useUpdateBanner();
	const [isSaving, setIsSaving] = useState(false);
	const [bannerName, setBannerName] = useState("");
	const [action, setAction] = useState("");
	const [countries, setCountries] = useState<
		{
			lang: string;
			name: string;
		}[]
	>([]);
	const { listLang } = useListLang();
	const [avtDataArray, setAvtDataArray] = useState<ImageInputData[][]>(
		convertUrlsToImageDatasBanner(props.selectedBanner, countries)
	);
	const [items, setItems] = useState(convertBannerItems(props.selectedBanner, countries));

	const handleClose = () => {
		props.setOpenAddBannerDialog(false);
	};
	const handleSave = async () => {
		const updatedListBanner = [...props.listBanner];

		const updatedItemsArray = await Promise.all(
			items.map(async (item1, idx1) => {
				return new Item({
					action: item1.action,
					path: await Promise.all(
						item1.path.map(async (item2, idx2) => {
							const avtData = avtDataArray[idx1] && avtDataArray[idx1][idx2];
							if (!avtData || avtData === null) {
								return { lang: item2.lang, value: "" };
							}
							const { isExisted, domData, urlData } = avtData;
							if (!domData && !urlData) {
								return { lang: item2.lang, value: "" };
							} else if (isExisted && urlData) {
								return { lang: item2.lang, value: urlData as string };
							} else if (!isExisted && domData) {
								const url = await uploadAvatar(avtDataArray[idx1][idx2]);
								return { lang: item2.lang, value: url.path };
							} else {
								return { lang: item2.lang, value: "" };
							}
						})
					),
				});
			})
		);

		const updatedBanner = new Banner({
			active: true,
			group: bannerName,
			items: updatedItemsArray,
		});

		updatedListBanner[props.selectedBannerIndex] = updatedBanner;

		await updateBanner(updatedListBanner, props.reload);
		props.setOpenAddBannerDialog(false);
	};
	useEffect(() => {
		if (listLang.length > 0) {
			setCountries(
				listLang.map((langItem) => ({
					lang: langItem.code || "",
					name: langItem.name || "",
				}))
			);
		}
	}, [listLang]);

	useEffect(() => {
		if (props.selectedBanner) {
			setBannerName(props.selectedBanner.group || "");
			setItems(convertBannerItems(props.selectedBanner, countries));
			setAvtDataArray(convertUrlsToImageDatasBanner(props.selectedBanner, countries));
		}
	}, [props.openAddBannerDialog]);

	return (
		<DialogWrap
			open={props.openAddBannerDialog}
			onClose={handleClose}
			title=" Sửa Banner"
			actions={
				<>
					<UserFormServiceButtonClose onClick={handleClose}>Hủy</UserFormServiceButtonClose>
					<UserFormServiceButtonCreated
						onClick={handleSave}
						disabled={isSaving}>
						{" "}
						{isSaving ? "Đang lưu..." : "Lưu"}
					</UserFormServiceButtonCreated>
				</>
			}>
			<AddBannerInput
				bannerName={bannerName}
				setBannerName={setBannerName}
				action={action}
				setAction={setAction}
				country={countries}
				setCountry={setCountries}
				avtDataArray={avtDataArray}
				setAvtDataArray={setAvtDataArray}
				items={items}
				setItems={setItems}
				listCountries={countries}
			/>
		</DialogWrap>
	);
}

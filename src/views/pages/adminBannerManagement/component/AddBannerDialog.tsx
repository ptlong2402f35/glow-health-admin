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
import Banner from "../../../../models/Banner";
import { convertUrlsToImageDatasBanner } from "../hook/useConvertUrlsToImage";
import { convertBannerItems } from "../hook/useConverItemBanner";
import { uploadAvatar } from "../../../../services/PersonalService";

export default function DialogAddBanner(props: {
	openAddBannerDialog: boolean;
	setOpenAddBannerDialog: (value: boolean) => void;
	reload: () => void;
	listBanner: Banner[];
	countries: {
		lang: string;
		name: string;
	}[];
}) {
	const { createdBanner } = useCreatedBanner();
	const [isSaving, setIsSaving] = useState(false);
	const [bannerName, setBannerName] = useState("");
	const [action, setAction] = useState("");
	const [avtDataArray, setAvtDataArray] = useState<ImageInputData[][]>(
		convertUrlsToImageDatasBanner(new Banner(), props.countries)
	);
	const [items, setItems] = useState(convertBannerItems(new Banner(), props.countries));

	const handleClose = () => {
		props.setOpenAddBannerDialog(false);
	};
	const handleSave = async () => {
		const updatedItemsArray = await Promise.all(
			items.map(async (item1, idx1) => {
				return {
					action: item1.action,
					path: await Promise.all(
						item1.path.map(async (item2, idx2) => {
							const { isExisted, domData, urlData } = avtDataArray[idx1][idx2];
							if (!domData && !urlData) {
								return { lang: item2.lang, value: "" };
							} else if (isExisted) {
								return { lang: item2.lang, value: urlData as string };
							} else if (!isExisted && urlData) {
								const url = await uploadAvatar(avtDataArray[idx1][idx2]);
								return { lang: item2.lang, value: url.path };
							}
						})
					),
				};
			})
		);

		await createdBanner(props.listBanner, bannerName, updatedItemsArray, props.reload);
		props.setOpenAddBannerDialog(false);
	};

	useEffect(() => {
		setItems(convertBannerItems(new Banner(), props.countries));
		setAction("");
		setBannerName("");
	}, [props.openAddBannerDialog]);

	return (
		<DialogWrap
			open={props.openAddBannerDialog}
			onClose={handleClose}
			title="Tạo mới Banner"
			actions={
				<>
					<UserFormServiceButtonClose onClick={handleClose}>Hủy</UserFormServiceButtonClose>
					<UserFormServiceButtonCreated
						onClick={handleSave}
						disabled={isSaving}>
						{" "}
						Lưu
					</UserFormServiceButtonCreated>
				</>
			}>
			<AddBannerInput
				bannerName={bannerName}
				setBannerName={setBannerName}
				action={action}
				setAction={setAction}
				country={props.countries}
				setCountry={() => {}}
				avtDataArray={avtDataArray}
				setAvtDataArray={setAvtDataArray}
				items={items}
				setItems={setItems}
				listCountries={props.countries}
			/>
		</DialogWrap>
	);
}

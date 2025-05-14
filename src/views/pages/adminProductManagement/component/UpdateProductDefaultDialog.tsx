import React, { useEffect, useState } from "react";
import { DialogWrapMedium, DialogWrapMediumFilter } from "../../../controls/components/dialogWrap/DialogWrap";
import {
	UserFormServiceButtonClose,
	UserFormServiceButtonCreated,
} from "../../adminProductManagement/styled/ProductManagementStyle";
import useUpdatePricePersonal from "../../personal/hooks/useUpdatePriceKTV";
import UpdateProductPriceInput from "./UpdateProductPriceInput";
import useUpdatePriceService from "../hook/useUpdatePriceService";
import Service, { ScopeType } from "../../../../models/Service";
import { ImageInputData, convertUrlsToImageDatas } from "../../../hooks/useImageUploadInput";

export default function UpdateServicePriceDialog(props: {
	openUpdateServiceDialog: boolean;
	setOpenUpdateServiceDialog: (value: boolean) => void;
	reload: () => void;
	service?: Service;
}) {
	const { doUpdate, prices, setPrices } = useUpdatePriceService({ reload: props.reload, service: props.service });
	const [name, setName] = useState(props.service?.name || "");
	const [code, setCode] = useState(props.service?.code || "1");
	const [price, setPrice] = useState(props.service?.price || "1");
	const [unit, setUnit] = useState(props.service?.unit || "1");
	const [serviceGroup, setServiceGroup] = useState(props.service?.serviceGroup || "");
	const [type, setType] = useState(props.service?.scope || ScopeType.Universal);

	const [avtData, setAvtData] = useState<ImageInputData[]>(convertUrlsToImageDatas([props.service?.imageUrl || ""]));
	const [avtMultiData, setAvtMultiData] = useState<ImageInputData[]>(
		convertUrlsToImageDatas(props.service?.images?.map((image) => image?.path || "").filter((val) => val) || [])
	);
	const [description, setDescription] = useState(props.service?.description || "");

	useEffect(() => {
		setName(props.service?.name || "");
		setCode(props.service?.code || "1");
		setPrice(props.service?.price || "1");
		setUnit(props.service?.unit || "1");
		setServiceGroup(props.service?.serviceGroup || "");
		setType(props.service?.scope || ScopeType.Universal);

		setAvtData(convertUrlsToImageDatas([props.service?.imageUrl || ""]));
		setAvtMultiData(
			convertUrlsToImageDatas(
				(props.service?.images || []).map((image) => image?.path || "").filter((val) => val)
			)
		);
		setDescription(props.service?.description || "");
		setPrices((props.service?.hint as any) || []);
	}, [props.openUpdateServiceDialog]);

	const handleClose = () => {
		setName(props.service?.name || "");
		setCode(props.service?.code || "1");
		setPrice(props.service?.price || "1");
		setUnit(props.service?.unit || "1");
		setServiceGroup(props.service?.serviceGroup || "");

		setAvtData(convertUrlsToImageDatas([props.service?.imageUrl || ""]));
		setAvtMultiData(
			convertUrlsToImageDatas(
				(props.service?.images || []).map((image) => image?.path || "").filter((val) => val)
			)
		);
		setDescription(props.service?.description || "");
		setPrices((props.service?.hint as any) || []);

		props.setOpenUpdateServiceDialog(false);
	};

	const handleSave = async () => {
		await doUpdate(
			props.service?.id,
			name,
			code,
			price,
			unit,
			serviceGroup as string,
			avtData[0],
			avtMultiData,
			type,
			description,
			prices
		);
		props.setOpenUpdateServiceDialog(false);
	};

	return (
		<>
			<DialogWrapMediumFilter
				open={props.openUpdateServiceDialog}
				onClose={handleClose}
				title="Cập nhật bảng giá dịch vụ"
				actions={
					<>
						<UserFormServiceButtonClose onClick={handleClose}>Hủy</UserFormServiceButtonClose>
						<UserFormServiceButtonCreated onClick={handleSave}>Lưu</UserFormServiceButtonCreated>
					</>
				}>
				<UpdateProductPriceInput
					prices={prices}
					setPrices={setPrices}
					service={props.service}
				/>
			</DialogWrapMediumFilter>
		</>
	);
}

import React, { useEffect, useState } from "react";
import {
	AdminProductDialogInputWrap,
	AdminProductDialogInputWrapv2,
	AdminProductDialogInputWrapv3,
	SelectWrapper,
} from "../../../adminProductManagement/styled/ProductManagementStyle";
import { AdminVoucherDialogInputPromotion } from "../../../adminVoucherManagement/styled/StyledAdminVoucher";
import { StylePersonalLabelBank } from "../../../personal/component/StylePerson";
import {
	AdminOrderManagementFilterLabel,
	AdminOrderManagementFilterLabelv2,
} from "../../../adminOrderManagement/styled/StyledAdminOrdermanagement";
import { AdminOrderManagementStaffControl } from "../../../adminOrderManagement/AdminOrderManagementFilterStaff";
import StaffDetail from "../../../../../models/StaffDetail";
import {
	AdminDialogInputPromotion,
	PromotionInputColorServiceName,
	PromotionInputWrap,
	PromotionInputWrapCheckAll,
	PromotionInputWrapCheckAllWrap,
	PromotionInputWrapCheckIn,
	PromotionStaffInputServiceDiv,
	PromotionStaffInputServiceWrap,
} from "../../styled/StyledPromotion";
import StaffService from "../../../../../models/StaffService";

export default function AddPromotionStaffInput(props: {
	filterStaffId: number;
	setFilterStaffId: (value: number) => void;
	listAssignedPromotions: StaffDetail | undefined;
	price: number[];
	setPrice: (value: number[]) => void;
}) {
	const handleFilterStaffIdChange = (value: any) => {
		props.setFilterStaffId(value);
	};
	return (
		<AdminProductDialogInputWrapv3>
			<AdminVoucherDialogInputPromotion>
				<AdminOrderManagementFilterLabel>Thêm nhân viên</AdminOrderManagementFilterLabel>
				<AdminOrderManagementStaffControl
					filterStaffId={props.filterStaffId}
					doChangeStaffId={handleFilterStaffIdChange}
				/>
			</AdminVoucherDialogInputPromotion>
			{props.listAssignedPromotions && (
				<AdminDialogInputPromotion>
					<PromotionStaffInputService
						price={props.price}
						setPrice={props.setPrice}
						listAssignedPromotions={props.listAssignedPromotions}
					/>
				</AdminDialogInputPromotion>
			)}
		</AdminProductDialogInputWrapv3>
	);
}

// export function PromotionStaffInputService(props: {
// 	price: number[];
// 	setPrice: (value: number[]) => void;
// 	listAssignedPromotions?: StaffDetail;
// }) {
// 	const handleCheckboxChange = (priceId: number) => {
// 		const updatedPrices = props.price.includes(priceId)
// 			? props.price.filter((id) => id !== priceId)
// 			: [...props.price, priceId];

// 		props.setPrice(updatedPrices);
// 	};

// 	useEffect(() => {
// 		const activePrices =
// 			props.listAssignedPromotions?.staffService
// 				?.flatMap((service) => service.prices?.filter((val) => val.isProgramActive))
// 				.map((val) => val?.id || 0) || [];

// 		props.setPrice(activePrices);
// 	}, [props.listAssignedPromotions]);

// 	return (
// 		<div>
// 			{props.listAssignedPromotions?.staffService?.map((service, index) => (
// 				<div>
// 					<AdminOrderManagementFilterLabelv2>{service.service?.name} :</AdminOrderManagementFilterLabelv2>
// 					<PromotionStaffInputServiceWrap>
// 						{service.prices?.map((val, index) => (
// 							<PromotionStaffInputServiceDiv
// 								key={index}
// 								style={{
// 									cursor: "pointer",
// 									marginRight: "12px",
// 								}}
// 								onClick={() => handleCheckboxChange(val.id || 0)}>
// 								<input
// 									type="checkbox"
// 									checked={props.price.includes(val.id || 0)}
// 									onChange={() => handleCheckboxChange(val.id || 0)}
// 									style={{
// 										// appearance: "none",
// 										width: "20px",
// 										height: "20px",
// 										marginRight: "12px",
// 									}}
// 								/>
// 								<div>
// 									{val.price}/{val.unit}
// 								</div>
// 							</PromotionStaffInputServiceDiv>
// 						))}
// 					</PromotionStaffInputServiceWrap>
// 				</div>
// 			))}
// 		</div>
// 	);
// }

export function PromotionStaffInputService(props: {
	price: number[];
	setPrice: (value: number[]) => void;
	listAssignedPromotions?: StaffDetail;
}) {
	const [selectAllServices, setSelectAllServices] = useState(false);
	const [serviceSelection, setServiceSelection] = useState<{ [key: number]: boolean }>({});

	const handleSelectAllServicesChange = () => {
		setSelectAllServices(!selectAllServices);
		const allServicePrices =
			props.listAssignedPromotions?.staffService?.flatMap((service) =>
				service.prices?.map((val) => val?.id || 0)
			) || [];
		props.setPrice(!selectAllServices ? (allServicePrices as number[]) : []);
	};

	const handleCheckboxChange = (priceId: number) => {
		const updatedPrices = props.price.includes(priceId)
			? props.price.filter((id) => id !== priceId)
			: [...props.price, priceId];

		props.setPrice(updatedPrices);
	};

	const handleServiceCheckboxChange = (serviceId: number) => {
		const updatedServiceSelection = { ...serviceSelection, [serviceId]: !serviceSelection[serviceId] };
		setServiceSelection(updatedServiceSelection);

		const selectedServicePrices =
			props.listAssignedPromotions?.staffService
				?.find((service) => service?.id === serviceId)
				?.prices?.map((val) => val?.id || 0) || [];

		const updatedPrices = props.price.filter((id) => !selectedServicePrices.includes(id));

		if (updatedServiceSelection[serviceId]) {
			updatedPrices.push(...selectedServicePrices);
		}

		props.setPrice(updatedPrices);
	};

	useEffect(() => {
		const activePrices =
			props.listAssignedPromotions?.staffService?.flatMap((service) =>
				service.prices?.filter((val) => val.isProgramAssigned).map((val) => val?.id || 0)
			) || [];

		props.setPrice(activePrices as number[]);
	}, [props.listAssignedPromotions]);

	useEffect(() => {
		const allServicePrices =
			props.listAssignedPromotions?.staffService
				?.flatMap((service) => service.prices?.map((val) => val?.id || 0))
				.filter((id) => id !== undefined) || [];

		const areAllPricesSelected = allServicePrices.every((id) => props.price.includes(id || 0));

		setSelectAllServices(areAllPricesSelected);
	}, [props.price, props.listAssignedPromotions]);

	useEffect(() => {
		const initialServiceSelection: { [key: number]: boolean } = {};
		props.listAssignedPromotions?.staffService?.forEach((service) => {
			const serviceId = service.id || 0;
			initialServiceSelection[serviceId] =
				service.prices?.every((price) => props.price.includes(price.id || 0)) || false;
		});

		setServiceSelection(initialServiceSelection);
	}, [props.price, props.listAssignedPromotions]);

	return (
		<PromotionInputWrap>
			<PromotionInputWrapCheckAllWrap>
				<input
					type="checkbox"
					style={{
						cursor: "pointer",
						width: "20px",
						height: "20px",
						marginRight: "12px",
					}}
					checked={selectAllServices}
					onChange={handleSelectAllServicesChange}
				/>
				<span>Tất cả</span>
			</PromotionInputWrapCheckAllWrap>
			<PromotionInputWrapCheckIn>
				{props.listAssignedPromotions?.staffService
					?.filter((service) => service.prices && service.prices.length > 0)
					.map((service, index) => (
						<div key={index}>
							<PromotionInputWrapCheckAll>
								<input
									type="checkbox"
									style={{
										cursor: "pointer",
										width: "20px",
										height: "20px",
										marginRight: "12px",
									}}
									checked={serviceSelection[service.id || 0] || false}
									onChange={() => handleServiceCheckboxChange(service.id || 0)}
								/>
								<label>
									{service.name || "--"}{" "}
									<PromotionInputColorServiceName>
										({service.service?.name})
									</PromotionInputColorServiceName>{" "}
									:
								</label>
							</PromotionInputWrapCheckAll>
							<PromotionInputWrapCheckIn>
								{service.prices?.map((val, index) => (
									<div
										key={index}
										style={{
											cursor: "pointer",
											marginRight: "12px",
											display: "flex",
										}}>
										<input
											type="checkbox"
											checked={props.price.includes(val.id || 0)}
											onChange={() => handleCheckboxChange(val.id || 0)}
											style={{
												width: "16px",
												height: "16px",
												marginRight: "12px",
											}}
										/>
										<span>
											{val.price?.toLocaleString("en") || 0}/ {val.unit}
										</span>
									</div>
								))}
							</PromotionInputWrapCheckIn>
						</div>
					))}
			</PromotionInputWrapCheckIn>
		</PromotionInputWrap>
	);
}

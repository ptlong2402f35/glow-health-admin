import React, { useEffect } from "react";
import { useState } from "react";
import useCommonListFunctions from "../../../hooks/useCommonList/useCommonListFunctions";
import useFilterList from "../../adminUserManagement/hook/useFilterList";
import { SelectOptionType } from "react-select";
import {
	AdminUserManagementFilterBox,
	AdminUserManagementFilterBoxTwo,
	AdminUserManagementFilterTitle,
	AdminUserManagementFilterWrap,
	AdminUserManagementFilterBoxSelectTwo,
	StyleAddUser,
	ButtonIsFilterVisible,
	ButtonIsFilterVisiblev2,
	AdminUserManagementFilterRight,
	AdminUserManagementFilterLeft,
} from "../../adminUserManagement/styled/AdminUserManagementStyle";
import SearchPanel from "../../adminUserManagement/component/SearchPanel";
import DialogUserCreated from "../../adminUserManagement/component/DialogUserCreated";
import { SmSelectSearchBox } from "../../../controls/components/selectSearchBox/SelectSearchBox";
import { AdminProductrManagementFilterStatus } from "../../adminProductManagement/styled/ProductManagementStyle";
import { ProductFilterStatusSelect } from "../../adminProductManagement/component/ProductFilter";
import { useStatusFilter } from "../../adminProductManagement/hook/useFilterStatus";
import { userStatusList } from "../../adminProductManagement/hook/useFilterStatus";
import { useHistory, useParams } from "react-router";
import { AdminParnerManagementStaffControl } from "../hook/useFilterProviceStaff";
import { AdminParnerManagementStoreStaffControl } from "../hook/useFilterStoreStaff";
import { useOnlineFilter, userOnlineList } from "../hook/useFilterOnline";
import { useVerificationFilter, useVerificationList } from "../hook/useFilterVerification";
import {
	AdminUserManagementFilterClearButton,
	AdminUserManagementFilterWrap1,
	AdminUserManagementFilterWrap2,
	AdminUserManagementFilterWrap3,
	AdminUserManagementFilterWrap4,
} from "../styled/StyleParner";
import { useIdentifyFilter, useIdentifyList } from "../hook/useFilterIdentify";
import { useCertificateList, useFilterCertificate } from "../hook/useFilterCertificate";
import { useFilterGlowCare, useGlowCareList } from "../hook/useFilterGlowCare";
import { usePunishFilter, userPunishList } from "../../adminUserManagement/hook/useFilterPunish";

export default function AdminPartnerManagementFilter(props: {
	reload: () => void;
	identifyMode?: boolean;
	setIdentifyMode?: (val: boolean) => void;
}) {
	const [openAddUserDialog, setOpenAddUserDialog] = useState(false);
	const {
		filterKeyword,
		doFilterKeyword,
		filterPhone,
		doFilterPhone,
		doFilterProvice,
		filterProvice,
		filterStore,
		doFilterStore,
		doClearFilter,
		clearFilter,
	} = useCommonListFunctions();
	const { onlineSelected, handleFilterOnline } = useOnlineFilter();
	const { verificationSelected, handleFilterVerification } = useVerificationFilter();
	const { IdentifySelected, handleFilterIdentify } = useIdentifyFilter();
	const { certificateSelected, handleFilterCertificate } = useFilterCertificate();
	const { glowCareSelected, handleFilterGlowCare } = useFilterGlowCare();
	const { punishSelected, handleFilterPunish } = usePunishFilter();

	const [isFilterVisible, setIsFilterVisible] = useState(false);
	const history = useHistory();
	const handleSeeDetailsClick = () => {
		history.push(`/technicians-add`);
	};

	const handleReload = () => {
		props.reload();
	};

	const handleClearFilter = () => {
		const filtersActive =
			filterKeyword ||
			filterPhone ||
			filterProvice ||
			filterStore ||
			onlineSelected.value ||
			verificationSelected.value ||
			IdentifySelected.value;

		if (filtersActive) {
			doClearFilter?.();
		} else {
			handleReload();
		}
	};

	return (
		<div>

				<AdminUserManagementFilterBox>

					<StyleAddUser onClick={handleSeeDetailsClick}>+ Thêm người dùng</StyleAddUser>
					<DialogUserCreated
						openAddUserDialog={openAddUserDialog}
						setOpenAddUserDialog={setOpenAddUserDialog}
						reload={props.reload}
					/>
				</AdminUserManagementFilterBox>
		</div>
	);
}

export const AdminFilterSearchSelect = (props: {
	options: SelectOptionType[];
	value: SelectOptionType;
	setvalue: (val: SelectOptionType) => void;
	isSearchable?: boolean;
}) => {
	return (
		<SmSelectSearchBox
			isSearchable={props.isSearchable}
			options={props.options}
			value={props.value}
			onChange={props.setvalue}></SmSelectSearchBox>
	);
};

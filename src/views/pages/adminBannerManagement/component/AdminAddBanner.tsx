import React, { useEffect, useState } from "react";
import DialogAddBanner from "./AddBannerDialog";
import { StyleAddUser } from "../../adminUserManagement/styled/AdminUserManagementStyle";
import { AdminAddBannerWrap } from "../styled/StyledBannerManagement";
import Banner from "../../../../models/Banner";
import useListLang from "../hook/useGetLang";

export default function AdminAddBanner(props: { listBanner: Banner[]; reload: () => void }) {
	const [openAddBanner, setOpenAddBanner] = useState(false);
	const [countries, setCountries] = useState<
		{
			lang: string;
			name: string;
		}[]
	>([]);
	const { listLang } = useListLang();

	const openBanner = () => {
		setOpenAddBanner(true);
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

	return (
		<AdminAddBannerWrap>
			<StyleAddUser onClick={openBanner}>Thêm</StyleAddUser>
			{countries?.length && (
				<DialogAddBanner
					openAddBannerDialog={openAddBanner}
					setOpenAddBannerDialog={setOpenAddBanner}
					reload={props.reload}
					listBanner={props.listBanner}
					countries={countries}
				/>
			)}
		</AdminAddBannerWrap>
	);
}

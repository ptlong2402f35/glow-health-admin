import React, { useState } from "react";
import useGetInfoHook from "./hooks/useGetInfoHook";
import { PageWrap } from "../../controls/components/form/Page";
import { ImageInputData, convertUrlsToImageDatas } from "../../hooks/useImageUploadInput";
import { ImageViewDialog } from "../../controls/components/commonImageDialog/CommonImageDialog";

import PersonalPasswordv2 from "./PersonalPasswordv2";

import {
	StyledPersonalPagev2ContentWrap,
	StyledPersonalPagev2Wrap,
	StyledPersonalPagev2bg,
} from "./styled/StylePersonal";
import PersonalInfov2 from "./PersonalInfov2";
import AvtUserManagementSectionv2 from "./component/AvtUserManagementSectionv2";

export type PersonalInfo = {
	userName?: string | undefined | null;
	firstName?: string | undefined | null;
	lastName?: string | undefined | null;
	phone?: string | undefined | null;
};

export default function PersonalPagev2() {
	const [openImgDialog, setOpenImgDialog] = useState(false);
	const [imageAvt, setImageAvt] = useState("");
	const { personalInfo, reload } = useGetInfoHook({});

	const [avtData, setAvtData] = useState<ImageInputData[]>(convertUrlsToImageDatas([personalInfo?.urlImage || ""]));

	return (
		<PageWrap>
			<StyledPersonalPagev2Wrap>
				<StyledPersonalPagev2bg></StyledPersonalPagev2bg>
				<StyledPersonalPagev2ContentWrap>
					<AvtUserManagementSectionv2
						personalInfo={personalInfo}
						openImgDialog={setOpenImgDialog}
						avtData={avtData}
						setAvtData={setAvtData}
						reload={reload}
						setImgDialog={setImageAvt}
					/>
					<PersonalInfov2
						reload={reload}
						personalData={personalInfo}
					/>
					<PersonalPasswordv2 personalData={personalInfo} />
				</StyledPersonalPagev2ContentWrap>
			</StyledPersonalPagev2Wrap>
			<ImageViewDialog
				open={openImgDialog}
				onClose={() => setOpenImgDialog(false)}
				onLoad={() => {}}
				url={imageAvt}></ImageViewDialog>
		</PageWrap>
	);
}

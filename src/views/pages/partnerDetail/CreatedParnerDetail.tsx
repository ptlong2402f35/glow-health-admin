import React, { createContext } from "react";
import * as yup from "yup";
import { useState } from "react";
import { PageCenter, PageHeader, PageWrap } from "../../controls/components/form/Page";
import { useParams } from "react-router";
import { StyleUploadUserImage } from "../personal/component/StylePerson";
import { Grid } from "@material-ui/core";
import useGetDetailStaff from "./hook/useDetailStaff";
import { AvtUserManagementSection } from "../personal/component/AvtUserManagementSection";
import { ImageInputData, convertUrlsToImageDatas } from "../../hooks/useImageUploadInput";
import CreatedPartnerDetailForm from "./component/CreatedParnerDetail";
import { AvatarServicePersonalMulti } from "../personal/component/AvatarServicePersonal";
import { GridPartnerFlex, PartnerPageCenter } from "./styled/StylePartnerDetail";

export const AdminPartnerCreatedManagementContext = createContext<{
	isHR?: boolean;
} | null>(null);
export default function CreatedPartnerDetail(props:{isHR?: boolean}) {
	let { userId } = useParams<{ userId: string }>();
	let userIdNumber = parseInt(userId);

	const [openImgDialog, setOpenImgDialog] = useState(false);
	const [avtData, setAvtData] = useState<ImageInputData[]>(convertUrlsToImageDatas([""]));
	const [avtMultiData, setAvtMultiData] = useState<ImageInputData[]>(convertUrlsToImageDatas([]));
	const [openImgMultiDialog, setOpenImgMultiDialog] = useState(false);

	const schema = yup.object().shape({
		name: yup.string().required("Vui lòng nhập tên khách hàng"),
	});

	return (
			<AdminPartnerCreatedManagementContext.Provider
				value={{
					isHR: props.isHR,
				}}>
		<PageWrap>
			<PartnerPageCenter>
				<PageHeader>Thêm KTV khách hàng</PageHeader>
				<>
					<GridPartnerFlex
						container
						spacing={4}
						style={{ margin: "0" }}>
						<Grid
							item
							xs={12}
							md={8}
							style={{ border: "thin solid rgba(0,0,0,.12)", padding: "24px 0" }}>
							<CreatedPartnerDetailForm
								userId={userIdNumber}
								avtData={avtData}
								avtMultiData={avtMultiData}
							/>
						</Grid>
						<Grid
							item
							xs={12}
							md={3}
							// style={{ border: "thin solid rgba(0,0,0,.12)", margin: "0 0 0 24px" }}
						>
							<StyleUploadUserImage>
								<AvtUserManagementSection
									type={true}
									openImgDialog={setOpenImgDialog}
									avtData={avtData}
									setAvtData={setAvtData}
								/>
							</StyleUploadUserImage>

							<AvatarServicePersonalMulti
								type={true}
								avtMultiData={avtMultiData}
								setAvtMultiData={setAvtMultiData}
								openImgDialog={setOpenImgMultiDialog}
							/>
						</Grid>
					</GridPartnerFlex>
				</>
			</PartnerPageCenter>
		</PageWrap>
		</AdminPartnerCreatedManagementContext.Provider>
	);
}

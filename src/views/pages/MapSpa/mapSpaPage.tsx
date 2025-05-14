import React, { createContext, useEffect, useState } from "react";
import useCommonListFunctions from "../../hooks/useCommonList/useCommonListFunctions";
import Staff from "../../../models/Staff";
import GoogleMapPage from "./component/GoogleMap";
import {
	FillterMobileMap,
	GoogleMapRight,
	GoogleMapWrap,
	HomeWrapper,
	ListPartnerBcWrap,
	SearchMapPageOpenMobi,
	SearchMapPageOpenMobiImg,
	SearchMapPageOpenMobiWrap,
} from "./styled/MapStyled";
import ListPartner, { ListPartnerTopWrap } from "./component/ListSpa";
import { useParams } from "react-router";
import { getFilterBlogListHome } from "../FilterAtHome/hook/getListStaffAtHome";
import HomeIntroMenuv2 from "../home/HomeIntroMenuv2";
import { AutoPlaySwipeableViews, HomeRes, HomeWeb, HomeWrapperMap, HomeWrapperv2 } from "../home/styled/HomeStyles";
import Footerv4 from "../../controls/layout/footer/Footerv4";
import FooterRes from "../../controls/layout/footer/FooterRes";
import { getFilteStaffMap } from "./hook/getListStaffAtHome";
import BreadCrumbStaff from "../FilterAtHome/component/BreadCrumb";
import StaffAddressPath from "../../../models/StaffAddressPath";
import useGetListTags from "./hook/getListTags";
import getUrlAddress from "./hook/getUrlAddress";

export const MapPageContext = createContext<{
	address: StaffAddressPath[],
	backUrl: string,
	locationType: string,
} | null>(null);

export default function MapSpaScreen() {
	const hash = typeof window !== "undefined" && window ? window.location?.hash : undefined;

	useEffect(() => {
		if (hash === undefined) return;
		const timeout = setTimeout(() => {
			const distance = document.getElementById(hash.replace("#", ""))?.offsetTop || 0;
			window.scrollTo({
				top: distance,
				left: 0,
				behavior: "smooth",
			});
			clearTimeout(timeout);
		}, 300);
	}, [hash]);
	const { link, lang, apartment } = useParams<{ link: string; lang: string; apartment: string }>();
	const { staff, breadCrumb, count, pageType, pageTitle, reload, labelData, lat,lng,setLat,setLng, filterSG } = getFilteStaffMap({
		link,
		lang,
		apartment,
	});
	const {listOption} = useGetListTags({filterSG})
	const { page, doChangePage, getPathChangePage } = useCommonListFunctions();
	const [selectedLocation, setSelectedLocation] = useState<Staff>();
	const [openDialog, setOpenDialog] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const { address, backUrl, locationType } = getUrlAddress({
			link,
			apartment: apartment,
			lang: lang,
		});
	const [show, setShow] = useState(true);


	useEffect(() => {
		setSelectedLocation(undefined);
		// setLat(latGG);
		// setLng(lngGG);
		setShow(false);
	}, [staff]);
	useEffect(() => {
		if (!show) setShow(true);
	}, [show]);


	const handleOpen = () => {
		setOpenDialog(!openDialog);
		setTimeout(() => {
			setIsVisible((prev) => !prev);
		}, 500);
	};

	return (<MapPageContext.Provider
					value={{
						address: address,
						backUrl:backUrl,
						locationType:locationType,
					}}>
		<HomeWrapperMap>
			<HomeIntroMenuv2 isMap={true} />
			<HomeWrapper>
				<ListPartnerBcWrap>
					<BreadCrumbStaff
						breadCrumb={breadCrumb}
						apartment={apartment}
						isMap={true}
					/>
				</ListPartnerBcWrap>
				<GoogleMapWrap>
					<SearchMapPageOpenMobiWrap>
						{openDialog ? (
							<SearchMapPageOpenMobi onClick={() => handleOpen()}>
								{" "}
								<SearchMapPageOpenMobiImg src="./static/img/List.png" /> Hiển thị bản đồ
							</SearchMapPageOpenMobi>
						) : (
							<SearchMapPageOpenMobi onClick={() => handleOpen()}>
								{" "}
								<SearchMapPageOpenMobiImg src="./static/img/List.png" /> Danh sách
							</SearchMapPageOpenMobi>
						)}
					</SearchMapPageOpenMobiWrap>
					<GoogleMapRight>
						<GoogleMapPage
							staff={staff}
							selectedLocation={selectedLocation}
							setSelectedLocation={setSelectedLocation}
							lat={lat}
							lng={lng}
							show={show}
							setShow={setShow}
							
						/>
						<FillterMobileMap>
							<ListPartnerTopWrap
								apartment={apartment}
								reload={reload}
								listOption={listOption}
							/>
						</FillterMobileMap>
					</GoogleMapRight>
					<ListPartner
						staff={staff}
						selectedLocation={selectedLocation}
						setSelectedLocation={setSelectedLocation}
						// setShow={setShow}
						// setLat={setLat}
						// setLng={setLng}
						openDialog={openDialog}
						setOpenDialog={setOpenDialog}
						isVisible={isVisible}
						breadCrumb={breadCrumb}
						apartment={apartment}
						pageTitle={pageTitle}
						reload={reload}
						listOption={listOption}
					/>
				</GoogleMapWrap>
			</HomeWrapper>
		</HomeWrapperMap>
		</MapPageContext.Provider>
	);
}

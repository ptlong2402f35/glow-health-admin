import React, { Fragment, useEffect, useState } from "react";
import {
	APIProvider,
	Map,
	Marker,
	MapCameraChangedEvent,
	InfoWindow,
	AdvancedMarker,
	Pin,
} from "@vis.gl/react-google-maps";
import { createGlobalStyle } from "styled-components";
import { useHistory, useLocation } from "react-router";
import environments from "../../../../environment";
import Staff from "../../../../models/Staff";
import {
	ListPartnerInnerWrap,
	PartnerInnerBottom,
	PartnerInnerBottomInner,
	PartnerInnerBottomInnerButton,
	PartnerInnerBottomInnerPrice,
	PartnerInnerBottomInnerPriceS,
	PartnerInnerTop,
	PartnerInnerTopInfo,
	PartnerInnerTopInfoAddress,
	PartnerInnerTopInfoWorkTime,
	PartnerInnerTopInfoWorkTimeContentv2,
	PartnerInnerTopInfoWorkTimeImg,
	PartnerInnerTopName,
	PartnerInnerTopStore,
	PartnerInnerTopStoreImg,
	PartnerInnerTopStoreName,
	PartnerInnerTopTitle,
} from "../styled/MapStyled";
import {
	StaffDetailPageContentTopInfoStarImg,
	StaffDetailPageContentTopInfoStarTime,
	WorkTimeDate,
	WorkTimeHour,
	WorkTimeWrap,
} from "../../FilterAtHome/styled/ListStaffAtHome";
import { ListPartnerInner } from "./ListSpa";

const GlobalStyle = createGlobalStyle`
  .gm-style-iw-a .gm-style-iw-t .gm-style-iw-c .gm-style-iw-chr {
        background-color: transparent !important;
		pointer-events: none !important;
  }
		  .gm-style-iw-a .gm-style-iw-t .gm-style-iw-c .gm-style-iw-chr .gm-style-iw-ch {
		pointer-events: none !important;
  }
   .gm-style-iw-a .gm-style-iw-t .gm-style-iw-c {
        background-color: transparent !important;
            box-shadow: none !important;
            padding-right: 24px !important;
			pointer-events: none !important;
			
			 	@media screen and (max-width: 768px) {
		    top: 25vh;
			 max-width:350px !important;
		}
	}
	.gm-style-iw-a .gm-style-iw-t .gm-style-iw-tc {
        display:none !important;
  	
    }
    .gm-style-iw-a .gm-style-iw-t .gm-style-iw-c .gm-style-iw-d {
        background-color:#FFF ;
        overflow: unset !important;
		    pointer-events: auto !important;
            border-radius: 8px;
			box-shadow: 0px 4px 15.3px 0px rgba(17, 24, 39, 0.16);
    }
    .gm-style-iw-a .gm-style-iw-t .gm-style-iw-c .gm-style-iw-chr .gm-ui-hover-effect{
           background-color: #fff !important;
    opacity: 1;
    border-radius: 100px !important;
    top: 24px;
    right: -24px;
	pointer-events: auto !important;
}


`;

export default function GoogleMapPage(props: {
	staff: Staff[];
	selectedLocation?: Staff;
	setSelectedLocation: (value: Staff | undefined) => void;
	lat: string | null;
	lng: string | null;
	show: boolean;
	setShow: (value: boolean) => void;
	// setLat: (value: string) => void;
	// setLng: (value: string) => void;
	// reloadTrigger: number| undefined;
}) {
	const [mapsLoaded, setMapsLoaded] = useState(false);
	// const [show, setShow] = useState(true);

	useEffect(() => {
		if (window.google) {
			setMapsLoaded(true);
		}
	}, []);

	const handleMarkerClick = (location: Staff) => {
		props.setSelectedLocation(location);
		// props.setLat((location.lat || 0).toString());
		// props.setLng((location.long|| 0).toString());
		props.setShow(false);
	};

	const handleCloseInfoWindow = () => {
		props.setSelectedLocation(undefined);
	};

	return (
		<Fragment>
			{props.show && (
				<APIProvider
					apiKey={environments.apiMap || ""}
					onLoad={() => setMapsLoaded(true)}>
					<GlobalStyle />
					{mapsLoaded && (
						<GoogleMapPageMap
							key={`${props.lat}_${props.lng}`}
							lat={props.lat}
							lng={props.lng}
							selectedLocation={props.selectedLocation}
							setSelectedLocation={props.setSelectedLocation}
							staff={props.staff || []}
							handleMarkerClick={handleMarkerClick}
							handleCloseInfoWindow={handleCloseInfoWindow}
						/>
					)}
				</APIProvider>
			)}
		</Fragment>
	);
}

class LoSize {
	width: number;
	height: number;
	widthUnit?: string;
	heightUnit?: string;

	constructor(width: number, height: number, widthUnit?: string, heightUnit?: string) {
		this.width = width;
		this.height = height;
		this.widthUnit = widthUnit;
		this.heightUnit = heightUnit;
	}

	equals(other: google.maps.Size | null): boolean {
		if (!other) return false;
		return (this.width || 0) === (other.width || 0) && (this.height || 0) === (other.height || 0);
	}

	toString(): string {
		return "";
	}
}

export function GoogleMapPageMap(props: {
	staff: Staff[];
	selectedLocation?: Staff;
	setSelectedLocation: (value: Staff | undefined) => void;
	lat: string | null;
	lng: string | null;
	handleMarkerClick: (location: Staff) => void;
	handleCloseInfoWindow: () => void;
}) {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	const mapStyles = [
		{
			featureType: "poi",
			elementType: "labels",
			stylers: [{ visibility: "off" }],
		},
		{
			featureType: "transit",
			elementType: "labels",
			stylers: [{ visibility: "off" }],
		},
	];
	const { pathname, search } = useLocation();
	const queryParams = new URLSearchParams(search);
	const isNearMe = queryParams.get("nearme") === "true";
	return (
		<Map
			mapId={environments.mapId || ""}
			mapTypeControl={false}
			streetViewControl={false}
			// fullscreenControl={false}
			styles={mapStyles}
			defaultZoom={isMobile ? 11 : 13}
			defaultCenter={{ lat: parseFloat(props.lat || "21.0099829"), lng: parseFloat(props.lng || "105.7979991 ") }}
			gestureHandling="greedy"
			onCameraChanged={(ev: MapCameraChangedEvent) =>
				console.log("camera changed:", ev.detail.center, "zoom:", ev.detail.zoom)
			}>
			{(props.staff || []).map((location, index) => (
				<AdvancedMarker
					key={index}
					position={{ lat: location.lat || 0, lng: location.long || 0 }}
					onClick={() => props.handleMarkerClick(location)}>
					<div
						style={{
							width:
								props.selectedLocation?.lat === location.lat &&
								props.selectedLocation?.long === location.long
									? 54
									: 44,
							height:
								props.selectedLocation?.lat === location.lat &&
								props.selectedLocation?.long === location.long
									? 54
									: 44,
							borderRadius: "50%",
							overflow: "hidden",
							border: "2px solid white",
							boxShadow: "0 0 6px rgba(0,0,0,0.3)",
							backgroundColor: "#fff",
						}}>
						<img
							src={
								location?.user?.thumbnailImage ||
								location?.user?.urlImage ||
								location?.images?.[0]?.path ||
								"./static/img/User.png"
							}
							alt="avatar"
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
							}}
						/>
					</div>
				</AdvancedMarker>
			))}
			{/* {isNearMe && (
				<Marker
					key="pin-marker"
					position={{ lat: parseFloat(props.lat || "0"), lng: parseFloat(props.lng || "0 ") }}
				/>
			)} */}
			{props.selectedLocation && (
				<InfoWindow
					pixelOffset={isMobile ? undefined : [0, -40]}
					shouldFocus={true}
					position={{ lat: props.selectedLocation.lat || 0, lng: props.selectedLocation.long || 0 }}
					onCloseClick={props.handleCloseInfoWindow}>
					<ListPartnerInnerWrap>
						<ListPartnerInner val={props.selectedLocation} />
					</ListPartnerInnerWrap>
				</InfoWindow>
			)}
		</Map>
	);
}

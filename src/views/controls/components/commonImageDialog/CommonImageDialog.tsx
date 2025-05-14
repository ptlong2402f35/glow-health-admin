import React, { Fragment, useState, useEffect } from "react";
import { ImageDialogQuantityType, ImageDialogType } from "../../../hooks/common/useAttachImageDialog";
import { DialogContent, makeStyles } from "@material-ui/core";
import useImageViewDialogAddon from "../../../hooks/useImageViewDialogAddon";
import {
	ImageDialogWrapBody,
	ImageViewBox,
	ImageViewBoxClose,
	ImageViewBoxCloseBtn,
	ImageViewBoxCount,
	ImageViewBoxInner,
	ImageViewBoxLeft,
	ImageViewBoxLeftBtn,
	ImageViewBoxMainImg,
	ImageViewBoxOpen,
	ImageViewBoxOpenBtn,
	ImageViewBoxRight,
	ImageViewBoxRightBtn,
	StyledImageDialog,
} from "./StyledCommonLoadingDialog";

export default function CommonImageDialog(props: ImageDialogType) {
	const { recalcImageSize, attachResizeEvent, onImgLoaded } = useImageViewDialogAddon({
		dialogOpen: props.open,
		wrapId: "#image-view-box",
		elemId: "#image-view-box-main-img",
	});

	useEffect(() => {
		attachResizeEvent();
	}, []);

	if (props.type == ImageDialogQuantityType.Multiple) {
		return (
			<MultipleImagesViewDialog
				open={props.open}
				onClose={props.onClose}
				onLoad={onImgLoaded}
				urls={props.images || []}
				index={props.currentIndex || 0}
				afterClose={props.afterClose}
			/>
		);
	} else {
		return (
			<ImageViewDialog
				open={props.open}
				onClose={props.onClose}
				onLoad={onImgLoaded}
				url={props.url}
				title={props.title}
				alt={props.alt}
				afterClose={props.afterClose}
			/>
		);
	}
}

export const useImageViewStyles = makeStyles({
	paper: {
		maxWidth: "unset",
		display: "block",
		// borderRadius: "16px",
		"@media(max-width: 768px)": {
			minWidth: "unset",
			margin: "16px",
		},
	},
	heading: {
		padding: "0px",
	},
	body: {
		padding: "0px",
	},
	footer: {
		padding: "0px",
	},
});

export type SingleImageDialogType = {
	open: boolean;
	onClose: () => void;
	onLoad: (e: any) => void;
	children?: JSX.Element | JSX.Element[] | string | string[];
	url?: string;
	title?: string;
	alt?: string;
	afterClose?: () => void;
	customActions?: JSX.Element | string;
};

export function ImageViewDialog(props: SingleImageDialogType) {
	const onOuterClick = () => {
		props.onClose && props.onClose();
	};

	const onInnerClick = (e: any) => {
		e.stopPropagation();
	};

	const styles = useImageViewStyles();

	return (
		<StyledImageDialog
			open={props.open}
			onClose={props.onClose}
			classes={{ paper: styles.paper }}>
			<DialogContent className={styles.body}>
				<ImageDialogWrapBody>
					<ImageViewBox
						id="image-view-box"
						onClick={onOuterClick}>
						<ImageViewBoxInner onClick={onInnerClick}>
							<ImageViewBoxOpen>
								<ImageViewBoxOpenBtn
									href={props.url}
									target="_blank">
									<i className="fa fa-external-link-square"></i>
								</ImageViewBoxOpenBtn>
							</ImageViewBoxOpen>
							<ImageViewBoxClose>
								<ImageViewBoxCloseBtn onClick={() => props.onClose()}>
									<i className="fa fa-times"></i>
								</ImageViewBoxCloseBtn>
							</ImageViewBoxClose>
							{props.customActions}
							{props.children ? (
								props.children
							) : (
								<ImageViewBoxMainImg
									id="image-view-box-main-img"
									src={props.url}
									onLoad={props.onLoad}
								/>
							)}
						</ImageViewBoxInner>
					</ImageViewBox>
				</ImageDialogWrapBody>
			</DialogContent>
		</StyledImageDialog>
	);
}

export type MultipleImageDialogType = {
	open: boolean;
	onClose: () => void;
	onLoad: (e: any) => void;
	children?: JSX.Element | JSX.Element[] | string | string[];
	urls: string[];
	index: number;
	afterClose?: () => void;
	customActions?: (input: { idx: number }) => JSX.Element | string;
};

export function MultipleImagesViewDialog(props: MultipleImageDialogType) {
	const styles = useImageViewStyles();
	const [idx, setIdx] = useState(props.index);

	const onOuterClick = () => {
		props.onClose && props.onClose();
	};

	const onInnerClick = (e: React.MouseEvent<HTMLDivElement>) => {
		e.stopPropagation();
	};

	const onGotoLeftClick = () => {
		setIdx(idx > 0 ? idx - 1 : 0);
	};

	const onGotoRightClick = () => {
		setIdx(idx < props.urls.length - 1 ? idx + 1 : props.urls.length + 1);
	};

	useEffect(() => {
		setIdx(props.index < props.urls.length ? props.index : props.urls.length - 1);
	}, [props.urls, props.index]);

	return (
		<StyledImageDialog
			open={props.open}
			onClose={props.onClose}
			classes={{ paper: styles.paper }}>
			<DialogContent className={styles.body}>
				<ImageDialogWrapBody>
					<ImageViewBox
						id="image-view-box"
						onClick={onOuterClick}>
						<ImageViewBoxInner onClick={onInnerClick}>
							<ImageViewBoxOpen>
								<ImageViewBoxOpenBtn
									href={props.urls[idx]}
									target="_blank">
									<i className="fa fa-external-link-square"></i>
								</ImageViewBoxOpenBtn>
							</ImageViewBoxOpen>
							<ImageViewBoxClose>
								<ImageViewBoxCloseBtn onClick={props.onClose}>
									<i className="fa fa-times"></i>
								</ImageViewBoxCloseBtn>
							</ImageViewBoxClose>
							{idx > 0 && (
								<ImageViewBoxLeft>
									<ImageViewBoxLeftBtn onClick={onGotoLeftClick}>
										<i className="fa fa-caret-left"></i>
									</ImageViewBoxLeftBtn>
								</ImageViewBoxLeft>
							)}
							{idx < props.urls.length - 1 && (
								<ImageViewBoxRight>
									<ImageViewBoxRightBtn onClick={onGotoRightClick}>
										<i className="fa fa-caret-right"></i>
									</ImageViewBoxRightBtn>
								</ImageViewBoxRight>
							)}
							<ImageViewBoxCount>
								<p>
									{idx + 1}/{props.urls.length}
								</p>
							</ImageViewBoxCount>
							{props.customActions?.({ idx: idx })}
							{props.children ? (
								props.children
							) : (
								<ImageViewBoxMainImg
									id="image-view-box-main-img"
									src={props.urls[idx]}
									onLoad={props.onLoad}
								/>
							)}
						</ImageViewBoxInner>
					</ImageViewBox>
				</ImageDialogWrapBody>
			</DialogContent>
		</StyledImageDialog>
	);
}

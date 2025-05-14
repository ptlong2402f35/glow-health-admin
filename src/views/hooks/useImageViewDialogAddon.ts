import { useEffect, useRef } from "react";
import Logger from "../../utils/Logger";

const $ = typeof window !== "undefined" && (window as any).jQuery;

const Log = Logger.getLogger("useImageViewDialogAddon");

/**
 * @param dialogOpen
 * @param wrapId
 * @param elemId
 */
export default function useImageViewDialogAddon(props: { dialogOpen: boolean; wrapId: string; elemId: string }) {
	const dialogOpenRef = useRef(props.dialogOpen);

	const recalcImageSize = () => {
		if (!dialogOpenRef.current) {
			return;
		}

		var wrapW = $(props.wrapId).innerWidth();
		var wrapH = $(props.wrapId).innerHeight();
		var imgW = $(props.elemId).prop("naturalWidth");
		var imgH = $(props.elemId).prop("naturalHeight");

		Log.log(`recalcImageSize: ${wrapW} - ${wrapH} - ${imgW} - ${imgH}`);

		if (!wrapH || !imgH) {
			return;
		}

		//image fit inside wrapper
		if (imgW <= wrapW && imgH <= wrapH) {
			//keep image width + height
			$(props.elemId).width(imgW);
			$(props.elemId).height(imgH);
		}

		//width ratio larger than wrapper
		else if (imgW / imgH > wrapW / wrapH) {
			//fit width
			$(props.elemId).width(wrapW);
			$(props.elemId).height((imgH * wrapW) / imgW);
		}

		//height larger than wrapper
		else if (imgW / imgH < wrapW / wrapH) {
			//fit height
			$(props.elemId).width((imgW * wrapH) / imgH);
			$(props.elemId).height(wrapH);
		}
	};

	const onResize = () => {
		Log.log(`attachResizeEvent`);
		recalcImageSize();
	};

	const attachResizeEvent = () => {
		$(window).resize(onResize);
	};

	const onImgLoaded = () => {
		Log.log(`onImgLoaded`);
		recalcImageSize();
	};

	/*useEffect(() => {
        if(props.dialogOpen) {
            recalcImageSize();
        }
    }, [props.dialogOpen]);*/

	useEffect(() => {
		dialogOpenRef.current = props.dialogOpen;
	});

	return {
		recalcImageSize: recalcImageSize,
		attachResizeEvent: attachResizeEvent,
		onImgLoaded: onImgLoaded,
	};
}

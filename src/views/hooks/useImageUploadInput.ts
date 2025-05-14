import { ChangeEventHandler } from "react";
import { uploadAvatar } from "../../services/PersonalService";

export enum UploadInputType {
	Single = 1,
	Multiple = 2,
}

export type ImageInputData = {
	isExisted: boolean;
	domData: any;
	urlData: string | ArrayBuffer | null;
};

type ReadFileType = {
	domData: File;
	urlData: string | ArrayBuffer | null;
};

export default function useImageUploadInput(props: {
	type?: UploadInputType;
	imageDatas: ImageInputData[];
	onImageDatasChange: (imageDatas: ImageInputData[]) => void;
}) {
	const readUrl = (domData: File) => {
		return new Promise<ReadFileType | null>((resolve, reject) => {
			var reader = new FileReader();
			reader.onload = (ev) => {
				resolve(
					ev.target
						? {
								domData: domData,
								urlData: ev.target.result,
						  }
						: null
				);
			};
			reader.readAsDataURL(domData);
		});
	};

	const onUploadInputChange: ChangeEventHandler<HTMLInputElement> = async (e) => {
		if (!e.target.files) return;
		if (e.target.files.length === 0) return;
		let promises: Promise<ReadFileType | null>[] = [];
		for (let i = 0; i < (e.target.files?.length || 0); i++) {
			let file = e.target.files?.item(i);
			if (!file) continue;

			promises.push(readUrl(file));
		}

		let results = await Promise.all(promises);
		let nDatas = results
			.filter((item) => item)
			.map((item) => ({
				isExisted: false,
				domData: item?.domData,
				urlData: item?.urlData || null,
			}));
		props.onImageDatasChange(props.type == UploadInputType.Multiple ? [...props.imageDatas, ...nDatas] : nDatas);
	};

	const onRemoveImageClicked = (imageData: ImageInputData) => {
		props.onImageDatasChange(props.imageDatas.filter((item) => item !== imageData));
	};

	const onClearImageClicked = () => {
		props.onImageDatasChange([]);
	};

	return {
		onUploadInputChange,
		onRemoveImageClicked,
		onClearImageClicked,
	};
}

export function convertUrlsToImageDatas(urls: string[] | null | undefined): ImageInputData[] {
	if (!urls) return [];
	return urls.map((url) => ({
		isExisted: true,
		domData: null,
		urlData: url,
	}));
}

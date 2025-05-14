import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import CustomLinkService from "../../../../services/CustomLinkService";
import { uploadAvatar } from "../../../../services/PersonalService";
import { ImageInputData } from "../../../hooks/useImageUploadInput";

export default function useUpdateCustomLink(props: {
    reload?: () => void;
    setOpenUpdateCustomDialog?: (value: boolean) => void;
}) {
    const { openAlertDialog } = useAlertDialog();
    const doUpdate = async (
        id: string,
        name: string,
        title: string,
        description: string,
        ogTitle: string,
        ogDescription: string,
        ogImage: ImageInputData| null | undefined,
        ogType: string,
        ogUrl: string,
        canonical: string,
        hreflang: string,
        structuredData: string,
        originalLink: string,
        newLink: string,
        h1Content:string,
        setIsDisable?: (val: boolean) => void
    ) => {
        let avatarLink;
        if (ogImage && !ogImage?.isExisted) {
            const avatar = await uploadAvatar(ogImage);
            avatarLink = avatar.path;
        }else if (ogImage && ogImage?.isExisted) {
			avatarLink = ogImage?.urlData;
		}

        try {
            setIsDisable?.(true);
            let hreflangJson;
            if (hreflang) {
                try {
                    hreflangJson = JSON.parse(hreflang.replace(/[\n\t\r]/g,""));
                } catch (error) {
                    console.error("Invalid hreflang JSON", error);
                }
            }
    
            let structuredDataJson;
            if (structuredData) {
                try {
                    structuredDataJson = JSON.parse(structuredData.replace(/[\n\t\r]/g,""));
                } catch (error) {
                    console.error("Invalid structuredData JSON", error);
                }
            }

            await CustomLinkService.UpdateCustomLink(id, name,title, description,ogTitle, ogDescription, avatarLink, ogType,ogUrl,canonical, hreflangJson, structuredDataJson,originalLink, newLink, h1Content);
            openAlertDialog?.(AlertType.Success, "Cập nhật thành công!", () => {
                props.reload?.();
                props.setOpenUpdateCustomDialog?.(false);
            });
        } catch {
            openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
        } finally {
            setIsDisable?.(false);
        }
    };

    return {
        doUpdate,
    };
}

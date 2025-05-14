import ProductService from "../../../../services/ProductService";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import { ImageInputData } from "../../../hooks/useImageUploadInput";
import { uploadAvatar, uploadMutipleAvatars } from "../../../../services/PersonalService";
import VoucherService from "../../../../services/VoucherService";
import CustomLinkService from "../../../../services/CustomLinkService";

export default function useCreatedCustomLink(props: {
    reload: () => void;
    setOpenAddVoucherDialog: (value: boolean) => void;
}) {
    const { openAlertDialog } = useAlertDialog();
    const createdCustomLink = async (
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
          h1Custom:string,
        setIsDisable?: (val: boolean) => void
    ) => {
        let avatarLink: string | null | undefined;
        if (ogImage && !ogImage?.isExisted) {
            const avatar = await uploadAvatar(ogImage);
            avatarLink = avatar.path;
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
            await CustomLinkService.CreatedCustomLink(name,title, description,ogTitle, ogDescription, avatarLink, ogType,ogUrl,canonical, hreflangJson, structuredDataJson,originalLink, newLink, h1Custom );
            openAlertDialog?.(AlertType.Success, "Thêm thành công!", () => {
                props.reload();
                props.setOpenAddVoucherDialog(false);
            });
        } catch {
            openAlertDialog?.(AlertType.Fail, "Đã có lỗi xảy ra!");
        } finally {
            setIsDisable?.(false);
        }
    };

    return {
        createdCustomLink,
    };
}

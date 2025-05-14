import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import CustomLinkService from "../../../../services/CustomLinkService";
import { uploadAvatar } from "../../../../services/PersonalService";
import { ImageInputData } from "../../../hooks/useImageUploadInput";

export default function useUpdateActiveCustomLink(props: {
    reload?: () => void;
    setOpenUpdateCustomDialog?: (value: boolean) => void;
}) {
    const { openAlertDialog } = useAlertDialog();
    const doActive = async (
        id: string,
        active: boolean,
        
        setIsDisable?: (val: boolean) => void
    ) => {

        try {
            setIsDisable?.(true);
            await CustomLinkService.UpdateTypeCustomLink(id, active);
            openAlertDialog?.(AlertType.Success, "Thay đổi trạng thái thành công!", () => {
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
        doActive,
    };
}

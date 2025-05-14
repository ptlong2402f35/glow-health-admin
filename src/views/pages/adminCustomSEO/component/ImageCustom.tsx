import React, { Fragment, useEffect } from "react";
import useImageUploadInput, { ImageInputData, UploadInputType } from "../../../hooks/useImageUploadInput";
import StaffDetail from "../../../../models/StaffDetail";
import {
    AdminImgDelete,
    StylePageBlogContent,
    StylePageCustomContent,
    StylePagePersonContentAvt,
    StylePagePersonContentAvtImg,
    StylePagePersonContentAvtWrap,
    StylePagePersonContentChangeAvt,
    StylePagePersonContentChangeAvtInput,
    StylePersonalLabelBank,
    StyleUpdateAvatar,
} from "../../personal/component/StylePerson";

export const ImgCustomManagementSection = (props: {
    existedImage?: string | undefined | null;
    avtData: ImageInputData[];
    setAvtData: (imageDatas: ImageInputData[]) => void;
    openImgDialog: (val: boolean) => void;
    index?: number;
    title?: string;
}) => {
    const test = (imageDatas: ImageInputData[]) => {
        props.setAvtData(imageDatas);
    };

    const { onUploadInputChange, onRemoveImageClicked } = useImageUploadInput({
        type: UploadInputType.Single,
        imageDatas: props.avtData,
        onImageDatasChange: test,
    });
    const onOpenImgDialog = () => {
        props.openImgDialog(true);
    };
    const handleRemoveButtonClick = (imageData: ImageInputData) => {
        onRemoveImageClicked(imageData);
    };
    useEffect(() => {
        test(props.avtData || []);
    }, [props.avtData]);

    useEffect(() => {
        if (props.existedImage) {
            const updatedAvtData = [...props.avtData];
            if (updatedAvtData[0]) {
                updatedAvtData[0].urlData = props.existedImage;
            }
            test(updatedAvtData);
        }
    }, [props.existedImage]);
    return (
        <>
            <StylePersonalLabelBank>{props.title || "Banner"}</StylePersonalLabelBank>
            <div>{props.index}</div>
            <Fragment>
                <StylePagePersonContentAvtWrap>
                    <StylePageCustomContent>
                        {props.avtData[0]?.urlData && (
                            <AdminImgDelete onClick={() => handleRemoveButtonClick(props.avtData[0])}>
                                <i
                                    className="fa fa-times"
                                    aria-hidden="true"></i>
                            </AdminImgDelete>
                        )}
                        <StylePagePersonContentAvtImg
                            id="personal_input"
                            alt="err"
                            src={
                                (props.avtData[0]?.urlData || "./static/img/profile-circle.png") as any
                            }></StylePagePersonContentAvtImg>
                    </StylePageCustomContent>
                    <StylePagePersonContentChangeAvt htmlFor={"personal_change_avatar" + props.index}>
                        <StyleUpdateAvatar src="./static/img/personUpdateIcon.jpg" />
                        <StylePagePersonContentChangeAvtInput
                            type={"file"}
                            onChange={onUploadInputChange}
                            accept="image/*"
                            id={"personal_change_avatar" + props.index}
                        />
                    </StylePagePersonContentChangeAvt>
                </StylePagePersonContentAvtWrap>
            </Fragment>
        </>
    );
};

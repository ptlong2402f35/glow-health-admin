import React, { useEffect, useRef, useState } from "react";
import {
    UserFormServiceButtonClose,
    UserFormServiceButtonCreated,
} from "../../adminProductManagement/styled/ProductManagementStyle";
import DialogWrap from "../../../controls/components/dialogWrap/DialogWrap";
import { ImageInputData, convertUrlsToImageDatas } from "../../../hooks/useImageUploadInput";
import AdminAddCustomLink from "./CustomForm";
import useCreatedCustomLink from "../hook/useAddCustomLink";

export default function DialogAddCustom(props: {
    openAddVoucherDialog: boolean;
    setOpenAddVoucherDialog: (value: boolean) => void;
    reload: () => void;
}) {
    const [isSaving, setIsSaving] = useState(false);
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [ogTitle, setOgTitle] = useState("");
    const [ogDescription, setOgDescription] = useState("");
    const [ogImage, setOgImage] = useState<ImageInputData[]>(convertUrlsToImageDatas([""]));
    const [ogType, setOgType] = useState("");
    const [ogUrl, setOgUrl] = useState("");

    const [canonical, setCanonical] = useState("");
    const [hreflang, setHreflang] = useState("");
    const [structuredData, setStructuredData] = useState("");
    const [originalLink, setOriginalLink] = useState("");
    const [newLink, setNewLink] = useState("");
    const [h1Custom, setH1Custom] = useState("");
    const {createdCustomLink} = useCreatedCustomLink({reload: props.reload, setOpenAddVoucherDialog: props.setOpenAddVoucherDialog})


    const handleSave = async () => {
        setIsSaving(true);
        await createdCustomLink(name,title, description,ogTitle, ogDescription, ogImage[0], ogType,ogUrl,canonical, hreflang, structuredData,originalLink, newLink, h1Custom );
        setIsSaving(false);
    };

    const handleClose = () => {
        props.setOpenAddVoucherDialog(false);
    };
    useEffect(() => {
        setName("");
        setTitle("");
        setDescription("");
        setOgImage(convertUrlsToImageDatas([""]));
        setOgType("");
        setOgUrl("");
        setCanonical("");
        setHreflang("");
        setStructuredData("");
        setOriginalLink("");
        setNewLink("");
        setOgTitle("");
        setOgDescription("");
        setH1Custom("")
    }, [props.openAddVoucherDialog ]);

    return (
        <DialogWrap
            disableEnforceFocus={true}
            open={props.openAddVoucherDialog}
            onClose={(e, reason) => {
                if (reason !== "backdropClick") {
                    handleClose();
                }
            }}
            title="Thêm mới Custom Link"
            actions={
                <>
                    <UserFormServiceButtonClose onClick={handleClose}>Hủy</UserFormServiceButtonClose>
                    <UserFormServiceButtonCreated
                        onClick={handleSave}
                        disabled={isSaving}>
                        {" "}
                        {isSaving ? "Đang lưu..." : "Lưu"}
                    </UserFormServiceButtonCreated>
                </>
            }>
            <AdminAddCustomLink
                name={name}
                setName={setName}
                title={title}
                setTitle={setTitle}
                description={description}
                setDescription={setDescription}
                ogImage={ogImage}
                setOgImage={setOgImage}
                ogType={ogType}
                setOgType={setOgType}
                ogUrl={ogUrl}
                setOgUrl={setOgUrl}
                canonical={canonical}
                setCanonical={setCanonical}
                hreflang={hreflang}
                setHreflang={setHreflang}
                structuredData={structuredData}
                setStructuredData={setStructuredData}
                originalLink={originalLink}
                setOriginalLink={setOriginalLink}
                newLink={newLink}
                setNewLink={setNewLink}
                ogTitle={ogTitle}
                setOgTitle={setOgTitle}
                ogDescription={ogDescription}
                setOgDescription={setOgDescription}
                h1Custom={h1Custom}
                setH1Custom={setH1Custom}
            />
            <></>
        </DialogWrap>
    );
}

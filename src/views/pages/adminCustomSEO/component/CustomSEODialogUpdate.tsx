import React, { useEffect, useRef, useState } from "react";
import {
    UserFormServiceButtonClose,
    UserFormServiceButtonCreated,
} from "../../adminProductManagement/styled/ProductManagementStyle";
import DialogWrap from "../../../controls/components/dialogWrap/DialogWrap";
import { ImageInputData, convertUrlsToImageDatas } from "../../../hooks/useImageUploadInput";
import AdminAddCustomLink from "./CustomForm";
import useCreatedCustomLink from "../hook/useAddCustomLink";
import MetaLoader from "../../../../models/MetaLoader";
import useUpdateCustomLink from "../hook/useUpdateCustomLink";

export default function DialogUpdateCustom(props: {
    openUpdateCustomDialog: boolean;
    setOpenUpdateCustomDialog: (value: boolean) => void;
    reload: () => void;
    val?: MetaLoader;
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
    const {doUpdate} = useUpdateCustomLink({reload: props.reload, setOpenUpdateCustomDialog: props.setOpenUpdateCustomDialog})


    const handleSave = async () => {
        setIsSaving(true);
        await doUpdate(props.val?.id || '0' ,name,title, description,ogTitle, ogDescription, ogImage[0], ogType,ogUrl,canonical, hreflang, structuredData,originalLink, newLink,h1Custom );
        setIsSaving(false);
    };

    const handleClose = () => {
        props.setOpenUpdateCustomDialog(false);
    };
    useEffect(() => {
        setName(props.val?.name || "");
        setTitle(props.val?.title ||"");
        setDescription(props.val?.description ||"");
        setOgImage(convertUrlsToImageDatas([props.val?.ogImage ||""]));
        setOgType(props.val?.ogType ||"");
        setOgUrl(props.val?.ogUrl ||"");
        setCanonical(props.val?.canonical ||"");
        setHreflang(typeof props.val?.hreflang === "object" ? JSON.stringify(props.val.hreflang) : props.val?.hreflang || "");
        setStructuredData(typeof props.val?.structuredData === "object" ? JSON.stringify(props.val.structuredData) : props.val?.structuredData || "");   
        setOriginalLink(props.val?.originalLink ||"");
        setNewLink(props.val?.newLink ||"");
        setH1Custom(props.val?.h1Content || "")
        setOgTitle(props.val?.ogTitle||"");
        setOgDescription(props.val?.ogDescription||"");
    }, [props.openUpdateCustomDialog ]);

    return (
        <DialogWrap
            disableEnforceFocus={true}
            open={props.openUpdateCustomDialog}
            onClose={(e, reason) => {
                if (reason !== "backdropClick") {
                    handleClose();
                }
            }}
            title="Sửa Custom Link"
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

import React, { useEffect, useState } from "react";
import {
    AdminProductDialogInputInner,
    UserFormServiceButtonClose,
    UserFormServiceButtonCreated,
} from "../../adminProductManagement/styled/ProductManagementStyle";
import DialogWrap from "../../../controls/components/dialogWrap/DialogWrap";
import { StylePagePersonContentInput, StylePagePersonContentTextArea, StylePersonalLabelBank } from "../../personal/component/StylePerson";

import { ImageInputData } from "../../../hooks/useImageUploadInput";
import { AvtUserManagementSection } from "../../adminBlogManagement/component/ImageBannerBlog";
import { ImgCustomManagementSection } from "./ImageCustom";

export default function AdminAddCustomLink(props: {
    name: string;
    setName: (val: string) => void;
    title: string;
    setTitle: (val: string) => void;
    description: string;
    setDescription: (val: string) => void;
    ogImage: ImageInputData[]
    setOgImage: (val: ImageInputData[]) => void;
    ogType: string;
    setOgType: (val: string) => void;
    ogUrl: string;
    setOgUrl: (val: string) => void;
    canonical: string;
    setCanonical: (val: string) => void;
    hreflang: string;
    setHreflang: (val: string) => void;
    structuredData: string;
    setStructuredData: (val: string) => void;
    originalLink: string;
    setOriginalLink: (val: string) => void;
    newLink: string;
    setNewLink: (val: string) => void;
    ogTitle: string;
    setOgTitle: (val: string) => void;
    ogDescription: string;
    setOgDescription: (val: string) => void;
    h1Custom: string;
    setH1Custom: (val: string) => void;
}) {
    const [openImgDialog, setOpenImgDialog] = useState(false);
    return (
        <>
        <InputCustom
                title="H1"
                value={props.h1Custom}
                setValue={props.setH1Custom}
            />
            <InputCustom
                title="Tên"
                value={props.name}
                setValue={props.setName}
            />
            <InputCustom
                title="Title"
                value={props.title}
                setValue={props.setTitle}
            />
             <InputCustom
                title="Description"
                value={props.description}
                setValue={props.setDescription}
            />
             <InputCustom
                title="ogTitle"
                value={props.ogTitle}
                setValue={props.setOgTitle}
            />
             <InputCustom
                title="ogDescription"
                value={props.ogDescription}
                setValue={props.setOgDescription}
            />
             <ImgCustomManagementSection
                title="ogImage"
                avtData={props.ogImage}
                setAvtData={props.setOgImage}
                openImgDialog={setOpenImgDialog}
            />
            
             <InputCustom
                title="ogType"
                value={props.ogType}
                setValue={props.setOgType}
            />
             <InputCustom
                title="ogUrl"
                value={props.ogUrl}
                setValue={props.setOgUrl}
            />
             <InputCustom
                title="canonical"
                value={props.canonical}
                setValue={props.setCanonical}
            />
             <TextAreaCustom
                title="hreflang"
                value={props.hreflang}
                setValue={props.setHreflang}
            />
             <TextAreaCustom
                title="structuredData"
                value={props.structuredData}
                setValue={props.setStructuredData}
            />
             <InputCustom
                title="originalLink"
                value={props.originalLink}
                setValue={props.setOriginalLink}
            />
             <InputCustom
                title="newLink"
                value={props.newLink}
                setValue={props.setNewLink}
            />
        </>
    );
}

export function InputCustom(props: { title: string; value: string; setValue: (value: string) => void }) {
    return (
        <AdminProductDialogInputInner>
            <StylePersonalLabelBank>{props.title}</StylePersonalLabelBank>
            <StylePagePersonContentInput
                value={props.value}
                onChange={(e) => props.setValue(e.target.value)}
            />
        </AdminProductDialogInputInner>
    );
}

export function TextAreaCustom(props: { title: string; value: string; setValue: (value: string) => void }) {
    return (
        <AdminProductDialogInputInner>
            <StylePersonalLabelBank>{props.title}</StylePersonalLabelBank>
            <StylePagePersonContentTextArea
                value={props.value}
                onChange={(e) => props.setValue(e.target.value)}
            />
        </AdminProductDialogInputInner>
    );
}




import React from "react";
import {
    PolicyBody,
    PolicyBodyCSTitle,
    PolicyBodyDateSubTitle,
    PolicyBodyDateSubTitle2,
    PolicyCSSubTitle,
    PolicyContainer,
    PolicyMainInner,
    PolicyMainTitle,
    PolicyTextBody,
    PolicyTextBodydiv,
    PolicyTextBodyp,
    PolicyTextBodyp0,
} from "../policy/styled/StyledPolicy";
import { TranslateLabels, useLanguage } from "../../controls/layout/content/MultiLanguge";
import { ContentInnerFilter, ContentRegulation } from "../Content/styled/ContentStyle";
import { RegulationContent } from "./RegulationContent";
import useStaticContext from "../../hooks/useStaticContext";

export default function RegulationMainv2() {
    const { lang } = useLanguage();
    const { staticContext } = useStaticContext();



    return (
        <PolicyMainInner>
            <PolicyMainTitle>{staticContext?.data?.h1Content ||TranslateLabels[lang]?.REGULATION_TITLE} </PolicyMainTitle>
            <PolicyContainer>
           <ContentRegulation
                        isExpanded={true}
                        dangerouslySetInnerHTML={{ __html: RegulationContent || "" }}
                    />
            </PolicyContainer>
        </PolicyMainInner>
    );
}


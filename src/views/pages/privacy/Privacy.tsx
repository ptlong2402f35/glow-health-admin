import React, { useEffect } from "react";
import {
	PageWrap,
	PageCenter,
	PageInner,
	PageTitle,
	PageTitleInner,
	PageBody,
	PageBodyInner,
} from "../../controls/components/form/Page";
import {
	PageStaticBackBtn,
	PageStaticBackContain,
	PageStaticBackIcon,
	PageStaticBackWrap,
	StaticPageBody,
	StaticPagePanel,
	StaticPageTitle,
	StaticPageTitleInner,
} from "./StyledPrivacy";
import axios from "axios";

export default function Privacy() {
	useEffect(() => {
		axios.get("./static/privacy/privacy.txt").then((res) => {
			const staticContent = document.getElementById("static-privacy");
			if (staticContent) staticContent.innerHTML = res.data;
		});
	}, []);
	return (
		<PageWrap $transparentResp={true}>
			<PageCenter>
				<PageStaticBackWrap>
					<PageStaticBackContain to="/">
						<PageStaticBackIcon />
						<PageStaticBackBtn>Back</PageStaticBackBtn>
					</PageStaticBackContain>
				</PageStaticBackWrap>
				<StaticPageBody>
					<StaticPageTitle>
						<StaticPageTitleInner>Chính sách bảo mật</StaticPageTitleInner>
					</StaticPageTitle>

					<StaticPagePanel id="static-privacy"></StaticPagePanel>
				</StaticPageBody>
			</PageCenter>
		</PageWrap>
	);
}

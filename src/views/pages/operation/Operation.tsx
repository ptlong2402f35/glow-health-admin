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
} from "../privacy/StyledPrivacy";
import axios from "axios";

export default function Operation() {
	//useHTMLfile
	useEffect(() => {
		axios.get("./static/operation/operation.txt").then((res) => {
			const contentElement = document.getElementById("static-operation");
			if (contentElement && res.data) contentElement.innerHTML = res.data;
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
						<StaticPageTitleInner>Điều khoản dịch vụ</StaticPageTitleInner>
					</StaticPageTitle>

					<StaticPagePanel id="static-operation"></StaticPagePanel>
				</StaticPageBody>
			</PageCenter>
		</PageWrap>
	);
}

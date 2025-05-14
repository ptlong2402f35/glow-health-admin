import React, { useEffect, useState } from "react";
import { DialogWrapMedium, DialogWrapSmall } from "../../../controls/components/dialogWrap/DialogWrap";
import { VoucherUser } from "../../../../models/UserGlow";
import moment from "moment";

import { formatPrice } from "../../home/HomePageNew/DealHotHomePage";
import Orderv2, { OrderStatusLabelMapv3, OrderStatusv2 } from "../../../../models/Orderv2";
import { StaffInfoAutoPlayImgCheckBigSize } from "../../home/styled/HomeStyles";
import {
	SupportUserInfoContact,
	SupportUserInfoContactInner,
	SupportUserInfoContactInnerImg,
	SupportUserInfoContactInnerName,
	SupportUserInfoContactInnerv2,
	SupportUserInfoName,
	SupportUserInfoWrap,
	SupportUserQR,
	SupportUserQRWrap,
	SupportUserWrap,
} from "../styled/StyledVoucher";
import { TranslateLabels, useLanguage } from "../../../controls/layout/content/MultiLanguge";

export default function DialogSupportUser(props: { isDialogOpen: boolean; setIsDialogOpen: (val: boolean) => void }) {
	const { lang } = useLanguage();
	return (
		<DialogWrapMedium
			disableEnforceFocus={true}
			open={props.isDialogOpen || false}
			onClose={() => {
				props.setIsDialogOpen(false);
			}}
			center={true}
			hideFooter={true}
			title={TranslateLabels[lang]?.LOGIN_SUPPORT}>
			<SupportUserWrap>
				<SupportUserQRWrap>
					<SupportUserQR src="/static/img/Support.png" />
				</SupportUserQRWrap>
				<SupportUserInfoWrap>
					<SupportUserInfoName>{TranslateLabels[lang]?.LOGIN_INFO_CALL}</SupportUserInfoName>
					<SupportUserInfoContact>
						<SupportUserInfoContactInner>
							<SupportUserInfoContactInnerImg src="/static/img/kakao-talk.png" />
							<SupportUserInfoContactInnerName>KakaoTalk ID: glow.app</SupportUserInfoContactInnerName>
						</SupportUserInfoContactInner>

						<SupportUserInfoContactInnerv2>
							<SupportUserInfoContactInnerImg src="/static/img/line.png" />
							<SupportUserInfoContactInnerName>Line ID: glow.app</SupportUserInfoContactInnerName>
						</SupportUserInfoContactInnerv2>

						<SupportUserInfoContactInnerv2>
							<SupportUserInfoContactInnerImg src="/static/img/calling.png" />
							<SupportUserInfoContactInnerName>Hotline: 0888129100</SupportUserInfoContactInnerName>
						</SupportUserInfoContactInnerv2>
					</SupportUserInfoContact>
				</SupportUserInfoWrap>
			</SupportUserWrap>
		</DialogWrapMedium>
	);
}

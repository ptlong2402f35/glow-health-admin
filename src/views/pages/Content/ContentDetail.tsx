import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ContentFilterWrap, ContentInnerFilter, ContentInnerSeeMore } from "./styled/ContentStyle";
import { BlogDetailContentInner } from "../blog/styled/blogStyled";
import { LabelData } from "../../../models/Staff";

export default function ContentDetail(props: { labelData?: LabelData | null; name?: string | null | undefined }) {
	let { lang } = useParams<{ lang: string }>();
	const [isExpanded, setIsExpanded] = useState(true);
	const provinceName = props.labelData?.province?.name || "";
	const districtName = props.labelData?.district?.name || "";
	const contentVi = `<p dir=\"ltr\">Kỹ thuật vi&ecirc;n ${
		props.name || ""
	} massage tại nh&agrave; ${provinceName} đ&atilde; đăng k&yacute; t&igrave;m việc tr&ecirc;n App Glow v&agrave; mong muốn được nhiều việc l&agrave;m massage v&agrave; spa từ kh&aacute;ch h&agrave;ng tại th&agrave;nh phố ${provinceName}, quận ${districtName}.</p>\n<p dir=\"ltr\"><br>Ti&ecirc;u ch&iacute; tuyển dụng nh&acirc;n vi&ecirc;n spa, massage body tại nh&agrave;, căn hộ, kh&aacute;ch sạn của Glow l&agrave; đ&uacute;ng người, đ&uacute;ng việc, kh&ocirc;ng cần ngoại h&igrave;nh; bất kể l&agrave; kỹ thuật vi&ecirc;n nam hay nữ, c&oacute; kinh nghiệm hay kh&ocirc;ng c&oacute; kinh nghiệm (sẽ được đ&agrave;o tạo). <a href=\"https://glowvietnam.com/blog/glow-care-la-gi-56\">Glow Care</a> đảm bảo việc massage phục vụ tận nơi theo y&ecirc;u cầu trở n&ecirc;n an to&agrave;n hơn: ho&agrave;n tiền nếu kh&ocirc;ng đ&uacute;ng ktv massage tại nh&agrave; ${
		props.name || ""
	} v&agrave; bồi thường nếu kh&ocirc;ng đ&uacute;ng dịch vụ.</p>`;

	const contentEN = `<p dir=\"ltr\">Therapist ${
		props.name || ""
	} home massage technician ${provinceName} has registered as a partner on Glow and is ready to delivery massage to customers in ${provinceName}, ${districtName} district.</p>\n<br/><p dir=\"ltr\">Glow's criteria for recruiting spa and massage staff at home, apartments, and hotels is the right person, the right job; regardless of whether the technician is male or female, experienced or inexperienced. <a href=\"https://glowvietnam.com/blog/glow-care-la-gi-56\">Glow Care</a> ensures that on-site massage on request becomes safer: refund if the technician is not ${
		props.name || ""
	} and compensation if the service is not right.</p>`;

	const contentKR = `<p dir=\"ltr\">${
		props.name || ""
	} 홈 마사지 기술자 ${provinceName}는 Glow의 파트너로 등록되었으며 ${districtName} 지역 ${provinceName}시 고객으로부터 더 많은 일자리를 얻기를 희망합니다.</p>\n<p dir=\"ltr\"><br>집, 아파트, 호텔에서 스파 및 마사지 직원을 채용하는 Glow의 기준은 적합한 사람, 적합한 직업입니다. 기술자가 남성이든 여성이든, 경험이 있든 없든 상관없습니다. <a href=\"https://glowvietnam.com/kr/blog/glow-care-la-gi-56\">Glow Care</a>는 주문형 마사지를 더욱 안전하게 만들어줍니다. 기술자가 ${
		props.name || ""
	} 정확하지 않으면 환불하고 서비스가 정확하지 않으면 보상합니다.</p>`;
	const content = lang === "en" ? contentEN : lang === "kr" ? contentKR : contentVi;

	return (
		<ContentFilterWrap>
			<ContentInnerFilter
				isExpanded={isExpanded}
				dangerouslySetInnerHTML={{ __html: content || "" }}
			/>
			{/* <ContentInnerSeeMore onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? "Thu gọn" : "Xem thêm"}</ContentInnerSeeMore> */}
		</ContentFilterWrap>
	);
}

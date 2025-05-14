import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ContentFilterWrap, ContentInnerFilter, ContentInnerSeeMore } from "./styled/ContentStyle";
import { BlogDetailContentInner } from "../blog/styled/blogStyled";
import { LabelData } from "../../../models/Staff";

export default function ContentFilter(props: { labelData?: LabelData }) {
	let { lang,link } = useParams<{ lang: string, link: string }>();
	const [isExpanded, setIsExpanded] = useState(true);
	const provinceName =
		props.labelData?.apartment?.name ||
		props.labelData?.commune?.name ||
		props.labelData?.district?.name ||
		props.labelData?.province?.name ||
		"";
	const contentVi = `<p dir=\"ltr\">Dịch vụ massage tại nh&agrave;, căn hộ, kh&aacute;ch sạn, nh&agrave; nghỉ ${provinceName} đang được y&ecirc;u th&iacute;ch h&agrave;ng đầu cho những ai c&oacute; cuộc sống bận rộn, muốn tiết kiệm thời gian di chuyển nhưng vẫn được tận hưởng massage thư gi&atilde;n. Massage tại nh&agrave; ${provinceName} c&ograve;n được gọi l&agrave; Matxa tại nh&agrave; ${provinceName}, massage tận nơi ${provinceName} được coi như l&agrave; một Spa di động giữa l&ograve;ng khu vực ${provinceName} đ&ocirc;ng đ&uacute;c v&agrave; n&aacute;o nhiệt.</p>\n<p dir=\"ltr\">&nbsp;</p>\n<p dir=\"ltr\">Ứng dụng Glow cam kết sẽ đem lại cho bạn dịch vụ Massage tại nh&agrave; ${provinceName} theo y&ecirc;u cầu 24/24, nh&acirc;n vi&ecirc;n phục vụ tận nơi, tốt nhất, gi&aacute; rẻ nhất, vip nhất, uy t&iacute;n nhất với đa dạng dịch vụ như bấm huyệt, gi&aacute;c hơi, cạo gi&oacute;, đ&aacute;nh cảm, massage body, đ&aacute; n&oacute;ng, lấy r&aacute;y tai.</p>\n<h2 dir=\"ltr\">Tải App Glow để xem ktv v&agrave; đặt massage tại nh&agrave; ${provinceName}</h2>\n<ul>\n<li dir=\"ltr\" aria-level=\"1\">\n<p dir=\"ltr\" role=\"presentation\">App massage tại nh&agrave;: <a href=\"https://onelink.to/mz7nfw\">https://onelink.to/mz7nfw</a></p>\n</li>\n<li dir=\"ltr\" aria-level=\"1\">\n<p dir=\"ltr\" role=\"presentation\">Số điện thoại massage tại nh&agrave;: +84888129100</p>\n</li>\n</ul>\n<p dir=\"ltr\"><a href=\"https://glowvietnam.com/blog/cach-dat-don-massage-tai-nha-tren-ung-dung-glow-15\">C&aacute;ch đặt đơn massage tại nh&agrave; tr&ecirc;n ứng dụng Glow</a></p>\n<p dir=\"ltr\">&nbsp;</p>`;

	const contentEN = `<p dir=\"ltr\">${provinceName} home, hotel, room, massage service is the top favorite for those who have a busy life, want to save travel time but still enjoy a relaxing massage. Massage at home ${provinceName} is also known as ${provinceName} home massage, ${provinceName} on-site massage or ${provinceName} outcall massage is considered a mobile massage &amp; spa in the heart of the crowded and bustling ${provinceName} area.</p>\n<p dir=\"ltr\">Glow mobile app is committed to delivery you the best therapist, cheapest, fastest, most reputable ${provinceName} home massage experience on demand with a variety of services such as acupressure, cupping, scraping, foot massage, body massage, face massage, swedish massage, hot stone, earwax removal. In Glow, the male and female therapists have vivid images and reviews.</p>\n<h2 dir=\"ltr\">Get the Glow app to order a happy massage at home ${provinceName} near me</h2>\n<ul>\n<li dir=\"ltr\" aria-level=\"1\">\n<p dir=\"ltr\" role=\"presentation\">Mobile app massage at home: <a href=\"https://onelink.to/mz7nfw\">https://onelink.to/mz7nfw</a>&nbsp;</p>\n</li>\n<li dir=\"ltr\" aria-level=\"1\">\n<p dir=\"ltr\" role=\"presentation\">Phone number / Hotline: +84888129100</p>\n</li>\n</ul>\n<p dir=\"ltr\"><a href=\"https://glowvietnam.com/en/blog/how-to-order-a-massage-at-home-on-the-glow-app-15\">How to order a massage at home on the Glow app</a></p>\n<p dir=\"ltr\">&nbsp;</p>`;

	const contentKR = `<p dir=\"ltr\">${provinceName} 출장마사지 는 바쁜 삶을 살고 이동 시간을 절약하면서도 스파 시설에서와 같이 편안한 마사지를 즐기고 싶은 사람들에게 가장 인기 있는 곳입니다. ${provinceName} 출장마사지 는 홈, 아파트, 호텔, 모텔 마사지 서비스, ${provinceName} 온사이트 마사지 또는 ${provinceName} 아웃콜 마사지로도 알려져 있으며, 붐비고 번잡한 ${provinceName} 지역의 중심부에 있는 모바일 스파로 간주됩니다.</p>\n<p dir=\"ltr\">Glow 모바일 앱은 침술, 흡입, 스크래핑, 느낌, 바디 마사지, 핫스톤과 같은 다양한 서비스를 통해 최고의, 가장 저렴하고, 가장 빠르고, 가장 평판이 좋은 ${provinceName} 홈 마사지 경험을 주문형으로 제공하기 위해 최선을 다하고 있습니다. 귀청소, 스웨디시. Glow에서 소녀들은 선명한 이미지와 후기를 가지고 있습니다. ${provinceName} 이발소와 ${provinceName} 미딩마사지에서도 예약이 가능합니다.</p>\n<h2 dir=\"ltr\">${provinceName}에서 집에서 마사지를 예약하려면 Glow 앱을 다운로드하세요.</h2>\n<ul>\n<li dir=\"ltr\" aria-level=\"1\">\n<p dir=\"ltr\" role=\"presentation\">베트남 마사지 어플: <a href=\"https://onelink.to/mz7nfw\">https://onelink.to/mz7nfw</a></p>\n</li>\n<li dir=\"ltr\" aria-level=\"1\">\n<p dir=\"ltr\" role=\"presentation\">카톡/잘로: +84888129100</p>\n</li>\n</ul>\n<p dir=\"ltr\"><a href=\"https://glowvietnam.com/kr/blog/glow-15\">Glow 앱으로 집에서 마사지를 주문하는 방법</a></p>\n<p dir=\"ltr\">&nbsp;</p>`;
	
	const contenteArwaxVi = `<p dir=\"ltr\">Dịch vụ lấy r&aacute;y tai ${provinceName} tại nh&agrave; đang được y&ecirc;u th&iacute;ch h&agrave;ng đầu cho những ai c&oacute; cuộc sống bận rộn, muốn tiết kiệm thời gian di chuyển nhưng vẫn được tận hưởng lấy r&aacute;y tai ${provinceName} thư gi&atilde;n, uy t&iacute;n v&agrave; chuy&ecirc;n nghiệp.</p>\n<p dir=\"ltr\">&nbsp;</p>\n<p dir=\"ltr\">Ứng dụng Glow cam kết sẽ đem lại cho bạn dịch vụ Lấy r&aacute;y tai ${provinceName} tại nh&agrave; theo y&ecirc;u cầu 24/24, nh&acirc;n vi&ecirc;n phục vụ tận nơi, tốt nhất, gi&aacute; rẻ nhất, vip nhất, uy t&iacute;n nhất với đa dạng dịch vụ như se l&ocirc;ng, cạo l&ocirc;ng, wax l&ocirc;ng, massage kết hợp lấy r&aacute;y tai trung hoa.</p>\n<h2 dir=\"ltr\">Tải App Glow để xem ktv v&agrave; đặt lấy r&aacute;y tai ${provinceName}</h2>\n<ul>\n<li dir=\"ltr\" aria-level=\"1\">\n<p dir=\"ltr\" role=\"presentation\">Tải ứng dụng điện thoại: <a href=\"https://onelink.to/mz7nfw\">https://onelink.to/mz7nfw</a></p>\n</li>\n<li dir=\"ltr\" aria-level=\"1\">\n<p dir=\"ltr\" role=\"presentation\">Hotline: +84888129100</p>\n</li>\n</ul>\n<h1 dir=\"ltr\">&nbsp;</h1>\n<p dir=\"ltr\">&nbsp;</p>`;

	const contentArwaxEN = `<p dir=\"ltr\">${provinceName} earwax removal service at home is the top favorite for those who have a busy life, want to save travel time but still enjoy relaxing, reputable and professional ${provinceName} earwax removal.</p>\n<p dir=\"ltr\">Glow application is committed to bringing you ${provinceName} earwax removal service at home on request 24/7, on-site service staff, the best, cheapest, most VIP, most reputable with a variety of services such as threading, shaving, waxing, massage combined with earwax removal.</p>\n<h2 dir=\"ltr\">Get the Glow app to order earwax removal ${provinceName}</h2>\n<ul>\n<li dir=\"ltr\" aria-level=\"1\">\n<p dir=\"ltr\" role=\"presentation\">Mobile app download: <a href=\"https://onelink.to/mz7nfw\">https://onelink.to/mz7nfw</a>&nbsp;</p>\n</li>\n<li dir=\"ltr\" aria-level=\"1\">\n<p dir=\"ltr\" role=\"presentation\">Phone number / Hotline: +84888129100</p>\n</li>\n</ul>\n<p dir=\"ltr\">&nbsp;</p>`;

	const contentArwaxKR = `<p dir=\"ltr\">${provinceName} 재택 귀지 제거 서비스는 이동 시간을 절약하면서도 편안하고 평판이 좋으며 전문적인 ${provinceName} 귀지 제거를 즐기고 싶은 바쁜 생활을 하는 사람들에게 가장 인기 있는 서비스입니다.</p>\n<p dir=\"ltr\">Glow 응용 프로그램은 요청 시 연중무휴 24시간 집에서 ${provinceName} 귀지 제거 서비스를 제공하기 위해 최선을 다하고 있으며, 현장 서비스 직원, 최고, 저렴, 가장 VIP, 머리 조이기, 면도, 왁싱, 마사지와 같은 다양한 서비스로 가장 권위 있는 서비스를 제공합니다. 귀지 제거와 결합됩니다.</p>\n<h2 dir=\"ltr\">Glow 앱을 받아 귀지 제거를 주문하세요 ${provinceName}</h2>\n<ul>\n<li dir=\"ltr\" aria-level=\"1\">\n<p dir=\"ltr\" role=\"presentation\">모바일 앱 다운로드: <a href=\"https://onelink.to/mz7nfw\">https://onelink.to/mz7nfw</a></p>\n</li>\n<li dir=\"ltr\" aria-level=\"1\">\n<p dir=\"ltr\" role=\"presentation\">카톡/잘로: +84888129100</p>\n</li>\n</ul>\n<p dir=\"ltr\">&nbsp;</p>`;

	const content = lang === "en" ? contentEN : lang === "kr" ? contentKR : contentVi;

	const contentArwax = lang === "en" ? contentArwaxEN : lang === "kr" ? contentArwaxKR : contenteArwaxVi;

	const displayContent =
	link?.includes("massage-tai-nha") ? content : link?.includes("lay-ray-tai-tai-nha") ? contentArwax : "";

	return (
		<ContentFilterWrap>
			<ContentInnerFilter
				isExpanded={isExpanded}
				dangerouslySetInnerHTML={{ __html: displayContent || "" }}
			/>
			{/* <ContentInnerSeeMore onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? "Ẩn" : "Xem thêm"}</ContentInnerSeeMore> */}
		</ContentFilterWrap>
	);
}

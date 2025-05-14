import React, { useState } from "react";
import {
	ButtonFacebook,
	ButtonFacebookWrap,
	ButtonImgFacebook,
	ButtonImgYoutube,
	ButtonYoutube,
	ButtonYoutubeWrap,
	Collapse,
	FooterBottomText,
	FooterBottomWrapper,
	FooterColumDownLoadImg,
	FooterColumIconImg,
	FooterColumInnerOne,
	FooterColumInnerTwo,
	FooterColumText,
	FooterColumTwoImg,
	FooterColumtTextInlineBlock,
	FooterTopColumOne,
	FooterTopColumOneText,
	FooterTopColumThree,
	FooterTopColumTitle,
	FooterTopColumTwo,
	FooterTopColumTwoText,
	FooterTopColumTwoTextFontWeight,
	FooterTopColumTwoTextFontWeight0,
	FooterTopColumTwoTextHead,
	FooterTopWrapper,
	FooterWrapper,
	ImgCollapse,
	StyledFooter,
	StyledFooterCenter,
} from "./StyledFooter";

export default function Footer() {
	const [isOpenOne, setIsOpenOne] = useState(false);
	const [isOpenTwo, setIsOpenTwo] = useState(false);
	const collapseOneClick = () => {
		setIsOpenOne(!isOpenOne);
	};
	const collapseTwoClick = () => {
		setIsOpenTwo(!isOpenTwo);
	};
	return (
		<StyledFooter>
			<StyledFooterCenter>
				<FooterWrapper>
					<FooterTopWrapper>
						<FooterTopColumTwo>
							<FooterTopColumTwoTextHead>
								<FooterTopColumTwoTextFontWeight0>
									Glow là một sản phẩm thuộc hệ sinh thái của công ty Orderdi.
								</FooterTopColumTwoTextFontWeight0>
								{/* <FooterTopColumTwoTextFontWeight0>
									Orderdi Chietkhau hỗ trợ khách hàng tìm kiếm chiết khấu và nhận hoàn tiền khi mua
									sắm tại các sàn thương mại điện tử như Taobao, Tmall, 1688…
								</FooterTopColumTwoTextFontWeight0> */}
							</FooterTopColumTwoTextHead>
							<FooterTopColumTwoText>
								<FooterColumIconImg src="./static/img/tongdai.png" />{" "}
								<FooterTopColumTwoTextFontWeight>
									Hotline: +84 888129100
								</FooterTopColumTwoTextFontWeight>{" "}
							</FooterTopColumTwoText>
							<FooterTopColumTwoText>
								<FooterColumIconImg src="./static/img/email.png" />{" "}
								<FooterTopColumTwoTextFontWeight>
									Email liên hệ: support@glowvietnam.com
								</FooterTopColumTwoTextFontWeight>{" "}
							</FooterTopColumTwoText>
							<FooterTopColumTwoText>
								<FooterColumIconImg src="./static/img/trusochinh.png" />{" "}
								<FooterTopColumTwoTextFontWeight>
									Địa chỉ: Tầng 14, 169 Nguyễn Ngọc Vũ, Trung Hòa, Cầu Giấy, Hà Nội
								</FooterTopColumTwoTextFontWeight>
							</FooterTopColumTwoText>
							<FooterTopColumTwoText>Mã số doanh nghiệp: 0110124791</FooterTopColumTwoText>
							<FooterTopColumTwoText>© 2022 BK Viet Nam Technology, JSC.</FooterTopColumTwoText>
							<FooterTopColumThree>
								<FooterTopColumTwoTextFontWeight>Theo dõi chúng tôi</FooterTopColumTwoTextFontWeight>{" "}
								<ButtonFacebook
									href="https://www.facebook.com/Glowapp2022"
									target="_blank">
									<ButtonFacebookWrap>
										<ButtonImgFacebook src="static/img/facebook.png" />
									</ButtonFacebookWrap>
								</ButtonFacebook>
								<ButtonYoutube
									href="https://www.youtube.com/channel/UCAds9A9CaxWlAmaok9FrvWw"
									target="_blank">
									<ButtonYoutubeWrap>
										<ButtonImgYoutube src="static/img/youtube.png" />
									</ButtonYoutubeWrap>
								</ButtonYoutube>
							</FooterTopColumThree>
						</FooterTopColumTwo>
						<FooterTopColumOne>
							<FooterTopColumTitle onClick={collapseTwoClick}>
								Hỗ trợ khách hàng
								<Collapse onClick={collapseTwoClick}>
									{!isOpenTwo ? (
										<ImgCollapse src={"./static/img/plus.png"}></ImgCollapse>
									) : (
										<ImgCollapse src={"./static/img/minus.png"}></ImgCollapse>
									)}
								</Collapse>
							</FooterTopColumTitle>
							<FooterColumInnerTwo isOpen={isOpenTwo}>
								<FooterTopColumOneText to="/privacy">Chính sách bảo mật</FooterTopColumOneText>
								<FooterTopColumOneText to="/operation">Điều khoản dịch vụ</FooterTopColumOneText>
								<FooterTopColumOneText to="/regulation">Quy chế hoạt động</FooterTopColumOneText>
								<FooterTopColumOneText to="/#home-download">Tải app</FooterTopColumOneText>
								<FooterColumDownLoadImg src="./static/img/ggplay.png" />
								<FooterColumDownLoadImg src="./static/img/appstorev2.png" />
							</FooterColumInnerTwo>
						</FooterTopColumOne>
					</FooterTopWrapper>
					{/* <FooterBottomWrapper>
						<FooterBottomText>© 2021 - Bản quyền thuộc về Công ty cổ phần Orderdi</FooterBottomText>
						<FooterBottomText>
							Mã số doanh nghiệp: 0109548080 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp ngày 11/03/2021
						</FooterBottomText>
						<FooterBottomText>Version: v1.0.10.20230423</FooterBottomText>
					</FooterBottomWrapper> */}
				</FooterWrapper>
			</StyledFooterCenter>
		</StyledFooter>
	);
}

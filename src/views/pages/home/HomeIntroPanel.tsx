import React from "react";
import {
	HomeIntroPanelAction,
	HomeIntroPanelCenter,
	HomeIntroPanelInner,
	HomeIntroPanelLeft,
	HomeIntroPanelLeftInner,
	HomeIntroPanelRight,
	HomeIntroPanelRightActions,
	HomeIntroPanelRightActionsWrap,
	HomeIntroPanelRightInner,
	HomeIntroPanelRightText1,
	HomeIntroPanelRightText2,
	HomeIntroPanelRightText3,
	HomeIntroPanelWrap,
	Pindoudou,
	Text1688,
	TextTaobao,
	Textpercent,
} from "./styled/HomeStyles";

export default function HomeIntroPanel() {
	return (
		<HomeIntroPanelWrap id="home-download">
			<HomeIntroPanelCenter>
				<HomeIntroPanelInner className="clearfix">
					<HomeIntroPanelAction>
						<a
							href="https://play.google.com/store/apps/details?id=com.glow.mobileApp&pli=1"
							target="_blank">
							<img src="./static/img/ggplay.png" />
						</a>
						<a
							href="https://apps.apple.com/vn/app/glow/id6443428819?l=vi"
							target="_blank">
							<img src="./static/img/appstorev2.png" />
						</a>
					</HomeIntroPanelAction>
					<HomeIntroPanelRightActions></HomeIntroPanelRightActions>
					<HomeIntroPanelLeftInner>
						<img src="./static/img/banner-left.jpg" />
						<img src="./static/img/banner-right.jpg" />
					</HomeIntroPanelLeftInner>
					<HomeIntroPanelRight>
						<HomeIntroPanelRightInner>
							{/* <HomeIntroPanelRightText1>Tải App Ngay</HomeIntroPanelRightText1>
							<HomeIntroPanelRightText2>
								Dưỡng sức khỏe chăm tinh thần mọi lúc mọi nơi{" "}
							</HomeIntroPanelRightText2> */}
							{/* <HomeIntroPanelRightText2>
								<TextTaobao> Taobao</TextTaobao>,<Pindoudou> Tmall</Pindoudou>,
								<Text1688> 1688</Text1688>
							</HomeIntroPanelRightText2> */}
							<HomeIntroPanelRightActionsWrap></HomeIntroPanelRightActionsWrap>
						</HomeIntroPanelRightInner>
					</HomeIntroPanelRight>
				</HomeIntroPanelInner>
			</HomeIntroPanelCenter>
		</HomeIntroPanelWrap>
	);
}

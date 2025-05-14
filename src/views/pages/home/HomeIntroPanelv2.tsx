import React from "react";
import {
	HomeIntroPanelTitle2,
	HomeIntroPanelTitle,
	HomeIntroPanelInnerv2,
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

export default function HomeIntroPanelv2() {
	return (
		<HomeIntroPanelWrap>
			<HomeIntroPanelCenter>
				<HomeIntroPanelInnerv2 className="clearfix">
					<img src="./static/img/GlowLogo.png" />
					<HomeIntroPanelTitle>Glow</HomeIntroPanelTitle>
					<HomeIntroPanelTitle2>Dưỡng sức khỏe chăm tinh thần mọi lúc mọi nơi</HomeIntroPanelTitle2>
				</HomeIntroPanelInnerv2>
			</HomeIntroPanelCenter>
		</HomeIntroPanelWrap>
	);
}

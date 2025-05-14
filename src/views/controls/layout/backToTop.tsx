import React from "react";
import { StyleBackToTop, StyleBackToTopDiv } from "./StyledLayoutWrap";

function backToTopClick() {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}
export default function BackToTop() {
	return (
		<StyleBackToTopDiv
			dangerouslySetInnerHTML={{
				__html: `
			<button onClick="functionGoToZalo()">
				<img src="./static/img/zalooa.png" alt="back_to_top"/>
			</button>`,
			}}
		/>
	);
}

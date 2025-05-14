import React from "react";
import {
	TimelineBox,
	TimelineItem,
	TimelineItemBox,
	TimelineItemButton,
	TimelineItemButtonBox,
	TimelineItemButtonInner,
	TimelineItemLabel,
	TimelineItemLabelBox,
	TimelineItems,
	TimelineItemsInner,
	TimelineLine,
	TimelineLineInner,
	TimelineWrap,
} from "./StyledTimeLine";

export default function Timelinev2(props: {
	value: number;
	buttons: (JSX.Element | string)[];
	defaultButton: JSX.Element | string;
	labels: string[];
	id?: string;
}) {
	return (
		<TimelineWrap>
			<TimelineBox>
				<TimelineLine>
					<TimelineLineInner className={`items-${props.labels.length}`} />
				</TimelineLine>
				<TimelineItems>
					<TimelineItemsInner className="clearfix">
						{props.labels.map((label, idx) => {
							let isPassed = false;
							let isCurrent = false;
							if (idx < props.value) {
								isPassed = true;
							} else if (idx == props.value) {
								isCurrent = true;
							}

							return (
								<TimelineItemBox
									className={`items-${props.labels.length}`}
									key={idx}>
									<TimelineItem>
										<TimelineItemButtonBox>
											<TimelineItemButton>
												<TimelineItemButtonInner
													passed={isPassed}
													current={isCurrent}>
													{idx < props.value ? props.defaultButton : props.buttons[idx]}
												</TimelineItemButtonInner>
											</TimelineItemButton>
										</TimelineItemButtonBox>
										<TimelineItemLabelBox>
											<TimelineItemLabel current={isCurrent}>{label || ""}</TimelineItemLabel>
										</TimelineItemLabelBox>
									</TimelineItem>
								</TimelineItemBox>
							);
						})}
					</TimelineItemsInner>
				</TimelineItems>
			</TimelineBox>
		</TimelineWrap>
	);
}

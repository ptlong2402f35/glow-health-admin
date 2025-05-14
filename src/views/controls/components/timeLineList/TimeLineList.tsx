import React, { useEffect, useState } from "react";
import Collapse from "@material-ui/core/Collapse";
import { Fragment } from "react";
import moment from "moment";
import {
	TimelineListTimelineContent,
	TimelineListTimelineTitle,
	TimelineListVerticalTimeline,
	TimelineListVerticalTimelineElement,
	TimelineListVerticalTimelineElementContent,
	TimelineListVerticalTimelineElementDate,
	TimelineListVerticalTimelineElementIcon,
	TimelineListWrap,
} from "./StyledTimeLineList";

export enum TimeLineListItemType {
	Normal = 1,
	Success = 2,
	Warning = 3,
	Error = 4,
}

export type TimeLineListItemDataType = {
	id: any;
	type: TimeLineListItemType;
	time: Date;
	title: string;
	isCollapsible?: boolean;
	content?: string;
};

export default function TimeLineList(props: {
	data: any[];
	dataParser: (item: any) => TimeLineListItemDataType | null;
}) {
	const [listItems, setListItems] = useState(() => sortListItems(parseListItems(props.data, props.dataParser)));
	const [mapCollapseState, setMapCollapseState] = useState<Set<string | number>>(() => new Set());

	const onItemTitleClick = (item: TimeLineListItemDataType) => {
		if (mapCollapseState.has(item.id)) {
			mapCollapseState.delete(item.id);
		} else {
			mapCollapseState.add(item.id);
		}
		setMapCollapseState(new Set(mapCollapseState));
	};

	useEffect(() => {
		setListItems(() => sortListItems(parseListItems(props.data, props.dataParser)));
	}, [props.data, props.dataParser]);

	return (
		<TimelineListWrap>
			<TimelineListVerticalTimeline>
				{listItems.map((item, idx) => {
					let dateStr = moment(item.time).format("DD/MM/YYYY");
					let timeStr = moment(item.time).format("HH:mm");

					//class name
					var classStr = "item-normal";
					switch (item.type) {
						case TimeLineListItemType.Normal:
							classStr = "item-normal";
							break;
						case TimeLineListItemType.Success:
							classStr = "item-success";
							break;
						case TimeLineListItemType.Warning:
							classStr = "item-warning";
							break;
						case TimeLineListItemType.Error:
							classStr = "item-error";
							break;
					}

					return (
						<TimelineListVerticalTimelineElement key={idx}>
							<div>
								<TimelineListVerticalTimelineElementIcon className="bounce-in">
									<div className={`vtimeline-badge ${classStr}`}></div>
								</TimelineListVerticalTimelineElementIcon>
								<TimelineListVerticalTimelineElementContent className="bounce-in">
									{item.isCollapsible ? (
										<Fragment>
											<TimelineListTimelineTitle
												className={item.isCollapsible ? "item-collapsible" : ""}
												onClick={() => onItemTitleClick(item)}>
												{item.title}
											</TimelineListTimelineTitle>
											<Collapse in={mapCollapseState.has(item.id)}>
												<TimelineListTimelineContent>
													{item.content}
												</TimelineListTimelineContent>
											</Collapse>
										</Fragment>
									) : (
										<Fragment>
											<TimelineListTimelineTitle
												className={item.isCollapsible ? "item-collapsible" : ""}>
												{item.title}
											</TimelineListTimelineTitle>
											{item.content && (
												<TimelineListTimelineContent>
													{item.content}
												</TimelineListTimelineContent>
											)}
										</Fragment>
									)}
									<TimelineListVerticalTimelineElementDate>
										<p>{timeStr}</p>
										<p>{dateStr}</p>
									</TimelineListVerticalTimelineElementDate>
								</TimelineListVerticalTimelineElementContent>
							</div>
						</TimelineListVerticalTimelineElement>
					);
				})}
			</TimelineListVerticalTimeline>
		</TimelineListWrap>
	);
}

function parseListItems(
	data: any[],
	dataParser: (item: any) => TimeLineListItemDataType | null
): TimeLineListItemDataType[] {
	if (!data) return [];

	return data
		.map((item) => dataParser(item))
		.filter((val) => val)
		.map((val) => val as TimeLineListItemDataType);
}

function sortListItems(listItems: TimeLineListItemDataType[]) {
	if (!listItems) {
		return [];
	}
	listItems.sort((item1, item2) => {
		if (!item1) {
			return 1;
		}
		if (!item2) {
			return -1;
		}
		return moment(item1.time).isAfter(moment(item2.time)) ? 0 : 1;
	});
	return listItems;
}

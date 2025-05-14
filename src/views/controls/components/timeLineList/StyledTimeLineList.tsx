import styled from "styled-components";

// .d-flex {
export const TimelineListWrap = styled.div`
	display: flex;
`;

// .vtimeline-vertical-timeline {
export const TimelineListVerticalTimeline = styled.div`
	width: 100%;
	position: relative;
	padding: 15px 0px 15px 0px;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 100px;
		height: 100%;
		width: 4px;
		background: #e9ecef;
		border-radius: 2px;
	}
`;

// .vtimeline-vertical-timeline-element {
export const TimelineListVerticalTimelineElement = styled.div`
	position: relative;
	margin-top: 15px;

	&:first-child {
		margin-top: 0px;
	}
`;

// .vtimeline-vertical-timeline-element-icon {
export const TimelineListVerticalTimelineElementIcon = styled.span`
	position: absolute;
	top: 0;
	left: 96px;

	&.bounce-in {
		visibility: visible;
		animation: cd-bounce-1 0.8s;
	}

	& .vtimeline-badge {
		width: 12px;
		height: 12px;
		border-radius: 10px;
		border: 2px solid #579d2d;
		background: #ffffff;
		margin-top: 4px;
	}

	& .vtimeline-badge.item-normal {
		border-color: #579d2d;
	}
	& .vtimeline-badge.item-success {
		border-color: #4bbaf8;
	}
	& .vtimeline-badge.item-warning {
		border-color: #e44a5d;
	}
	& .vtimeline-badge.item-error {
		border-color: #e44a5d;
	}
`;

// .vtimeline-vertical-timeline-element-content {
export const TimelineListVerticalTimelineElementContent = styled.div`
	position: relative;
	margin-left: 126px;
	min-height: 37px;

	&:after {
		content: "";
		display: table;
		clear: both;
	}
`;

// .vtimeline-timeline-title {
export const TimelineListTimelineTitle = styled.div`
	font-size: 14px;
	line-height: 20px;
	color: var(--text-color);

	& b {
		text-transform: uppercase;
		font-weight: bold;
	}

	&.item-collapsible {
		cursor: pointer;
	}
`;

// .vtimeline-timeline-content {
export const TimelineListTimelineContent = styled.div`
	padding-top: 7px;
	word-wrap: break-word;
	white-space: pre-wrap;
	-moz-white-space: pre-wrap;

	font-size: 14px;
	line-height: 20px;
	color: var(--text-color);
`;

// .vtimeline-vertical-timeline-element-date {
export const TimelineListVerticalTimelineElementDate = styled.span`
	display: block;
	position: absolute;
	padding-right: 0px;
	left: -115px;
	top: 3px;
	text-align: right;

	font-size: 14px;
	line-height: 20px;
	color: #adb5bd;

	& p:nth-child(1) {
		font-size: 14px;
		line-height: 15px;
		font-weight: 600;
		margin-bottom: 4px;
		color: var(--text-color);
	}

	& p:nth-child(2) {
		font-size: 12px;
		line-height: 13px;
		color: var(--text-color3);
	}
`;

import styled, { css } from "styled-components";

export const TimelineWrap = styled.div`
	background-color: var(--primary-color);
`;

export const TimelineBox = styled.div`
	position: relative;
	background: rgba(255, 255, 255, 0.1);
	border-radius: 16px;
`;

export const TimelineLine = styled.div`
	position: absolute;
	width: 100%;
	top: 46px;
	left: 0px;
	padding-left: 40px;
	padding-right: 40px;
`;

export const TimelineLineInner = styled.div<{
	size?: number;
}>`
	background-color: var(--border-color);
	height: 1px;
	margin-left: 10%;
	margin-right: 10%;
	width: auto;

	&.items-2 {
		margin: 0% 25% 0% 25%;
	}

	&.items-3 {
		margin: 0% 16.67% 0% 16.67%;
	}

	&.items-4 {
		margin: 0% 12.5% 0% 12.5%;
	}

	&.items-5 {
		margin: 0% 10% 0% 10%;
	}

	&.items-6 {
		margin: 0% 8.33% 0% 8.33%;
	}

	&.items-7 {
		margin: 0% 7.14% 0% 7.14%;
	}

	&.items-8 {
		margin: 0% 6.25% 0% 6.25%;
	}

	&.items-9 {
		margin: 0% 5.56% 0% 5.56%;
	}

	&.items-10 {
		margin: 0% 5% 0% 5%;
	}
`;

export const TimelineItems = styled.div`
	padding: 20px 40px 20px 40px;
	position: relative;
`;

export const TimelineItemsInner = styled.div``;

export const TimelineItemBox = styled.div`
	float: left;
	width: 20%;
	text-align: center;

	&.items-2 {
		width: 50%;
	}

	&.items-3 {
		width: 33.33%;
	}

	&.items-4 {
		width: 25%;
	}

	&.items-5 {
		width: 20%;
	}

	&.items-6 {
		width: 16.66%;
	}

	&.items-7 {
		width: 14.29%;
	}

	&.items-8 {
		width: 12.5%;
	}

	&.items-9 {
		width: 11.11%;
	}

	&.items-10 {
		width: 10%;
	}
`;

export const TimelineItem = styled.div``;

export const TimelineItemButtonBox = styled.div`
	margin-bottom: 8px;
`;

export const TimelineItemButton = styled.div`
	display: inline-block;
	background-color: var(--primary-color);
	border-radius: 100px;
`;

export const TimelineItemButtonInner = styled.div<{
	passed?: boolean;
	current?: boolean;
}>`
	border-radius: 100px;
	font-size: 20px;
	color: #fff;
	background-color: rgba(255, 255, 255, 0.46);
	border: 1px solid rgba(255, 255, 255, 0.2);
	width: 50px;
	height: 50px;

	${(props) =>
		props.passed &&
		css`
			background-color: rgba(255, 255, 255, 0.78);
			border-color: #fff;
			color: var(--primary-color);
		`};

	${(props) =>
		props.current &&
		css`
			background-color: rgba(255, 255, 255, 0);
			border-color: #fff;
		`};

	& i {
		vertical-align: -10px;
	}

	& img {
		vertical-align: -10px;
		display: inline;
		width: 20px;
		height: 20px;
		object-fit: cover;
	}
`;

export const TimelineItemLabelBox = styled.div``;

export const TimelineItemLabel = styled.div<{
	current?: boolean;
}>`
	font-size: 16px;
	line-height: 24px;
	color: #fff;
	opacity: 0.68;

	${(props) =>
		props.current &&
		css`
			opacity: 1;
		`};
`;

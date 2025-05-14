declare module "react-swipeable-views" {
	export default function SwipeableViews(props: {
		className?: string;
		id?: string;
		index: number;
		onChangeIndex: (val: number) => void;
		enableMouseEvents?: boolean;
		children: JSX.Element[];
		threshold?: number;
	}): JSX.Element;
}

declare module "react-swipeable-views-utils" {
	export function autoPlay(
		swipeElement: (props: {
			className?: string;
			id?: string;
			index: number;
			onChangeIndex: (val: number) => void;
			enableMouseEvents?: boolean;
			children: JSX.Element[];
		}) => JSX.Element
	): (props: {
		className?: string;
		id?: string;
		index: number;
		onChangeIndex: (val: number) => void;
		enableMouseEvents?: boolean;
		children: JSX.Element[];
		interval?: number;
	}) => JSX.Element;
}

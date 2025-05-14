import React, { useEffect, useState } from "react";
import usePrevious from "../../../hooks/usePrevious";
import {
	PageOrderHeaderRes,
	PageOrderRes,
	PageOrderTabHeaderRes,
} from "../../../pages/orderManagement/styled/StyledOrderManagement";
import {
	TabsViewBody,
	TabsViewBodyInner,
	TabsViewBodyItem,
	TabsViewHeader,
	TabsViewHeaderItem,
	TabsViewHeaderItemNameLink,
	TabsViewHeaderOuter,
	TabsViewHeaderWrap,
	TabsViewInner,
	TabsViewWrap,
} from "./StyledTabsView";

const FadeDuration = 200;

export default function TabLinksView(props: {
	value: number;
	onChange: (val: number) => void;
	tabNames: string[];
	tabLinks: string[];
	tabs: (JSX.Element | string)[];
	tabsClassName: string[];
	id?: string;
}) {
	const mounted = usePrevious(true);

	const [innerValue, setInnerValue] = useState(props.value || 0);
	const [appearValue, setAppearValue] = useState(props.value || 0);

	const updateInnerValue = () => {
		var newVal = props.value;
		setTimeout(() => {
			setInnerValue(newVal);
		}, FadeDuration);
	};

	const updateAppearValue = () => {
		var newVal = props.value;
		setTimeout(() => {
			setAppearValue(newVal);
		}, 10);
	};

	useEffect(() => {
		if (mounted) {
			updateInnerValue();
		}
	}, [props.value]);

	useEffect(() => {
		if (mounted) {
			updateAppearValue();
		}
	}, [innerValue]);

	return (
		<TabsViewWrap
			isResOrder={true}
			id={props.id}
			xStylePageOrder={PageOrderRes}>
			<TabsViewInner>
				<TabsViewHeaderWrap>
					<TabsViewHeaderOuter>
						<TabsViewHeader
							isResOrder={true}
							xStylePageOrderHeader={PageOrderHeaderRes}
							xStylePageOrderTabHeader={PageOrderTabHeaderRes}
							className="clearfix">
							{props.tabNames.map((item, idx) => {
								return (
									<TabsViewHeaderItem key={idx}>
										<TabsViewHeaderItemNameLink
											to={props.tabLinks[idx]}
											$active={props.value == idx}>
											{item}
										</TabsViewHeaderItemNameLink>
									</TabsViewHeaderItem>
								);
							})}
						</TabsViewHeader>
					</TabsViewHeaderOuter>
				</TabsViewHeaderWrap>

				<TabsViewBody>
					<TabsViewBodyInner className="clearfix">
						{props.tabs.map((item, idx) => {
							var flag = "";
							if (props.value == innerValue && innerValue == appearValue && innerValue == idx) {
								flag = "active";
							} else if (props.value != innerValue && innerValue == idx) {
								flag = "fading";
							} else if (props.value == innerValue && innerValue != appearValue && innerValue == idx) {
								flag = "appear";
							}

							var tabClass =
								(props.tabsClassName && props.tabsClassName.length > idx && props.tabsClassName[idx]) ||
								"";

							return (
								<TabsViewBodyItem
									key={idx}
									className={`${flag} ${tabClass}`}>
									{item}
								</TabsViewBodyItem>
							);
						})}
					</TabsViewBodyInner>
				</TabsViewBody>
			</TabsViewInner>
		</TabsViewWrap>
	);
}

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { PageCenter, PageInner, PageWrap } from "../controls/components/form/Page";
import TabLinksView from "../controls/components/tabsView/TabLinksView";

/*
Thêm phần này vào App để run test

        <TransformRoute
            exact
            path="/test-tab/:testId">
            <TestTab />
        </TransformRoute>
        
*/

export default function TestTab() {
	const { testId } = useParams<{ testId: string }>();
	const [tab, setTab] = useState(parseInt(testId));

	useEffect(() => {
		setTab(parseInt(testId));
	}, [testId]);

	return (
		<PageWrap>
			<PageCenter>
				<PageInner>
					<TabLinksView
						value={tab}
						onChange={(val) => setTab(val)}
						tabNames={["Tất cả đơn", "Đơn đã mua", "Đơn đã chốt lời", "Đơn bị hủy"]}
						tabLinks={["/test-tab/0", "/test-tab/1", "/test-tab/2", "/test-tab/3"]}
						tabs={[<Component1 />, <Component2 />, <Component3 />, <Component4 />]}
						tabsClassName={[]}
						id="test-tab"
					/>
				</PageInner>
			</PageCenter>
		</PageWrap>
	);
}

function Component1() {
	return (
		<div>
			aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa
			<br />
			aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa
			<br />
			aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa
			<br />
			aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa
			<br />
			aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa
			<br />
			aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa
			<br />
			aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa
			<br />
			aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa
			<br />
		</div>
	);
}

function Component2() {
	return (
		<div>
			bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb <br />
			bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb <br />
			bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb <br />
			bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb <br />
			bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb <br />
			bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb <br />
			bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb <br />
			bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb <br />
			bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb <br />
		</div>
	);
}

function Component3() {
	return (
		<div>
			cccccc cccccc cccccc cccccc cccccc cccccc <br />
			cccccc cccccc cccccc cccccc cccccc cccccc <br />
			cccccc cccccc cccccc cccccc cccccc cccccc <br />
			cccccc cccccc cccccc cccccc cccccc cccccc <br />
			cccccc cccccc cccccc cccccc cccccc cccccc <br />
			cccccc cccccc cccccc cccccc cccccc cccccc <br />
			cccccc cccccc cccccc cccccc cccccc cccccc <br />
			cccccc cccccc cccccc cccccc cccccc cccccc <br />
			cccccc cccccc cccccc cccccc cccccc cccccc <br />
		</div>
	);
}

function Component4() {
	return (
		<div>
			ddddd ddddd ddddd ddddd ddddd ddddd <br />
			ddddd ddddd ddddd ddddd ddddd ddddd <br />
			ddddd ddddd ddddd ddddd ddddd ddddd <br />
			ddddd ddddd ddddd ddddd ddddd ddddd <br />
			ddddd ddddd ddddd ddddd ddddd ddddd <br />
			ddddd ddddd ddddd ddddd ddddd ddddd <br />
			ddddd ddddd ddddd ddddd ddddd ddddd <br />
			ddddd ddddd ddddd ddddd ddddd ddddd <br />
			ddddd ddddd ddddd ddddd ddddd ddddd <br />
		</div>
	);
}

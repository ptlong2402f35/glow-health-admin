import React, { useState } from "react";
import Logger from "../../utils/Logger";
import useListSelectedItems from "../hooks/useListSelectedItems";

const Log = Logger.getLogger("TestChecks");

type TestDataType = {
	id: number;
	val: string;
};

const testData: TestDataType[] = [
	{ id: 1, val: "1111" },
	{ id: 2, val: "2222" },
	{ id: 3, val: "3333" },
	{ id: 4, val: "4444" },
	{ id: 5, val: "5555" },
	{ id: 6, val: "6666" },
	{ id: 7, val: "7777" },
	{ id: 8, val: "8888" },
	{ id: 9, val: "9999" },
];

const testData2: TestDataType[] = [
	{ id: 11, val: "1111_" },
	{ id: 12, val: "2222_" },
	{ id: 13, val: "3333_" },
	{ id: 14, val: "4444_" },
	{ id: 15, val: "5555_" },
	{ id: 16, val: "6666_" },
	{ id: 17, val: "7777_" },
	{ id: 18, val: "8888_" },
	{ id: 19, val: "9999_" },
];

export default function TestChecks() {
	const [page, setPage] = useState(0);
	let currentData = page == 0 ? testData : testData2;

	const {
		selectedItems,
		selectedIdsSet,
		isItemSelected,
		isItemSelectedAll,
		onItemSelectedChange,
		onItemSelectedAll,
		clearSelected,
	} = useListSelectedItems<TestDataType, number>(null, (item: TestDataType) => item.id);

	Log.log(`selectedItems: `, selectedItems);

	return (
		<div>
			{/* check all */}
			<div>
				<input
					type="checkbox"
					checked={isItemSelectedAll(currentData)}
					onChange={(e) => onItemSelectedAll(currentData, e.target.checked)}></input>
				&nbsp;All
			</div>

			{/* list items */}
			<div>
				{currentData.map((item, idx) => (
					<div key={idx}>
						<input
							type="checkbox"
							checked={isItemSelected(item)}
							onChange={(e) => onItemSelectedChange(item, e.target.checked)}
						/>
						&nbsp;
						<span>{item.val}</span>
					</div>
				))}
			</div>

			{/* pagination */}
			<div>
				<button
					disabled={page == 0}
					onClick={() => setPage(0)}>
					Page 0
				</button>
				<button
					disabled={page == 1}
					onClick={() => setPage(1)}>
					Page 1
				</button>

				{/* clear select */}
				<button onClick={clearSelected}>Clear</button>
			</div>
		</div>
	);
}

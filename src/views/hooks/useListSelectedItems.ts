import React, { useState } from "react";

/**
 * @param T: type of item in List
 * @param P: type of item's id
 */
export default function useListSelectedItems<T, P>(props: {} | null, idGetter: (val: T) => P) {
	const [selectedItems, setSelectedItems] = useState<T[]>([]);
	const [selectedIdsSet, setSelectedIdsSet] = useState<Set<P>>(() => new Set());

	const currentIdGetter = (item: T) => idGetter(item);

	const isItemSelected = (item: T) => {
		let id = currentIdGetter(item);
		return selectedIdsSet.has(id);
	};

	const isItemSelectedAll = (items: T[]) => {
		if (!items?.length) return false;

		return items.every((item) => isItemSelected(item));
	};

	const onItemSelectedChange = (item: T, checked: boolean) => {
		if (!item) return;
		let itemId = currentIdGetter(item);

		//check
		if (checked) {
			if (!selectedIdsSet.has(itemId)) {
				selectedItems.push(item);
				selectedIdsSet.add(itemId);
				setSelectedItems([...selectedItems]);
			}
		}
		//uncheck
		else {
			if (selectedIdsSet.has(itemId)) {
				let findIdx = selectedItems.findIndex((selItem) => currentIdGetter(selItem) == itemId);
				if (findIdx >= 0) {
					selectedItems.splice(findIdx, 1);
					selectedIdsSet.delete(itemId);
					setSelectedItems([...selectedItems]);
				}
			}
		}
	};

	const onItemSelectedAll = (items: T[], checked: boolean) => {
		if (!items?.length) return false;
		let hasUpd = false;

		//check
		if (checked) {
			items.forEach((item) => {
				let itemId = currentIdGetter(item);
				if (!selectedIdsSet.has(itemId)) {
					selectedItems.push(item);
					selectedIdsSet.add(itemId);
					hasUpd = true;
				}
			});
		}
		//uncheck
		else {
			items.forEach((item) => {
				let itemId = currentIdGetter(item);
				if (selectedIdsSet.has(itemId)) {
					let findIdx = selectedItems.findIndex((selItem) => currentIdGetter(selItem) == itemId);
					if (findIdx >= 0) {
						selectedItems.splice(findIdx, 1);
						selectedIdsSet.delete(itemId);
						hasUpd = true;
					}
				}
			});
		}

		if (hasUpd) {
			setSelectedItems([...selectedItems]);
		}
	};

	const clearSelected = () => {
		setSelectedItems([]);
		selectedIdsSet.clear();
	};

	return {
		selectedItems,
		selectedIdsSet,
		isItemSelected,
		isItemSelectedAll,
		onItemSelectedChange,
		onItemSelectedAll,
		clearSelected,
	};
}

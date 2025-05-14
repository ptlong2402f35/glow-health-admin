import React, { useEffect, useState } from "react";
import AsyncSelect from "react-select/async";
import TransactionService from "../../../../services/TransactionService";

const DefaultOption = {
	value: "0",
	label: "Tất cả",
	client: null,
};

export async function loadClientsPromise(inputValue: any, selectByAccount: any, onOptionsChange: any) {
	let keyword = inputValue?.trim();

	try {
		const clientsResponse = await TransactionService.getListOwner(keyword);
		const clients = clientsResponse.data;
		const opts = clients.map((item) => ({
			value: selectByAccount ? item.id : item.id,
			label: item.phone,
			client: item,
		}));

		if (!inputValue) opts.unshift();

		onOptionsChange?.(opts);
		return opts;
	} catch (err) {
		console.error(err);
	}

	onOptionsChange([]);
	return [];
}

export default function AdminClientSelect(props: {
	selectedId?: string;
	onChange?: any;
	disabled?: boolean;
	className?: string;
	selectByAccount?: any;
}) {
	const [options, setOptions] = useState([DefaultOption]);
	const [selected, setSelected] = useState();

	const loadPromise = (inputValue: any) =>
		loadClientsPromise(inputValue, props.selectByAccount, (opts: any) => setOptions(opts));
	const onSelectChange = (item: any) => {
		if (item?.value === DefaultOption.value) {
			props.onChange?.(null, DefaultOption);
		} else {
			props.onChange?.(item?.value, item);
		}
	};

	const autoSelect = () => {
		if (!props.selectedId) {
			setSelected(undefined);
			return;
		}

		var find = options.find((item) => item.value === props.selectedId);
		if (find) setSelected(find as any);
		else setSelected(undefined);
	};
	useEffect(() => {
		autoSelect();
	}, [props.selectedId, options]);

	return (
		<div className={`admin-client-selector-wrapper ${props.className}`}>
			<AsyncSelect
				loadOptions={loadPromise}
				defaultOptions
				value={selected}
				onChange={onSelectChange}
				noOptionsMessage={() => "Không có dữ liệu hiển thị"}
			/>
		</div>
	);
}

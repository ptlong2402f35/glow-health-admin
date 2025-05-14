declare module "react-select" {
	export type SelectOptionType = {
		value: any;
		label: string;
		object: any;
	};

	export default function Select(props: {
		isSearchable?: boolean;
		className?: string;
		id?: string;
		options: SelectOptionType[];
		value: SelectOptionType;
		onChange: (val: SelectOptionType) => void;
		placeholder?: string;
		styles?: any;
	}): JSX.Element;
}

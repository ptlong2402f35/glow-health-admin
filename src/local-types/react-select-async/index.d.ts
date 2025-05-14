declare module "react-select/async" {
	export type SelectAsyncOptionType = {
		value: any;
		label: string;
		object: any;
	};

	export default function AsyncSelect(props: {
		loadOptions?: (inputValue: string) => void;
		styles?: any;
		noOptionsMessage?: () => string;
		value?: SelectAsyncOptionType;
		onChange?: (item: any) => void;
		defaultOptions?: boolean;
	}): JSX.Element;
}

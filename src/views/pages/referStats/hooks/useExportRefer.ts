// import AccountanceService from "../../../../services/AccountanceService";

export default function useExportRefer(props: {
	filterFromDate?: Date | null;
	filterToDate?: Date | null;
	onBeginLoad?: () => void;
	onEndLoad?: () => void;
}) {
	const load = async () => {
		// props?.onBeginLoad?.();
		// try {
		// 	let startOfDayFromDate = props.filterFromDate && new Date(props.filterFromDate.setHours(0, 0, 0, 0));
		// 	let endOfDayToDate = props.filterToDate && new Date(props.filterToDate.setHours(23, 59, 59, 999));
		// 	await AccountanceService.exportFileReferStats(startOfDayFromDate || undefined, endOfDayToDate || undefined);
		// } finally {
		// 	props?.onEndLoad?.();
		// }
	};

	return {
		load,
	};
}

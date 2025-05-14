import React, { useEffect, useState } from "react";
import useAlertDialog from "../../../hooks/useAlertDialog";
import { AlertType } from "../../../hooks/common/useAttachAlertDialog";
import useLoadingDialog from "../../../hooks/useLoadingDialog";
import { feedbackAdminOrder } from "../../../../services/AdminOrderService";
import { SelectBoxOptionType } from "../../../controls/components/selectBox/SelectBox";

export default function useFeedbackAdminOrder(props: { onSuccess?: () => void; onFail?: () => void }) {
	const [voteOpts, setVoteOpts] = useState<SelectBoxOptionType[]>([]);
	const [loading, setLoading] = useState(false);
	const { openLoadingDialog, closeLoadingDialog } = useLoadingDialog();
	const onAdminSubmitFeedback = async (id: number, vote: number, note: string) => {
		try {
			setLoading(true);
			openLoadingDialog?.();
			await feedbackAdminOrder(id, note, vote);
			props.onSuccess?.();
		} catch (err) {
			console.error(err);
			props.onFail?.();
		} finally {
			closeLoadingDialog?.();
		}
	};

	useEffect(() => {
		const voteOptsTmp = [];
		for (let i = 1; i <= 5; i++) {
			voteOptsTmp.push({
				value: i,
				label: `${i}`,
			});
		}
		setVoteOpts(voteOptsTmp);
	}, []);

	return {
		voteOpts,
		onAdminSubmitFeedback,
		loading,
	};
}

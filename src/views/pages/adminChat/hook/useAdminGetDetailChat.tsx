import { useState, useEffect } from "react";
import { getAdminDetailChat } from "../../../../services/ChatBox";
import Chatbox from "../../../../models/Chatbox";

export default function useAdminGetDetailChat(props: { id: string }) {
	const [infoChat, setInfoChat] = useState<Chatbox>();
	const loadListAllUser = async () => {
		try {
			var data = await getAdminDetailChat(props.id || "");
			setInfoChat(data);
		} catch {
			setInfoChat(undefined);
		}
	};
	const reload = () => {
		loadListAllUser();
	};
	useEffect(() => {
		if (props.id) {
			reload();
		}
	}, [props.id]);
	return {
		infoChat,
		reload,
	};
}

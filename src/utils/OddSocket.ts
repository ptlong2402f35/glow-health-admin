import Message, { IMessage } from "../models/Message.js";
import environments from "../environment.js";
import User from "../models/User.js";
import { io, Socket } from "socket.io-client";
import Logger from "./Logger.js";

const Log = Logger.getLogger("SocketIns");

export const OddSocketCommand = {
	sendMsg: "message",
	seenMsg: "seenMessage",
	receivedMsg: "newMessage",
};

export type NewMsgChatboxCallback = {
	chatboxId: number;
	callback: (msg: Message) => void;
};

export default class OddSocket {
	user: User | null;
	host: string | null;
	socket: Socket | null;
	newMsgGlobalCallback?: (msg: Message) => void;
	newMsgChatboxCallbackMap: Map<number, NewMsgChatboxCallback>;

	constructor(host?: string) {
		this.user = null;
		this.host = host || environments.chatApiRoot || "";
		this.socket = null;
		this.newMsgChatboxCallbackMap = new Map();
	}

	/**
	 * connect to host
	 */
	init(user: User, host?: string) {
		this.user = user;
		if (host) this.host = environments.chatApiRoot || "";

		this.socket = io(this.host || "", {
			query: {
				userId: this.user?.id,
				token: "Bearer " + this.user.token,
			},
		});
		this.socket?.on("connect_error", (err) => {
			Log.log(`connect_error`);
		});
		this.socket?.on("connect_failed", (err) => {
			Log.log(`connect_failed`);
		});
		this.socket?.on("disconnect", (err) => {
			Log.log(`disconnect`);
		});

		this.listenNewMessage();
	}

	/**
	 * Add received message listener
	 * @param {*} callback(data)
	 */
	addNewMsgChatboxCallback(chatboxId: number, callback: (msg: Message) => void) {
		this.newMsgChatboxCallbackMap.set(chatboxId, {
			chatboxId: chatboxId,
			callback: callback,
		});
	}

	/**
	 * close socket
	 */
	disconnect() {
		this.socket?.disconnect();
	}

	/**
	 * listen receive new Message
	 */
	listenNewMessage() {
		this.socket?.on(OddSocketCommand.receivedMsg, (data: any) => {
			Log.log("Socket receive message: ", data);

			let newMsg = new Message().parse(data);
			this.newMsgGlobalCallback?.(newMsg);
			this.newMsgChatboxCallbackMap.get(newMsg.chatboxId)?.callback(newMsg); //dispatch event by chatboxId
		});
	}

	/**
	 * Send text as new message
	 */
	sendMessage<T extends IMessage<T>>(msg: IMessage<T>) {
		Log.log(`sendMessage: `, msg);
		this.socket?.emit(OddSocketCommand.sendMsg, msg.toSocketData());
	}

	/**
	 * Mark a message read
	 */
	markReadMessage(msgId: number) {
		this.socket?.emit(OddSocketCommand.seenMsg, msgId);
	}
}

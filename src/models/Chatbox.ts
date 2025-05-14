import IModel from "./IModel";
import Orderv2 from "./Orderv2";
import User from "./User";

export interface MemberInfo {
	role: number;
	phone: string;
	title: string;
	avatar: string;
	userId: number;
	rateAvg: number | null;
	subTitle: string;
	unreadCount: number;
	userName: string;
	userPhone: number;

  }

export default class Chatbox implements IModel<Chatbox> {
	id: number;
	orderId?: number;
	memberIds?: number[];
	lastMessage?: string| null;
	status?: number | null;
	 memberInfo: MemberInfo[];
	lastMessageType?: number | null;
	lastMessageSendAt?: Date | null;
	createdAt?: Date | null;
	updatedAt?: Date | null;
	order?: Orderv2;

	constructor(input?: Partial<Chatbox>) {
		this.id = input?.id || 0;
		this.orderId = input?.orderId;
		this.memberIds = input?.memberIds;
		this.lastMessage = input?.lastMessage;
		this.status = input?.status;
		this.memberIds = input?.memberIds || [];
		this.memberInfo = input?.memberInfo || [];
		this.lastMessageType = input?.lastMessageType;
		this.lastMessageSendAt = input?.lastMessageSendAt;
		this.createdAt = input?.createdAt;
		this.updatedAt = input?.updatedAt;
		this.order = input?.order;
	}

	parse(json?: any): Chatbox {
		if (!json) return this;
	
		Object.assign(this, {
		  id: json.id,
		  orderId: json.orderId,
		  memberIds: json.memberIds || [],
		  lastMessage: json.lastMessage || null,
		  status: json.status || null,
		  memberInfo: Object.values(json.memberInfo || {}),
		  lastMessageType: json.lastMessageType || null,
		  order: json.order || null,
		  lastMessageSendAt: json.lastMessageSendAt ? new Date(json.lastMessageSendAt) : null,
		  createdAt: json.createdAt ? new Date(json.createdAt) : null,
		  updatedAt: json.updatedAt ? new Date(json.updatedAt) : null,
		});
	
		return this;
	  }

	clone(): Chatbox {
		return new Chatbox({
			...this,
		});
	}
}



export class Message implements IModel<Message> {
	id: number;
	chatBoxId?: number;
	type?: number;
	content?: string| null;
	specialContent?: string[] | null;
	seen?: string;
	sendByUserId?: number | null;
	status?: number | null;
	createdAt?: Date | null;
	updatedAt?: Date | null;

	constructor(input?: Partial<Message>) {
		this.id = input?.id || 0;
		this.chatBoxId = input?.chatBoxId;
		this.type = input?.type;
		this.content = input?.content;
		this.specialContent = input?.specialContent;
		this.seen = input?.seen;
		this.sendByUserId = input?.sendByUserId;
		this.status = input?.status;
		this.createdAt = input?.createdAt;
		this.updatedAt = input?.updatedAt;
	}

	parse(json?: any): Message {
		if (!json) return this;
	
		Object.assign(this, {
		  id: json.id,
		  chatBoxId: json.chatBoxId,
		  type: json.type,
		  content: json.content,
		  specialContent: json.specialContent,
		  seen: json.seen,
		  sendByUserId: json.sendByUserId,
		  status: json.status,
		  createdAt: json.createdAt ? new Date(json.createdAt) : null,
		  updatedAt: json.updatedAt ? new Date(json.updatedAt) : null,
		});
	
		return this;
	  }

	  parseList(jsons: any) {
		if (!jsons || !jsons.length) return;

		return jsons.map((item: any) => new Message().parse(item));
	}

	clone(): Message {
		return new Message({
			...this,
		});
	}
}

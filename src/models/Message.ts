import IModel from "./IModel";

export interface IMessage<T extends IMessage<T>> {
	parseFromSocket(json?: any): T;
	toSocketData(): T;
}

export const MessageStatus = {
	Seen: 1,
	Unseen: 2,
};

export const MessageType = {
	Text: 1,
	Url: 2,
	Image: 3,
	Audio: 4,
	Video: 5,
	File: 6,
};

export default class Message implements IModel<Message>, IMessage<Message> {
	id: number;
	userId: number;
	chatboxId: number;
	status: number;
	type: number;
	textContent?: string | null;
	urlSources?: string[] | null;
	imageSources?: string[] | null;
	audioSources?: string[] | null;
	videoSources?: string[] | null;
	fileSources?: string[] | null;
	createdAt?: Date | null;
	updatedAt?: Date | null;

	constructor(input?: Partial<Message>) {
		this.id = input?.id || 0;
		this.userId = input?.userId || 0;
		this.chatboxId = input?.chatboxId || 0;
		this.status = input?.status || MessageStatus.Unseen;
		this.type = input?.type || MessageType.Text;
		this.textContent = input?.textContent;
		this.urlSources = input?.urlSources;
		this.imageSources = input?.imageSources;
		this.audioSources = input?.audioSources;
		this.videoSources = input?.videoSources;
		this.fileSources = input?.fileSources;
		this.createdAt = input?.createdAt;
		this.updatedAt = input?.updatedAt;
	}

	parse(json?: any): Message {
		if (!json) return this;

		Object.assign(this, {
			...json,
		});
		return this;
	}

	parseFromSocket(json?: any): Message {
		if (!json) return this;

		Object.assign(this, {
			...json,
		});
		return this;
	}

	clone(): Message {
		return new Message({
			...this,
		});
	}

	toSocketData(): any {
		return {
			...this,
		};
	}
}

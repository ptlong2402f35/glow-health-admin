import IModel from "./IModel";

export enum NotificationStatus {
	New = 0,
	Seen = 1,
}

export const NotificationStatusLabelMap = new Map([
	[NotificationStatus.New, "Chưa xem"],
	[NotificationStatus.Seen, "Đã xem"],
]);

NotificationStatusLabelMap.get(NotificationStatus.New);

export default class Notification implements IModel<Notification> {
	id?: number | null;
	userId?: string | null;
	type?: number | null;
	appType?: number | null;
	status?: number | null;
	dynamicId?: number | null;
	content?: string | null;
	createdAt?: Date | null;

	constructor(input?: Partial<Notification>) {
		this.id = input?.id;
		this.userId = input?.userId;
		this.type = input?.type;
		this.appType = input?.appType;
		this.status = input?.status;
		this.dynamicId = input?.dynamicId;
		this.content = input?.content;
		this.createdAt = input?.createdAt;
	}

	parse(json?: any): Notification {
		if (!json) return this;

		let status: NotificationStatus | null = null;
		switch (json.status) {
			case 2:
				status = NotificationStatus.New;
				break;
			case 3:
				status = NotificationStatus.Seen;
				break;
		}

		Object.assign(this, {
			...json,
			id: json.id + "",
			userId: json.userId,
			appType: json.appType,
			type: json.type,
			status: json.status,
			dynamicId: json.dynamicId,
			content: json.content,
			createdAt: json.createdAt && new Date(json.createdAt),
		});

		return this;
	}

	clone(): Notification {
		return new Notification({
			...this,
		});
	}
}

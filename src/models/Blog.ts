import IModel from "./IModel";

export default class Blog implements IModel<Blog> {
	id?: number;
	title?: string | null;
	image?: string | null;
	content?: string | null;
	subContent?: string | null;
	status?: number | null;
	createdAt?: Date | null;
	updatedAt?: Date | null;
	foreignContent?: ForeignContent[] | null;
	richLink?: string | null;
	constructor(input?: Partial<Blog>) {
		this.id = input?.id;
		this.title = input?.title;
		this.content = input?.content;
		this.subContent = input?.subContent;
		this.image = input?.image;
		this.status = input?.status;
		this.createdAt = input?.createdAt;
		this.updatedAt = input?.updatedAt;
		this.foreignContent = input?.foreignContent;
		this.richLink = input?.richLink;
	}

	parse(json?: any): Blog {
		if (!json) return this;

		Object.assign(this, {
			...json,
			id: json.id,
			title: json.title,
			content: json.content,
			subContent: json.subContent,
			image: json.image,
			status: json.status,
			createdAt: json.createdAt,
			updatedAt: json.updatedAt,
			foreignContent: json.foreignContent,
			richLink: json.richLink,
		});

		return this;
	}
	clone(): Blog {
		return new Blog({
			...this,
		});
	}
}

export class ForeignContent implements IModel<ForeignContent> {
	lang?: string;
	title?: string | null;
	image?: string | null;
	content?: string | null;
	subContent?: string | null;
	constructor(input?: Partial<ForeignContent>) {
		this.lang = input?.lang;
		this.title = input?.title;
		this.content = input?.content;
		this.subContent = input?.subContent;
		this.image = input?.image;
	}

	parse(json?: any): ForeignContent {
		if (!json) return this;

		Object.assign(this, {
			...json,
			lang: json.lang,
			title: json.title,
			content: json.content,
			subContent: json.subContent,
			image: json.image,
		});

		return this;
	}
	clone(): ForeignContent {
		return new ForeignContent({
			...this,
		});
	}
}

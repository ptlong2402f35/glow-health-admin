import IModel from "./IModel";

export default class Banner implements IModel<Banner> {
	group?: string | null;
	items?: Item[] | null;
	active?: boolean;
	constructor(input?: Partial<Banner>) {
		this.group = input?.group;
		this.items = input?.items;
		this.active = input?.active;
	}

	parse(json?: any): Banner {
		if (!json) return this;

		Object.assign(this, {
			...json,
			group: json.group,
			items: json.items,
			active: json.active,
		});

		return this;
	}
	parseList(jsons: any) {
		if (!jsons || !jsons.length) return;

		return jsons.map((item: any) => new Banner().parse(item));
	}
	clone(): Banner {
		return new Banner({
			...this,
		});
	}
}

export class ItemBanner implements IModel<ItemBanner> {
	path?: PathBanner[] | null;
	action?: string | null;
	constructor(input?: Partial<ItemBanner>) {
		this.path = input?.path;
		this.action = input?.action;
	}

	parse(json?: any): ItemBanner {
		if (!json) return this;

		Object.assign(this, {
			...json,
			path: json.path,
			action: json.action,
		});

		return this;
	}
	clone(): ItemBanner {
		return new ItemBanner({
			...this,
		});
	}
}

export class PathBanner implements IModel<PathBanner> {
	lang?: string | null | [];
	value?: string | null;
	constructor(input?: Partial<PathBanner>) {
		this.lang = input?.lang;
		this.value = input?.value;
	}

	parse(json?: any): PathBanner {
		if (!json) return this;

		Object.assign(this, {
			...json,
			lang: json.lang,
			value: json.value,
		});

		return this;
	}
	clone(): PathBanner {
		return new PathBanner({
			...this,
		});
	}
}

export class Item implements IModel<Item> {
	action?: string | null;
	path?:
		| {
				lang: string;
				value: string;
		  }[]
		| [];
	constructor(input?: Partial<Item>) {
		this.action = input?.action;
		this.path = input?.path;
	}

	parse(json?: any): Item {
		if (!json) return this;

		Object.assign(this, {
			...json,
			action: json.action,
			path: json.path,
		});

		return this;
	}
	clone(): Item {
		return new Item({
			...this,
		});
	}
}

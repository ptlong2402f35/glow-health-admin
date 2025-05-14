import { HreflangLink, StructuredData } from "../../src_ssr/data-loader";
import IModel from "./IModel";

export default class MetaLoader implements IModel<MetaLoader> {
    id?: string;
    name?: string;
    active?: string;
    title?: string;
    description?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    ogType?: string;
    ogUrl?: string;
    ogSiteName?: string;
    canonical?: string;
    hreflang?: HreflangLink[];
    structuredData?: StructuredData;
    GlowError?: boolean;
    robots?: string;
    keyword?: string;
    prev?: string;
    next?: string;
    originalLink?: string;
    newLink?: string;
    createdAt?: Date;
    updatedAt?: Date;
    h1Content?: string;

    constructor(input?: Partial<MetaLoader>) {
        this.id = input?.id;
        this.name = input?.name;
        this.active = input?.active;
        this.title = input?.title;
        this.description = input?.description;
        this.ogTitle = input?.ogTitle;
        this.ogDescription = input?.ogDescription;
        this.ogImage = input?.ogImage;
        this.ogType = input?.ogType;
        this.ogUrl = input?.ogUrl;
        this.ogSiteName = input?.ogSiteName;
        this.canonical = input?.canonical;
        this.hreflang = input?.hreflang;
        this.structuredData = input?.structuredData;
        this.GlowError = input?.GlowError;
        this.robots = input?.robots;
        this.keyword = input?.keyword;
        this.prev = input?.prev;
        this.next = input?.next;
        this.originalLink = input?.originalLink;
        this.newLink = input?.newLink;
        this.createdAt = input?.createdAt;
		this.updatedAt = input?.updatedAt;
        this.h1Content = input?.h1Content;
    }

    parse(json?: any): MetaLoader {
        if (!json) return this;

        Object.assign(this, {
            ...json,
        });

        return this;
    }
    parseList(jsons: any) {
		if (!jsons || !jsons.length) return;

		return jsons.map((item: any) => new MetaLoader().parse(item));
	}

    clone(): MetaLoader {
        return new MetaLoader({
            ...this,
        });
    }
}

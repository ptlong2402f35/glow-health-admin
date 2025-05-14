import { matchPath } from "react-router-dom";
import { Request } from "express";
import Logger from "../src/utils/Logger";
import HomeLoader, { HomeLoaderMuti } from "./loaders/HomeLoader";
import AboutLoader, { AboutLoaderMutiLang } from "./loaders/AboutLoader";
import PartnerLoader, { PartnerLoaderMutiLang } from "./loaders/PartnerLoader";
import PolicyLoader, { PolicyLoaderMutiLang } from "./loaders/PolicyLoader";
import RegulationLoader, { RegulationLoaderMutiLang } from "./loaders/RegulationLoader";
import ServiceLoader, { ServiceLoaderMutiLang } from "./loaders/ServiceLoader";
import ListBlogLoader, { ListBlogLoaderMutiLang } from "./loaders/ListBlogLoader";
import BlogLoader, { BlogLoaderMutiLang } from "./loaders/BlogLoader";
import HomeKTVLoader, { HomeKTVLoaderMuti } from "./loaders/HomeKTVLoader";
import StaffDetailLoader, { StaffDetailLoaderMutiLang } from "./loaders/StaffDetailLoader";
import FilterListStaffLoader, { FilterListStaffLoaderMuti } from "./loaders/FilterListStaffLoader";
import FilterListServiceLoader, { FilterListServiceLoaderMuti } from "./loaders/FilterListServiceLoader";
import ServiceDetailLoader, { ServiceDetailLoaderMutiLang } from "./loaders/ServiceDetailLoader";
import FilterListStaffHashTagsLoader, { FilterListStaffHashTagsLoaderMuti } from "./loaders/FilterHashTags";
import FilterListStaffApartmentLoader, {
	FilterListStaffApartmentLoaderMuti,
} from "./loaders/FilterListStaffLoaderApartment";
import FilterListServiceApartmentLoader, {
	FilterListServiceApartmentLoaderMuti,
} from "./loaders/FilterListServiceLoaderApartment";
import FilterListStaffHashTagsApartmentLoader, {
	FilterListStaffHashTagsApartmentLoaderMuti,
} from "./loaders/FilterHashTagsApartment";
import HomeNewLoader, { HomeNewLoaderMuti } from "./loaders/HomeNewLoader";
import HomeSpaLoader, { HomeSpaLoaderMuti } from "./loaders/HomeSpaLoader ";
import SearchLoader, { SearchLoaderMutiLang } from "./loaders/SearchLoader";
import MetaLoader from "../src/models/MetaLoader";
import FilterListStaffMapLoader, { FilterListStaffLoaderMapMuti } from "./loaders/FilterListStaffMapLoader";
import FilterListStaffApartmentMapLoader, { FilterListStaffApartmentMapLoaderMuti } from "./loaders/FilterListStaffMapLoaderApartment";

const Log = Logger.getLogger("DataLoader");

export interface HreflangLink {
	lang: string;
	url: string;
}
export type StructuredData = {
	"@context": string;
	"@type": string;
	itemListElement: ListItemElement[];
};

export type ListItemElement = {
	"@type": string;
	position: number;
	name: string;
	item: string;
};

export type LocalBusiness = {
	"@context": string;
	"@type": string;
	name: string;
	telephone : string;
	description: string;
	email: string;
	sameAs:any[];
	image: string;
	"address":{
		"@type": "PostalAddress";
		streetAddress: string;
		addressLocality: string;
		addressRegion: string;
		// postalCode: string;
		// addressCountry: string;
	  };
	geo: {
		"@type": string;
		latitude: string;
		longitude: string;
	  };
	openingHoursSpecification:  {
		"@type": string;
		dayOfWeek: string[];
		opens: string;
		closes: string;
	}[];



};

export type PageMeta = {
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
	LocalBusiness?: LocalBusiness;
	enableScript?: boolean;
};
export type RedirectData = {
	redirect: boolean;
	urlRedirect: string;
  };
  

export type DataLoaderResponse = {
	data?: any;
	raw?: any;
	meta?: PageMeta | null;
	error?: boolean;
	notFoundPath?: boolean;
	redirectStatus?: RedirectData | null;
};

export type DataLoaderItem = {
	path: string;
	loader: (path: string, params: any, url?: string, matchedLink?: any) => Promise<DataLoaderResponse>;
};

export default class DataLoader {
	static instance: DataLoader;
	loaderItems: DataLoaderItem[] = [];

	constructor() {
		this.loaderItems = [];
	}

	static getInstance() {
		if (!DataLoader.instance) {
			DataLoader.instance = new DataLoader();
		}

		return DataLoader.instance;
	}

	registerLoader(item: DataLoaderItem) {
		this.loaderItems.push({
			path: item.path,
			loader: item.loader,
		});
	}

	async load(httpReq: Request, matchedLink?:MetaLoader): Promise<DataLoaderResponse> {
		Log.direct(`url: `, httpReq.url);

		for (let item of this.loaderItems) {
			let match = matchPath((matchedLink?.newLink && matchedLink?.originalLink) || httpReq.path, {
				path: item.path,
				exact: true,
			});
			if (!match) continue;
			Log.direct(`path ${item.path} is matched!`);
			
	

			const loaderResponse = await item.loader(match.path, match.params, httpReq.url);
			const metaWithMatchedLink = {
				...loaderResponse.meta,
				title: matchedLink?.title ?? loaderResponse.meta?.title,
				description: matchedLink?.description ?? loaderResponse.meta?.description,
				ogTitle: matchedLink?.ogTitle ?? loaderResponse.meta?.ogTitle,
				ogDescription: matchedLink?.ogDescription ?? loaderResponse.meta?.ogDescription,
				ogImage: matchedLink?.ogImage ?? loaderResponse.meta?.ogImage,
				ogType: matchedLink?.ogType ?? loaderResponse.meta?.ogType,
				ogUrl: matchedLink?.ogUrl ?? loaderResponse.meta?.ogUrl,
				canonical: matchedLink?.canonical ?? loaderResponse.meta?.canonical,
				hreflang: matchedLink?.hreflang ?? loaderResponse.meta?.hreflang,
				structuredData: matchedLink?.structuredData ?? loaderResponse.meta?.structuredData,
			  };
			  const dataWithH1Content = {
				...loaderResponse.data,
				h1Content: matchedLink?.h1Content,
				originalLink: matchedLink?.originalLink,
			};
			return {
				...loaderResponse,
				data: dataWithH1Content,
				meta: metaWithMatchedLink,
			};
		}

		return { notFoundPath: true };
	}

	static register() {
		DataLoader.getInstance().registerLoader(HomeLoaderMuti);
		DataLoader.getInstance().registerLoader(HomeLoader);
		DataLoader.getInstance().registerLoader(HomeSpaLoaderMuti);
		DataLoader.getInstance().registerLoader(HomeSpaLoader);
		DataLoader.getInstance().registerLoader(HomeNewLoaderMuti);
		DataLoader.getInstance().registerLoader(HomeNewLoader);
		DataLoader.getInstance().registerLoader(AboutLoader);
		DataLoader.getInstance().registerLoader(PartnerLoader);
		DataLoader.getInstance().registerLoader(PolicyLoader);
		DataLoader.getInstance().registerLoader(RegulationLoader);
		DataLoader.getInstance().registerLoader(SearchLoader);
		DataLoader.getInstance().registerLoader(SearchLoaderMutiLang);
		DataLoader.getInstance().registerLoader(ServiceLoader);
		DataLoader.getInstance().registerLoader(ListBlogLoader);
		DataLoader.getInstance().registerLoader(BlogLoader);
		DataLoader.getInstance().registerLoader(HomeKTVLoader);
		DataLoader.getInstance().registerLoader(StaffDetailLoader);
		DataLoader.getInstance().registerLoader(FilterListServiceLoader);
		DataLoader.getInstance().registerLoader(ServiceDetailLoader);
		DataLoader.getInstance().registerLoader(FilterListStaffMapLoader);
		DataLoader.getInstance().registerLoader(FilterListStaffApartmentMapLoader);
		DataLoader.getInstance().registerLoader(FilterListStaffLoaderMapMuti);
		DataLoader.getInstance().registerLoader(FilterListStaffApartmentMapLoaderMuti);
		DataLoader.getInstance().registerLoader(FilterListStaffHashTagsLoader);
		DataLoader.getInstance().registerLoader(FilterListStaffHashTagsLoaderMuti);
		DataLoader.getInstance().registerLoader(FilterListServiceApartmentLoader);
		DataLoader.getInstance().registerLoader(FilterListServiceApartmentLoaderMuti);
		DataLoader.getInstance().registerLoader(FilterListStaffHashTagsApartmentLoader);
		DataLoader.getInstance().registerLoader(FilterListStaffHashTagsApartmentLoaderMuti);
		DataLoader.getInstance().registerLoader(FilterListStaffApartmentLoaderMuti);
		DataLoader.getInstance().registerLoader(FilterListServiceLoaderMuti);
		DataLoader.getInstance().registerLoader(ServiceDetailLoaderMutiLang);
		DataLoader.getInstance().registerLoader(AboutLoaderMutiLang);
		DataLoader.getInstance().registerLoader(PartnerLoaderMutiLang);
		DataLoader.getInstance().registerLoader(PolicyLoaderMutiLang);
		DataLoader.getInstance().registerLoader(RegulationLoaderMutiLang);
		DataLoader.getInstance().registerLoader(ServiceLoaderMutiLang);
		DataLoader.getInstance().registerLoader(ListBlogLoaderMutiLang);
		DataLoader.getInstance().registerLoader(BlogLoaderMutiLang);
		DataLoader.getInstance().registerLoader(HomeKTVLoaderMuti);
		DataLoader.getInstance().registerLoader(StaffDetailLoaderMutiLang);
		DataLoader.getInstance().registerLoader(FilterListStaffLoaderMuti);
		DataLoader.getInstance().registerLoader(FilterListStaffLoader);
		DataLoader.getInstance().registerLoader(FilterListStaffApartmentLoader);
	}
}
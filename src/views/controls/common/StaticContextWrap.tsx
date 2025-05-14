import React, { createContext } from "react";
import { StaticContext } from "react-router";
import AppStaticCtx from "../../../utils/AppStaticCtx";
import Logger from "../../../utils/Logger";

const Log = Logger.getLogger("StaticContextWrap");

export type StaticContextWrapContextType = {
	staticContext: AppStaticCtx | null | undefined;
};

export const StaticContextWrapContext = createContext<StaticContextWrapContextType | null>(null);

export default function StaticContextWrap(props: {
	staticContext?: StaticContext | null;
	children: JSX.Element | JSX.Element[] | string | string[];
}) {
	return (
		<StaticContextWrapContext.Provider
			value={{
				staticContext: props.staticContext && (props.staticContext as AppStaticCtx),
			}}>
			{props?.children}
		</StaticContextWrapContext.Provider>
	);
}

export const SsrRawDataVar = "__SSR_CONTEXT_DATA";
export const SsrIsErrorVar = "__SSR_CONTEXT_ERROR";

export function useSsrRawData(): any {
	try {
		//throw error if ssr offline data is not ready
		if ((window as any).__SSR_CONTEXT_ERROR) {
			throw "SSR data load error";
		}
		return (window as any).__SSR_CONTEXT_DATA;
	} finally {
		(window as any).__SSR_CONTEXT_ERROR = null;
		(window as any).__SSR_CONTEXT_DATA = null;
	}
}

export function withSsrRawData<T>(offlineGet: (raw: any) => T, onlineGet: () => T): T {
	//call onlineGet normally if ssr offline data is not ready
	if ((window as any).__SSR_CONTEXT_ERROR) {
		try {
			return onlineGet();
		} finally {
			(window as any).__SSR_CONTEXT_ERROR = null;
			(window as any).__SSR_CONTEXT_DATA = null;
		}
	}

	//else, get raw ssr offline data to display
	let raw = (window as any).__SSR_CONTEXT_DATA;
	if (raw) {
		try {
			return offlineGet(raw);
		} finally {
			(window as any).__SSR_CONTEXT_ERROR = null;
			(window as any).__SSR_CONTEXT_DATA = null;
		}
	} else {
		return onlineGet();
	}
}

export function withSsrRawDataMulti<T>(
	offlineGet: (raw: any) => T,
	onlineGet: () => T,
	rawGetter: (raw: any) => any,
	rawClearer: (ctx: any) => void
): T {
	//call onlineGet normally if ssr offline data is not ready
	if ((window as any).__SSR_CONTEXT_ERROR) {
		try {
			return onlineGet();
		} finally {
			(window as any).__SSR_CONTEXT_ERROR = null;
			rawClearer((window as any).__SSR_CONTEXT_DATA);
		}
	}

	//else, get raw ssr offline data to display
	let raw = rawGetter((window as any).__SSR_CONTEXT_DATA);
	if (raw) {
		try {
			return offlineGet(raw);
		} finally {
			(window as any).__SSR_CONTEXT_ERROR = null;
			rawClearer((window as any).__SSR_CONTEXT_DATA);
		}
	} else {
		return onlineGet();
	}
}

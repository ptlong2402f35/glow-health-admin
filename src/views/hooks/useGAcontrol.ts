import React from "react";
import ReactGA from "react-ga4";

export function useAnalyticsEvent(category: string) {
	const EventTracker = (action: string = "", label: string = "") => {
		ReactGA.event({ category, action, label });
	};
	return EventTracker;
}

import React, { useEffect } from "react";

declare global {
	interface Window {
		adsbygoogle: any[];
	}
}

declare var adsbygoogle: any;
export default function AdsenseComponent(props: { AdFormat: string }) {
	// useEffect(() => {
	// 	const script = document.createElement("script");
	// 	script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8014282449698560";
	// 	script.async = true;
	// 	script.crossOrigin = "anonymous";
	// 	document.body.appendChild(script);

	// 	script.onload = () => {
	// 		(adsbygoogle = window.adsbygoogle || []).push({});
	// 	};

	// 	return () => {
	// 		document.body.removeChild(script);
	// 	};
	// }, []);

	return (
		<ins
			className="adsbygoogle"
			style={{ display: "block", width: "100%", height: "80px" }}
			data-ad-client="ca-pub-8014282449698560"
			data-ad-slot={props.AdFormat}
			// data-ad-format="auto"
			// google-ad-height="90"
			// data-full-width-responsive="true"
		></ins>
	);
}

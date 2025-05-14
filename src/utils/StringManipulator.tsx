import React, { Fragment } from "react";

const UrlPattern =
	/(http\:\/\/|https\:\/\/)[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.,~#?&\/=]*)/g;
const UrlShortenLen = 50;

const LinkMethodPatterns = [/^https:\/\//, /^http:\/\//, /^\/\//];

export default class StringManipulator {
	/**
	 * convert url inside text into Link element. Return a component.
	 */
	static detectUrlContent(text: string | null | undefined, linkClass: string, doShortenLink?: boolean) {
		if (!text) {
			return text;
		}

		var lstComp = [];
		var prevOffset = 0;
		var match;

		//replace all url string to Link element. Keep other texts.
		while ((match = UrlPattern.exec(text)) != null) {
			var matchedStr = match[0];
			lstComp.push(text.substring(prevOffset, match.index));
			lstComp.push({
				comp: (idx: number, url: string) => {
					var postfix = url && url.length > UrlShortenLen ? "..." : "";
					var shortenUrl = doShortenLink ? url?.substring(0, UrlShortenLen) + postfix : url;
					return (
						<a
							key={idx}
							target="_blank"
							href={url}
							className={linkClass}>
							{shortenUrl}
						</a>
					);
				},
				url: matchedStr,
			});
			prevOffset = match.index + matchedStr.length;
		}

		//keep last not-url string at tail
		if (prevOffset < text.length) {
			lstComp.push(text.substring(prevOffset, text.length));
		}

		//append all to component
		if (lstComp.length == 0) {
			return text;
		}
		return (
			<Fragment>
				{lstComp.map((item, idx) => {
					if (typeof item == "string") {
						return item;
					} else {
						return item.comp(idx, item.url);
					}
				})}
			</Fragment>
		);
	}

	static formatBalance(value: number | null | undefined) {
		if (!value) return "0";

		return (Math.round(value * 100) / 100).toLocaleString("en");
	}

	static replaceHttpLinkMethod(link: string | null | undefined, nMethod: string): string | null | undefined {
		if (!link) return link;

		LinkMethodPatterns.forEach((pattern) => {
			link = link?.replace(pattern, "");
		});
		return nMethod + "://" + link;
	}
}

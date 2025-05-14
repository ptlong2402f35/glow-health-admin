import React, { Fragment, useRef, useEffect } from "react";
import environments from "../../../../environment";

export function ChatPluginMessenger() {
	const messengerRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		messengerRef?.current?.setAttribute("page_id", environments.facebookChatId || "");
		messengerRef?.current?.setAttribute("attribution", "biz_inbox");

		(window as any).fbAsyncInit = function () {
			(window as any).FB.init({
				xfbml: true,
				version: "v16.0",
			});
			(window as any).FB.CustomerChat.hideDialog();
		};
		(function (d, s, id) {
			var js,
				fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s);
			js.id = id;
			(js as any).src = "https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js";
			(fjs as any).parentNode.insertBefore(js, fjs);
		})(document, "script", "facebook-jssdk");
	}, []);
	return (
		<Fragment>
			<div id="fb-root"></div>
			{/* <!-- Your Chat Plugin code --> */}
			<div
				ref={messengerRef}
				id="fb-customer-chat"
				className="fb-customerchat"></div>
		</Fragment>
	);
}

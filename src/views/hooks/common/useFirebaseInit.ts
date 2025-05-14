import { useEffect } from "react";
import environments from "../../../environment";
import Logger from "../../../utils/Logger";

declare var firebase: any;
const Log = Logger.getLogger("useFirebaseInit");

export default function useFirebaseInit() {
	useEffect(() => {
		try {
			firebase.initializeApp(environments.firebaseConfig);
			firebase.analytics();
			firebase.auth().useDeviceLanguage();
			Log.log(`done firebase.initializeApp`);
			Log.log(`window.recaptchaVerifier: ${(window as any).recaptchaVerifier}`);
		} catch (e) {
			console.log(e);
		}
	}, []);
}

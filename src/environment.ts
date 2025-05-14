declare var myState: any;
declare var process: any;

export type EnvironmentType = {
	localApiRoot?: string | null;
	localApiTimeout?: number | null;
	apiRoot?: string | null;
	uploadRoot?: string | null;
	chatApiRoot?: string | null;
	logMode?: boolean;
	googleRedirectUrl?: string | null;
	googleAuthUrl?: string | null;
	googleClientId?: string | null;
	facebookRedirectUrl?: string | null;
	facebookAuthUrl?: string | null;
	facebookClientId?: string | null;
	firebaseConfig?: any | null;
	facebookChatId?: string | null;
	workerRoot?: string | null;
	gaKey?: string | null;
	paymentDate?: number | null;
	redirecturl?: string | null;
	slidePartner?: string | null;
	googleAdsBlock?: boolean;
	domainRoot?: string;
	newStyle?: boolean;
	isLanding?: boolean;
	enableCompression?: boolean;
	redirect301?: boolean;
	apiMap?: string | null;
	mapId?: string | null;
};

const environments: EnvironmentType = {};
export default environments;

export function loadEnvironments() {
	const ssrEnv = typeof process !== "undefined" && process?.env;
	const staticEnv = typeof myState !== "undefined" && myState;
	const state = ssrEnv || staticEnv || {};

	environments.localApiRoot = state.LOCAL_API_ROOT;
	environments.localApiTimeout = state.LOCAL_API_TIMEOUT ? parseInt(state.LOCAL_API_TIMEOUT) : 0;
	environments.apiRoot = state.API_ROOT;
	environments.chatApiRoot = state.CHAT_API_ROOT;
	environments.logMode = state.LOG_MODE == "true" ? true : false;
	environments.googleRedirectUrl = state.GOOGLE_REDIRECT_URL;
	environments.googleAuthUrl = state.GOOGLE_AUTH_URL;
	environments.googleClientId = state.GOOGLE_CLIENT_ID;
	environments.facebookRedirectUrl = state.FACEBOOK_REDIRECT_URL;
	environments.facebookAuthUrl = state.FACEBOOK_AUTH_URL;
	environments.facebookClientId = state.FACEBOOK_CLIENT_ID;
	environments.firebaseConfig = state.FIREBASE_CONFIG && JSON.parse(state.FIREBASE_CONFIG);
	environments.facebookChatId = state.FACEBOOK_CHAT_ID;
	environments.workerRoot = state.WORKER_ROOT;
	environments.workerRoot = state.WORKER_ROOT;
	environments.uploadRoot = state.UPLOAD_ROOT;
	environments.gaKey = state.GA_KEY;
	environments.paymentDate = state.PAYMENT_DATE ? parseInt(state.PAYMENT_DATE) : 25;
	environments.redirecturl = state.REDIRECT_URL;
	environments.slidePartner = state.SLIDE_PARTNER;
	environments.googleAdsBlock = state.GOOGLE_ADS_BLOCK == "true" ? true : false;
	environments.domainRoot = state.DOMAIN_ROOT;
	environments.newStyle = state.IS_NEW_STYLE == "true" ? true : false;
	environments.isLanding = state.IS_LANDING == "true" ? true : false;
	environments.enableCompression = state.ENABLE_COMPRESSION == "true" ? true : false;
	environments.redirect301 = state.REDIRECT_301 == "true" ? true : false;
	environments.apiMap = state.API_MAP;
	environments.mapId = state.MAP_ID;

	// console.log(`loaded environments: `, environments);
}

loadEnvironments();

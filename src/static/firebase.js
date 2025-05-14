import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";

const firebaseConfig = JSON.parse(myState.FIREBASE_CONFIG);
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

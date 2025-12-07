import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/setup#config-object
const firebaseConfig = {

  apiKey: "AIzaSyDM-D_6KuNeK9fTNmOGt1rzwwJ1P2mgB44",

  authDomain: "imedresume-4df44.firebaseapp.com",

  projectId: "imedresume-4df44",

  storageBucket: "imedresume-4df44.firebasestorage.app",

  messagingSenderId: "282982163342",

  appId: "1:282982163342:web:25598377411307733fbadf",

  measurementId: "G-DGP03B2BL7"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };

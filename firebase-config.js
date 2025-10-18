// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyASJ20VjPPeJjlSaO3BS2JArMZUyzK7x14",
  authDomain: "abbuadmmin.firebaseapp.com",
  databaseURL: "https://abbuadmmin-default-rtdb.firebaseio.com",
  projectId: "abbuadmmin",
  storageBucket: "abbuadmmin.firebasestorage.app",
  messagingSenderId: "841974012731",
  appId: "1:841974012731:web:8da033505bdcfa5286f51e",
  measurementId: "G-PEFMF8MGX1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };
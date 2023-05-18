import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAIdEu6DyL8BHdGn6rRHULQwbO7B8b_GG8",
    authDomain: "toy-zone-c7145.firebaseapp.com",
    projectId: "toy-zone-c7145",
    storageBucket: "toy-zone-c7145.appspot.com",
    messagingSenderId: "484150688445",
    appId: "1:484150688445:web:4afc018751c95b8861d5d4"
};

const app = initializeApp(firebaseConfig);
export default app;
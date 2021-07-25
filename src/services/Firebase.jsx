import firebase from "firebase/app";
import "firebase/storage";

const configs = {
    apiKey: "AIzaSyD_OMwcUiNnWSnPr6swALbpVUoiCCo38Ck",
    authDomain: "minlaxz-sandbox.firebaseapp.com",

    databaseURL: "https://minlaxz-sandbox.firebaseio.com",

    projectId: "minlaxz-sandbox",
    storageBucket: "minlaxz-sandbox.appspot.com",
    messagingSenderId: "190524722410",
    appId: "1:190524722410:web:efab51fe5dad67bdeedb93",
};

if (!firebase.apps.length) {
    firebase.initializeApp(configs);
}

export const storage = firebase.storage();

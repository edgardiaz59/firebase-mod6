// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyBSQ71jB27h6-BbS2qWwGL73nw2IZVLDHo",
  
    authDomain: "mcc2134-fbauth-ediaz.firebaseapp.com",
  
    projectId: "mcc2134-fbauth-ediaz",
  
    storageBucket: "mcc2134-fbauth-ediaz.appspot.com",
  
    messagingSenderId: "33185095712",
  
    appId: "1:33185095712:web:d3f34ddc98010053f65c45"
  
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
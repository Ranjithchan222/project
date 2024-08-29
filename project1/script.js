  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
  import { getDatabase,ref,get,set,child } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD7MKyr21YoJW_I3JGc4j_32VrU1dOYHnc",
    authDomain: "project-1-fd0a3.firebaseapp.com",
    projectId: "project-1-fd0a3",
    storageBucket: "project-1-fd0a3.appspot.com",
    messagingSenderId: "495411512123",
    appId: "1:495411512123:web:e05c71e390eeecff086d1e",
    measurementId: "G-2P73RHN3HQ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
const db=getDatabase(app);
document.getElementById("submit").addEventListener(`click`,function(e){
    set(ref(db,`user/` + document.getElementById(`username`).value),{
        username: document.getElementById(`username`).value,
        password: document.getElementById(`password`).value

    });
    alert("login successfull")
})
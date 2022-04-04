var firebaseConfig = {
    apiKey: "AIzaSyDj28d8ydSPmqjMlGGthjWXiOEV0dfIN50",
    authDomain: "let-chat-webapp.firebaseapp.com",
    projectId: "let-chat-webapp",
    storageBucket: "let-chat-webapp.appspot.com",
    messagingSenderId: "514782019928",
    appId: "1:514782019928:web:59805581e7dba004aca52d",
    measurementId: "G-R3833L7C6H"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();


const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyD3iWSoBRTzIOanYuqvm5ePXeeCMTWVl5o",
    authDomain: "word-scramble-fb984.firebaseapp.com",
    projectId: "word-scramble-fb984",
    storageBucket: "word-scramble-fb984.appspot.com",
    messagingSenderId: "284522495002",
    appId: "1:284522495002:web:48c3e192a587616b7825a3",
    measurementId: "G-JJSH0ZMQPF"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const signup=()=>{
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    //const fullname=document.getElementById("fullname").value;
    console.log(email,password)
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
      alert("click a key to start");
      window.location.href = "signin.html";
    })
    .catch((error) => {
      alert(error.message)
    });
}

const signin=()=>{
  const email=document.getElementById("email").value;
  const password=document.getElementById("password").value;
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((result) => {
    window.location.href = "index.html";
  })
  .catch((error) => {
      alert(error.message)
  });
}
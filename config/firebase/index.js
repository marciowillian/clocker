import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyAJqawk-fh6MGzze_yPmOICsddNY3snwGM",
    authDomain: "clocker-easy.firebaseapp.com",
    projectId: "clocker-easy",
    storageBucket: "clocker-easy.appspot.com",
    messagingSenderId: "409548619254",
    appId: "1:409548619254:web:80a78c41ae553492369bd7",
    measurementId: "G-V1K7CB7GJB"
  }
  
  export default firebase.apps.length
    ? firebase.app()
    : firebase.initializeApp(firebaseConfig);
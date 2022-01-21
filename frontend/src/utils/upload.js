
import {initializeApp} from "firebase/app"
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyDF5EKbmxy1C-fGGYNxJSyrxl-fPfDKGos",
    authDomain: "docto-c3271.firebaseapp.com",
    projectId: "docto-c3271",
    storageBucket: "docto-c3271.appspot.com",
    messagingSenderId: "1004016183309",
    appId: "1:1004016183309:web:40b555dc7854ce2b310d44",
    measurementId: "G-Q9MKK3RK4Q"
  };
  // Initialize Firebase
let fire=initializeApp(firebaseConfig);

const storage =  getStorage(fire)
const sref = ref(storage)

export async function uploadFile(file){


// Create a reference to 'images/mountains.jpg'
var mountainImagesRef =ref(storage,'images/'+file.name);

  const metadata={
      type:file.type
  }
  var uploadTask = uploadBytes(mountainImagesRef, file, metadata);
   // false 
  
  var url;

    await uploadTask.then(async (snapshot)=>{
        await getDownloadURL(snapshot.ref).then((downloadURL) => { 
            url=downloadURL
        });
      })
  
    
  return url
}




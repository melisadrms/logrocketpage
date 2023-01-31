// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// const firebaseConfig = {
// apiKey: "AIzaSyDo5pYK9DCTKSOir3ifcQA745WU9KI81sw",
// authDomain: "blogproject-43069.firebaseapp.com",
// projectId: "blogproject-43069",
// storageBucket: "blogproject-43069.appspot.com",
// messagingSenderId: "606837984853",
// appId: "1:606837984853:web:d00b085851b70734928edc",
// };
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD1NQjgTGV_LQQCHLnE5LJ5uKKhxwa_JeQ",
  authDomain: "blog-eddac.firebaseapp.com",
  projectId: "blog-eddac",
  storageBucket: "blog-eddac.appspot.com",
  messagingSenderId: "998076655303",
  appId: "1:998076655303:web:a5e7ada05bfdf95d9240e2",
  measurementId: "G-X4SS3EY4BP",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

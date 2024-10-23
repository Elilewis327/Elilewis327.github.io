import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  Firestore,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBghS-EMMNZD35d5IRQgCnRXNIZes9_A4I",
  authDomain: "elilewis327portfolio.firebaseapp.com",
  projectId: "elilewis327portfolio",
  storageBucket: "elilewis327portfolio.appspot.com",
  messagingSenderId: "125413737095",
  appId: "1:125413737095:web:cfa10275423299ce90ee22",
};

class FStoreHelper {
  app: FirebaseApp;
  db: Firestore;
  data: Array<any>;

  constructor() {
    // check to see if firestore has already be initialized : initialize
    // https://firebase.google.com/docs/reference/js/app.md#getapps
    this.app =
      getApps().length !== 0 ? getApp() : initializeApp(firebaseConfig);

    this.db = getFirestore(this.app);

    this.data = [];
  }

  async query(TargetCollection: string) {
    try {
      const result = await getDocs(collection(this.db, TargetCollection));

      result.forEach((doc) => {
        this.data.push(doc.data());
      });

    } catch {
      Error("ahh");
    }
  }
}

export default FStoreHelper;

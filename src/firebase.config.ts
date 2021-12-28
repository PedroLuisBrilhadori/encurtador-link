import { ServiceAccount } from "firebase-admin";
import * as admin from "firebase-admin";

export function InitFirebase() {
   const adminConfig: ServiceAccount = JSON.parse(process.env.FIREBASE);

   admin.initializeApp({
      credential: admin.credential.cert(adminConfig),
      databaseURL: "https://link-enc-default-rtdb.firebaseio.com",
   });
}

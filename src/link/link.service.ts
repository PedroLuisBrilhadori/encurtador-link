import { Injectable } from "@nestjs/common";
import { LinkCut } from "./models";

import { ConfigService } from "@nestjs/config";

import * as admin from "firebase-admin";
import { ServiceAccount } from "firebase-admin";
import { Reference } from "@firebase/database-types";
import { Database } from "firebase-admin/lib/database/database";
@Injectable()
export class LinkService {
   private db: Database;
   private ref: Reference;

   constructor(configService: ConfigService) {
      const adminConfig: ServiceAccount = {
         projectId: configService.get<string>("FIREBASE_PROJECT_ID"),
         privateKey: configService
            .get<string>("FIREBASE_PRIVATE_KEY")
            .replace(/\\n/g, "\n"),
         clientEmail: configService.get<string>("FIREBASE_CLIENT_EMAIL"),
      };

      admin.initializeApp({
         credential: admin.credential.cert(adminConfig),
         databaseURL: "https://link-enc-default-rtdb.firebaseio.com",
      });
      this.db = admin.database();
      this.ref = this.db.ref();
   }

   createLink(): string {
      let link: string = "";
      const possibleChars: string =
         "abcdefghijklmnopqrstuvwxyz+ABCDEFGHIJKLMNOPQRSTUVWXYZ-0123456789";

      for (let i = 0; i < 5; i++)
         link +=
            possibleChars[
               Math.floor(Math.random() * (possibleChars.length - 0) + 0)
            ];
      return link;
   }

   saveLink(link: LinkCut): LinkCut {
      this.ref
         .child(link.id)
         .set(link)
         .then((error) => {
            if (error) console.log(error);
         });
      return link;
   }

   getLinks() {
      let val;
      this.ref.on("value", (snap) => {
         val = snap.val();
      });
      return val;
   }
}

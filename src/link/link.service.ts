import { Injectable, OnModuleInit } from "@nestjs/common";
import { LinkCut } from "./models";
import { Reference } from "@firebase/database-types";

import * as admin from "firebase-admin";
import { Database } from "firebase-admin/lib/database/database";

@Injectable()
export class LinkService implements OnModuleInit {
   ref: Reference;

   constructor() {
      this.ref = admin.database().ref();
   }

   onModuleInit() {
      this.ref.on("value", (snap) => snap.val());
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
   getLink(id: string) {
      let val;
      this.ref
         .orderByKey()
         .equalTo(id)
         .on("value", (snap) => {
            val = snap.val();
         });
      if (val) return val[id];
      return val;
   }
}

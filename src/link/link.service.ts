import { Injectable } from "@nestjs/common";
import { LinkCut } from "./models";

import * as admin from "firebase-admin";

@Injectable()
export class LinkService {
   constructor() {}

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
      admin
         .database()
         .ref()
         .child(link.id)
         .set(link)
         .then((error) => {
            if (error) console.log(error);
         });
      return link;
   }

   getLinks() {
      let val;
      admin
         .database()
         .ref()
         .on("value", (snap) => {
            val = snap.val();
         });
      return val;
   }

   getLink(id: string) {
      let links = this.getLinks();
      if (links) return links[id];
   }
}

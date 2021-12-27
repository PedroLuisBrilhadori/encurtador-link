import { Controller, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { LinkService } from "./link.service";
import { LinkCut } from "./models";

const URL = "https://localhost:3000/";

let FAKE_DB: LinkCut;

@Controller("link")
export class LinkController {
   constructor(private linkService: LinkService) {}

   @Post("create")
   createLinks(@Req() request: Request) {
      this._saveLink(request.query.link.toString(), this._createLink());
      return FAKE_DB;
   }

   private _createLink(): string {
      return this.linkService.createLink();
   }

   private _saveLink(bigLink: string, id: string) {
      FAKE_DB = {
         id: id,
         bigLink: bigLink,
         smallLink: URL + "redirect/" + id,
      };
   }
}

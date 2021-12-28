import { Controller, Get, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { LinkService } from "./link.service";
import { LinkCut } from "./models";

const URL = "http://localhost:3000/";

@Controller("link")
export class LinkController {
   constructor(private linkService: LinkService) {}

   @Post("create")
   createLinks(@Req() request: Request) {
      return this._saveLink(request.query.link.toString(), this._createLink());
   }

   private _createLink(): string {
      return this.linkService.createLink();
   }

   private _saveLink(bigLink: string, id: string) {
      const link: LinkCut = {
         id: id,
         bigLink: bigLink.includes("http") ? bigLink : "https://" + bigLink,
         smallLink: URL + "redirect/" + id,
      };

      return this.linkService.saveLink(link);
   }

   @Get("my-links")
   getLinks() {
      return this.linkService.getLinks();
   }
}

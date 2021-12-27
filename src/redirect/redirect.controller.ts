import { Controller, Get, Param, Redirect, Res } from "@nestjs/common";
import { LinkCut } from "src/link/models";
import { Response } from "express";

const fake_redirect = {
   id: "lWvlu",
   bigLink: "www.google.com",
   smallLink: "https://localhost:3000/redirect/lWvlu",
};
@Controller("redirect")
export class RedirectController {
   @Get()
   linkNotFound(): string {
      return "link not found";
   }

   @Get("/:id")
   redirect(@Param() params, @Res() res: Response) {
      res.status(301).redirect("https://" + this._getLink(params.id).bigLink);
   }

   private _getLink(id: string): LinkCut {
      // isso utilizará um serviço
      return fake_redirect;
   }
}

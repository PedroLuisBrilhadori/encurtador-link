import { Controller, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { LinkCut } from "./models";

const URL = "https://localhost:3000/";

let FAKE_DB: LinkCut;

@Controller("link")
export class LinkController {
  @Post("create")
  createLinks(@Req() request: Request) {
    this._saveLink(request.query.link.toString(), this._createLink());

    return FAKE_DB;
  }

  private _createLink(): string {
    let link: string = "";
    const possibleChars: string =
      "abcdefghijklmnopqrstuvwxyz+ABCDEFGHIJKLMNOPQRSTUVWXYZ-0123456789";

    for (let i = 0; i < 5; i++)
      link +=
        possibleChars[
          Math.floor(Math.random() * (possibleChars.length - 0) + 0)
        ];

    return URL + link;
  }

  private _saveLink(bigLink: string, smallLink: string) {
    FAKE_DB = {
      bigLink: bigLink,
      smallLink: smallLink,
    };
  }
}

import { Controller, Post, Req } from "@nestjs/common";
import { Request } from "express";

const URL = "https://localhost:3000/";

@Controller("link")
export class LinkController {
  @Post("create")
  createLinks(@Req() request: Request): string {
    console.log(request.query);
    return this._createLink();
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
}

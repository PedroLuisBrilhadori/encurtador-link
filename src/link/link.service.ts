import { Injectable } from "@nestjs/common";

@Injectable()
export class LinkService {
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
}

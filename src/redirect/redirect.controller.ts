import { Controller, Get } from "@nestjs/common";

const fake_redirect = {
    id: "cdglc",
    bigLink: "www.google.com",
    smallLink: "https://localhost:3000/cdglc",
};

@Controller("redirect")
export class RedirectController {
    @Get(":link")
    redirect(): string {
        return "";
    }
}

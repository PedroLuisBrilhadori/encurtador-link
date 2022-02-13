import { Controller, Get } from "@nestjs/common";

@Controller(".well-known/acme-challenge")
export class WellKnownController {
   @Get("ejXvLN2ByCIRsGtZdCXsIHKFxSAkM3VkVNo259eGn-Y")
   getFile() {
      return "ejXvLN2ByCIRsGtZdCXsIHKFxSAkM3VkVNo259eGn-Y.KlenFlvuJ7vyRKw_UTkg9LmqKPdkm5Lxhu_Xo8BWgtQ";
   }
}

import { Module } from "@nestjs/common";
import { LinkService } from "src/link";
import { RedirectController } from "./redirect.controller";

@Module({
   controllers: [RedirectController],
   providers: [LinkService],
})
export class RedirectModule {}

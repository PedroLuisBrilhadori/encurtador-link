import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { LinkModule } from "./link";
import { RedirectModule } from "./redirect/redirect.module";
import { WellKnownModule } from "./well-known/well-known.module";

@Module({
   imports: [LinkModule, RedirectModule, WellKnownModule],
   controllers: [AppController],
   providers: [AppService],
})
export class AppModule {}

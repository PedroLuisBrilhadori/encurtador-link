import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { LinkModule } from "./link/link.module";
import { RedirectModule } from "./redirect/redirect.module";

@Module({
    imports: [LinkModule, RedirectModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

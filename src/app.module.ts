import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { LinkModule } from "./link/link.module";
import { RedirectModule } from "./redirect/redirect.module";

@Module({
   imports: [LinkModule, RedirectModule, ConfigModule.forRoot()],
   controllers: [AppController],
   providers: [AppService],
})
export class AppModule {}

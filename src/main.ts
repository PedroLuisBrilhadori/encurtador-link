import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { InitFirebase } from "./firebase.config";
import * as dotenv from "dotenv";

dotenv.config();

InitFirebase();

async function bootstrap() {
   const app = await NestFactory.create(AppModule);
   app.enableCors();
   await app.listen(process.env.PORT || 3000);
}
bootstrap();

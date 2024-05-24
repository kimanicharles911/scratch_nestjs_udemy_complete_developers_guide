import { NestFactory } from '@nestjs/core';
import AppMainModule from './appmain.module';

async function engine() {
  const app = await NestFactory.create(AppMainModule);
  await app.listen(3000);
}

engine();
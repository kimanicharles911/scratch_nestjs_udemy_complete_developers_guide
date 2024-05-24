import { Controller, Module, Get } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

@Controller()
class AppController {
  @Get()
  getRootRoute(){
    return 'Hi there';
  }
}

@Module({ controllers: [AppController] })
class AppMainModule {

}

async function engine() {
  const app = await NestFactory.create(AppMainModule);
  await app.listen(3000);
}

engine();
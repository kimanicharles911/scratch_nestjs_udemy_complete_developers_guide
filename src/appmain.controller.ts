import {  Controller, Get } from '@nestjs/common';

@Controller()
class AppMainController {
  @Get()
  getRootRoute(){
    return 'Hi there!'
  }
}

export default AppMainController;
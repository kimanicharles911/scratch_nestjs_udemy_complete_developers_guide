import { Module } from '@nestjs/common';
import AppMainController from './appmain.controller'

@Module({ controllers: [AppMainController] })
class AppMainModule {

}

export default AppMainModule;
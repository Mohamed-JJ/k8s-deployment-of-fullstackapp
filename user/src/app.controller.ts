import { Controller, Get } from '@nestjs/common';
import { AppService, user } from './app.service';



@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('user/all')
  getHello(): user[] {
    return this.appService.getUsers();
  }

  @Get('user/count')
  getUsersCount(){
    return this.appService.getUserCount();
  }
}

import { Controller, Get, HttpCode, ParseArrayPipe, Query, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import express from 'express';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
   
  // @Get(':id')
  // fatchRequest(@Req() req:express.Request, @Res() res:express.Response): any {
  //   const {id} = req.params;
  //   const queryParameter = req.query;
  //   const headers = req.headers;
  //   return res.status(200).send({
  //     message: 'Request Fatch Successfully',
  //     id,
  //     queryParameter,
  //     headers
  //   });
  // }

  // @Get('fetch')
  // @HttpCode(200)
  // fatchQueryParameter(
  //   @Query('id') id:string ,
  //   @Query("name") name:string,
  //   @Query('age') age:number, @Res() res: express.Response): any {

  //   return res.status(202).send( {
  //     message: 'Query Parameter Fatch Successfully',
  //     name,
  //     id,
  //     age
  //   }); 
  // }

  @Get()
  getHello(@Query('num', ParseArrayPipe) num:number[]): any {
    return num                          
  }
}
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HolidayListModule } from './holiday-list/holiday-list.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    HolidayListModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

import { Module } from '@nestjs/common';
import { HolidayListService } from './holiday-list.service';
import { HolidayListController } from './holiday-list.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HolidayListRepository } from './holiday-list.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([HolidayListRepository]),
  ],
  controllers: [HolidayListController],
  providers: [HolidayListService],
})
export class HolidayListModule { }

import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { HolidayListService } from './holiday-list.service';
import { HolidayList } from './holiday-list.entity';
import { CreateHolidayListDto } from './dto/create-holiday-list.dto';
import { HolidayFilterDto } from './dto/holiday-filter.dto';

@Controller('holiday-list')
export class HolidayListController {

    constructor(private readonly holidayListService: HolidayListService) { }

    @Get()
    async getHolidayList(
        @Query() queryFilterDto: HolidayFilterDto
    ): Promise<HolidayList[]> {
        return await this.holidayListService.getHolidayList(queryFilterDto);
    }

    @Post()
    CreateHolidayList(
        @Body() createHolidayListDto: CreateHolidayListDto
    ): Promise<HolidayList> {
        return this.holidayListService.createHolidayList(createHolidayListDto);
    }
}

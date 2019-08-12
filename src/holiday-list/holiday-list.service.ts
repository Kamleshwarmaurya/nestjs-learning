import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Holiday } from './interface/holiday.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { HolidayList } from './holiday-list.entity';
import { Repository } from 'typeorm';
import { CreateHolidayListDto } from './dto/create-holiday-list.dto';
import { HolidayListRepository } from './holiday-list.repository';
import { HolidayFilterDto } from './dto/holiday-filter.dto';

@Injectable()
export class HolidayListService {
    constructor(
        @InjectRepository(HolidayListRepository)
        private holidayListRepository: HolidayListRepository
    ) { }

    async getHolidayList(queryFilterDto: HolidayFilterDto): Promise<HolidayList[]> {
        return await this.holidayListRepository.getHolidayList(queryFilterDto);
    }

    async createHolidayList(createHolidayListDto: CreateHolidayListDto): Promise<HolidayList> {
        return this.holidayListRepository.createHolidayList(createHolidayListDto);
    }
}

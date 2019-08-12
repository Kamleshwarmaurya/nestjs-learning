import { Repository, EntityRepository } from "typeorm";
import { HolidayList } from "./holiday-list.entity";
import { CreateHolidayListDto } from "./dto/create-holiday-list.dto";
import { InternalServerErrorException } from "@nestjs/common";
import { HolidayFilterDto } from "./dto/holiday-filter.dto";

@EntityRepository(HolidayList)
export class HolidayListRepository extends Repository<HolidayList> {

    /**
     * Get Holiday List
     * @returns {Promise< HolidayList[]>}
     * @memberof HolidayListRepository
     */
    async getHolidayList(queryFilterDto: HolidayFilterDto): Promise<HolidayList[]> {
        const { region, officeLocation, year } = queryFilterDto;
        const query = this.createQueryBuilder('HolidayList');

        if (region) {
            query.andWhere('HolidayList.region = :region', { region });
        }

        if (officeLocation) {
            query.andWhere('HolidayList.officeLocation = :officeLocation', { officeLocation });
        }

        if (year) {
            query.andWhere('HolidayList.holidayDate = :year', { year });
        }

        try {
            const holidayList = await query.getMany();
            return holidayList;
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }

    /**
     * Create Holiday List
     * @param {CreateHolidayListDto} createHolidayListdto
     * @returns
     * @memberof HolidayListRepository
     */
    async createHolidayList(createHolidayListdto: CreateHolidayListDto): Promise<HolidayList> {
        const {
            holidayName,
            holidayDate,
            officeLocation,
            holidayType,
            holidayDay,
            region
        } = createHolidayListdto;
        console.log(createHolidayListdto);

        const holidayList = new HolidayList();
        holidayList.holidayName = holidayName;
        holidayList.holidayDate = holidayDate
        holidayList.officeLocation = officeLocation;
        holidayList.holidayType = holidayType;
        holidayList.holidayDay = holidayDay;
        holidayList.region = region;
        try {
            await holidayList.save();
        } catch (error) {
            throw new InternalServerErrorException()
        }
        return holidayList;
    }

}

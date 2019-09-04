import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class HolidayList extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    holidayName: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    holidayDate: string;

    @Column()
    holidayDay: string

    @Column()
    officeLocation: string;

    @Column()
    holidayType: string;

    @Column()
    region: string;
}

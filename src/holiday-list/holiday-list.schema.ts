import * as mongoose from 'mongoose';

export const HolidayListSchema = new mongoose.Schema({
  holidayName: String,
  holidayDate: String,
  country: String,
  location: String,
});

import { Holiday, HolidayConfig, YYYYMMDD } from "./types";
import holidaysConfig from "../holidays.json";

export class HolidayManager {
  private config: HolidayConfig;

  constructor() {
    this.config = holidaysConfig;
  }

  getHolidaysByState(uf: string): Holiday[] {
    return this.config.estaduais[uf] || [];
  }

  getNationalHolidays(): Holiday[] {
    return this.config.nacionais;
  }

  isHoliday(date: YYYYMMDD, uf?: string): boolean {
    const allHolidays = [
      ...this.config.nacionais,
      ...(uf ? this.getHolidaysByState(uf) : []),
    ];

    return allHolidays.some((holiday) => {
      if (holiday.data.match(/^\d{2}-\d{2}$/)) {
        const [, month, day] = date.split("-");
        return holiday.data === `${month}-${day}`;
      }

      return holiday.data === date;
    });
  }
}

import { Holiday, HolidayConfig } from "./types";
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

  isHoliday(date: string, uf?: string): boolean {
    const allHolidays = [
      ...this.config.nacionais,
      ...(uf ? this.getHolidaysByState(uf) : []),
    ];
    return allHolidays.some((holiday) => holiday.data === date);
  }
}

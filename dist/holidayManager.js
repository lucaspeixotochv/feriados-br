"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HolidayManager = void 0;
const holidays_json_1 = __importDefault(require("../holidays.json"));
class HolidayManager {
    constructor() {
        this.config = holidays_json_1.default;
    }
    getHolidaysByState(uf) {
        return this.config.estaduais[uf] || [];
    }
    getNationalHolidays() {
        return this.config.nacionais;
    }
    isHoliday(date, uf) {
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
exports.HolidayManager = HolidayManager;

export interface Holiday {
  data: string;
  nome: string;
}

export interface HolidayConfig {
  nacionais: Holiday[];
  estaduais: Record<string, Holiday[]>;
}

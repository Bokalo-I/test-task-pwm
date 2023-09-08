import { SortOrder } from '../constants';

export type ObjectValuesType<T extends object> = T[keyof T];

export type SortOrderType = ObjectValuesType<typeof SortOrder>;

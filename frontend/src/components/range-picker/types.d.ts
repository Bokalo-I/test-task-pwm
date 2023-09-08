import { ReactNode } from 'react';

export type RangePickerProps = {
  min: number;
  max: number;
  defaultMin: number;
  defaultMax: number;
  unit?: ReactNode;
  onChange: ([number, number]) => void;
};

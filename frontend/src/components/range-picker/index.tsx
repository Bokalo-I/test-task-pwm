import { FC, useState } from 'react';
import { RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Text } from '@chakra-ui/react';

import type { RangePickerProps } from './types';

const RangePicker: FC<RangePickerProps> = ({ min, max, defaultMin, defaultMax, unit = '', onChange }) => {
  const [[currentMin, currentMax], setRange] = useState([defaultMin, defaultMax]);

  const handleChange = (range: [number, number]) => {
    setRange(range);
    onChange(range);
  };

  return (
    <RangeSlider
      mt='20px'
      aria-label={['min', 'max']}
      defaultValue={[defaultMin, defaultMax]}
      min={min}
      max={max}
      onChange={handleChange}
    >
      <RangeSliderTrack>
        <RangeSliderFilledTrack />
      </RangeSliderTrack>
      <RangeSliderThumb index={0}>
        <Text position='absolute' top='-22px'>
          {currentMin}
          {unit}
        </Text>
      </RangeSliderThumb>
      <RangeSliderThumb index={1}>
        <Text position='absolute' top='-22px'>
          {currentMax}
          {unit}
        </Text>
      </RangeSliderThumb>
    </RangeSlider>
  );
};

export default RangePicker;

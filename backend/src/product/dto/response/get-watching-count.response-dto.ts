import { ApiProperty } from '@nestjs/swagger';

export class GetWatchingCountResponseDto {
  @ApiProperty()
  count: number;
}

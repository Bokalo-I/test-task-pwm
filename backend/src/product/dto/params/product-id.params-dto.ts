import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class ProductIdParamsDto {
  @IsUUID(4)
  @ApiProperty()
  productId: string;
}

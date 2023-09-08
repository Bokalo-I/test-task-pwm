import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsBoolean, IsIn, IsNumber, IsOptional, IsString } from 'class-validator';

import { ProductSortBy } from '@/product/constants';
import { ProductSortByType } from '@/product/types';
import { SortOrder } from '@/shared/common/constants';
import { SortOrderType } from '@/shared/common/types';

export class GetAllProductsQueryDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  search?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  title?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  description?: string;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  @ApiPropertyOptional()
  priceFrom?: number;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  @ApiPropertyOptional()
  priceTo?: number;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  @ApiPropertyOptional({ type: Number })
  ratingFrom?: number;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  @ApiPropertyOptional({ type: Number })
  ratingTo?: number;

  @IsBoolean()
  @IsOptional()
  @Transform(({ value }) => value === 'true' || value === true)
  @ApiPropertyOptional()
  onlyWatchList?: boolean;

  @IsIn(Object.values(ProductSortBy))
  @IsOptional()
  @ApiPropertyOptional()
  sortBy?: ProductSortByType;

  @IsIn(Object.values(SortOrder))
  @IsOptional()
  @ApiPropertyOptional()
  sortOrder?: SortOrderType;
}

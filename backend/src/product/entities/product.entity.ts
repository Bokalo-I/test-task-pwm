import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Column, Entity } from 'typeorm';
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, IsUrl } from 'class-validator';

import { BaseEntity } from '@/shared/database/entities/base.entity';

@Entity({ name: 'products' })
export class ProductEntity extends BaseEntity {
  @Column()
  @IsUrl()
  @ApiProperty()
  image: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  title: string;

  @Column({ type: 'varchar', nullable: true })
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  description: string | null;

  @Column({ type: 'float' })
  @IsNumber({ maxDecimalPlaces: 2 })
  @ApiProperty()
  price: number;

  @Column()
  @IsNumber({ maxDecimalPlaces: 0 })
  @ApiProperty()
  rating: number;

  @Column()
  @IsBoolean()
  @ApiProperty()
  isInWatchList: boolean;
}

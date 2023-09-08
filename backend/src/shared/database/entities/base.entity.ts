import { ApiProperty } from '@nestjs/swagger';
import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  id: string;

  @CreateDateColumn()
  @ApiProperty()
  createdAt: string;

  @UpdateDateColumn()
  @ApiProperty()
  updatedAt: string;
}

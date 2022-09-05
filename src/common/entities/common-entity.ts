import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsNumber } from 'class-validator';
import {
  BaseEntity,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

/**
 * @code writer 김현균
 * @description Entity 기본 형태
 */
export abstract class CommonEntity extends BaseEntity {
  @ApiProperty({
    example: 1,
    description: 'id',
    required: false,
  })
  @IsNumber()
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ApiProperty({
    example: '2022-07-13T04:22:24.489Z',
    description: '생성일',
    required: false,
  })
  @CreateDateColumn({
    type: 'datetime',
    comment: '생성일',
  })
  createAt: Date;

  @ApiProperty({
    example: '2022-07-13T04:22:24.489Z',
    description: '수정일',
    required: false,
  })
  @UpdateDateColumn({ type: 'datetime', comment: '수정일' })
  updateAt: Date;

  @ApiProperty({
    example: '2022-07-13T04:22:24.489Z',
    description: '삭제일',
    required: false,
  })
  @Exclude()
  @DeleteDateColumn({ type: 'datetime', comment: '삭제일' })
  deleteAt?: Date | null;
}

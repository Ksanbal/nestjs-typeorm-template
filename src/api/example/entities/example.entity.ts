import { ApiProperty } from '@nestjs/swagger';
import { CommonEntity } from '../../../common/entities/common-entity';
import { Column, Entity } from 'typeorm';

/**
 * @code writer 작성자명
 * @description Example 모델 정의
 */
@Entity({
  name: 'example',
})
export class ExampleEntity extends CommonEntity {
  @ApiProperty({
    example: '제목입니다.',
    required: true,
  })
  @Column({ type: 'varchar', length: 50, nullable: false, comment: '제목' })
  title: string;
}

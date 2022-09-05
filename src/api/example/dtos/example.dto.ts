import { PickType } from '@nestjs/swagger';
import { ExampleEntity } from '../entities/example.entity';

/**
 * @code writer 작성자명
 * @description dto 정의
 */
export class ExampleDto extends PickType(ExampleEntity, ['id', 'title']) {
  constructor(exampleEntity: ExampleEntity) {
    super();
    this.id = exampleEntity.id;
    this.title = exampleEntity.title;
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExampleEntity } from './entities/example.entity';

@Injectable()
export class ExampleService {
  constructor(
    @InjectRepository(ExampleEntity)
    private readonly exampleRepository: Repository<ExampleEntity>,
  ) {}

  /**
   * @code writer 작성자명
   * @description 자유게시판 생성 API
   *
   * @param
   *
   * @return
   */
  async example() {
    return 'Example API!';
  }
}

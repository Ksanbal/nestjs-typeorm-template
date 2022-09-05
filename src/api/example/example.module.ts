import { Module } from '@nestjs/common';
import { ExampleService } from './example.service';
import { ExampleController } from './example.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExampleEntity } from './entities/example.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExampleEntity])],
  providers: [ExampleService],
  controllers: [ExampleController],
})
export class ExampleModule {}

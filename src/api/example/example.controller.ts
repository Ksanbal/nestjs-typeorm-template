import { Controller, Get } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CommonResponse } from '../../common/responses/common.response';
import { ExmapleAPIDocs } from './docs/example.docs';
import { ExampleService } from './example.service';

@ApiTags('Example')
@Controller('example')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  /**
   * @code writer 작성자명
   * @description API 설명
   *
   * @POST ("/example")
   *
   * @returns json
   */
  @Get()
  @ApiOperation(ExmapleAPIDocs.ExampleOperation())
  @ApiOkResponse(CommonResponse.OkResponse())
  @ApiBadRequestResponse(CommonResponse.BadRequestException())
  async example() {
    return this.exampleService.example();
  }
}

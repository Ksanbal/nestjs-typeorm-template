import { ApiProperty } from '@nestjs/swagger';

/**
 * @code writer 김현균
 * @description API Docs Response 기본 형식
 */
class BaseResponse {
  @ApiProperty({})
  success: boolean;

  @ApiProperty({})
  timestamp: Date;

  @ApiProperty({})
  message: string;
}

/**
 * @code writer 김현균
 * @description API Docs Exception 기본 형식
 */
class BaseException {
  @ApiProperty({
    example: false,
  })
  success: boolean;

  @ApiProperty({})
  timestamp: Date;

  @ApiProperty({})
  message: string;
}

/**
 * @code writer 김현균
 * @description API Docs Response 형식 생성 함수
 *
 * @param dto: object
 * @param isArray: boolean
 */
export function responseFormatter(dto: object, isArray = false) {
  class ResponseOne extends BaseResponse {
    @ApiProperty({
      type: dto,
    })
    data: object;
  }

  class ResponseList extends BaseResponse {
    @ApiProperty({
      type: dto,
      isArray: true,
    })
    data: object;
  }

  return !isArray ? ResponseOne : ResponseList;
}

/**
 * @code writer 김현균
 * @description API Docs Exception 형식 생성 함수
 *
 * @param type: object
 * @param isArray: boolean
 */
export function exceptionFormatter(type: object, isArray = false) {
  class ExceptionOne extends BaseException {
    @ApiProperty({
      type,
    })
    data: any;
  }

  class ExceptionList extends BaseException {
    @ApiProperty({
      type,
      isArray: true,
    })
    data: any;
  }

  return !isArray ? ExceptionOne : ExceptionList;
}

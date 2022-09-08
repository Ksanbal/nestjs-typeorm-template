import {
  exceptionFormatter,
  responseFormatter,
} from '../utils/responseFormatter.utils';

/**
 * @code writer 김현균
 * @description API Docs용 기본 Response
 */
export class CommonResponse {
  // 200
  static OkResponse() {
    return {
      description: 'Ok',
      type: responseFormatter({}),
    };
  }

  // 204
  static NoContentResponse() {
    return {
      description: 'No Content',
    };
  }

  // 400
  static BadRequestException() {
    return {
      description: 'Bad Request',
      type: exceptionFormatter(String, true),
    };
  }

  // 401
  static UnauthorizedException() {
    return {
      description: 'Unauthorized',
      type: exceptionFormatter({}),
    };
  }

  // 403
  static ForbiddenException() {
    return {
      description: 'Forbidden',
      type: exceptionFormatter({}),
    };
  }

  // 404
  static NotFoundException() {
    return {
      description: 'Not Found',
      type: exceptionFormatter({}),
    };
  }

  // 409
  static ConflictException() {
    return {
      description: 'Conflict',
      type: exceptionFormatter({}),
    };
  }
}

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# NestJS & TypeORM Template

## Description

NestJS & TypeORM(sqlite3) 프로젝트 기본 템플릿입니다.

- Swagger
- HttpException & ResponseInterceptor
- Request Logger
- Example API

## Version

- Node : v16.17.0
- NPM : 8.15.0

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Docker

```bash
# Build
docker build -t nestjs-typeorm-template .

# RUN
docker run -d -p 3000:3000 nestjs-typeorm-template
```

## Stay in touch

- Author - [dev.ksanbal](https://github.com/Ksanbal)
- Blog - [https://devksanbal.notion.site](https://devksanbal.notion.site/dev-ksanbal-93ace024e8c24f55b06830ca6473e7e4)

## License

[MIT licensed](LICENSE).

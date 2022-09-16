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
- Yarn : 1.22.19

## Installation

```bash
# npm
$ npm install

# yarn
$ yarn
```

## Running the app

```bash
# npm
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# yarn
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# npm
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov

# yarn
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
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

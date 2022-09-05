import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const typeOrmAsyncModuleOptions = {
  useFactory: async (): Promise<TypeOrmModuleOptions> => ({
    namingStrategy: new SnakeNamingStrategy(),
    type: 'sqlite',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    database: 'database.db',
    synchronize: process.env.MODE == 'dev', //! set 'false' in production
    autoLoadEntities: true,
    logging: process.env.MODE == 'dev',
  }),
};

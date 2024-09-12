import { ConfigModule, ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';

ConfigModule.forRoot({
  envFilePath: `.${process.env.NODE_ENV}.env`,
});

const configService = new ConfigService();

console.log(process.env.NODE_ENV)
console.log(configService.get('PORT'))
export const DataSourceConfig: DataSourceOptions = {
  type: 'postgres',
  host: configService.get('DB_HOST') || 'localhost',
  port: configService.get('DB_PORT') || 5433,
  username: configService.get('DB_USER') || 'MS_PRODUCTO',
  password: configService.get('DB_PASSWORD') || 'producto2024',
  database: configService.get('DB_NAME') || 'DB_PRODUCTO',
  entities: [__dirname + '/../../domain/entities/*.entity{.ts,.js}'],
  synchronize: true,
};


export const AppDS = new DataSource(DataSourceConfig);
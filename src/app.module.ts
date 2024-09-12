import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './infrastructure/controllers/app.controller';
import { AppService } from './application/service/app.service';
import { ProductEntity } from 'src/domain/entities/product.entity';
import { DataSourceConfig } from './infrastructure/config/data.source';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    // TypeOrmModule.forRoot({ ...DataSourceConfig }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [__dirname + '/../../domain/entities/*.entity{.ts,.js}'],
      }),
    }),
    TypeOrmModule.forFeature([ProductEntity]),
    ],
    
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

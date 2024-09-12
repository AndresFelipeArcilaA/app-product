import { Controller, Get } from '@nestjs/common';
import { AppService } from '../../application/service/app.service';
import { ProductEntity } from 'src/domain/entities/product.entity';

@Controller("/producto")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/filtrar")
  findAll(): Promise<ProductEntity[]> {
    return this.appService.findAll();
  }
}

import { Injectable } from '@nestjs/common';
import { ProductEntity } from '../../domain/entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductDto } from '../dto/product.dto';
import { ProductMapper } from 'src/infrastructure/mappers/product.mapper';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productoRepository: Repository<ProductEntity>,
  ) {}

  async findAll(): Promise<ProductDto[]> {
    const products = await this.productoRepository.find();
    return products.map(ProductMapper.toDto);
  }
  
}

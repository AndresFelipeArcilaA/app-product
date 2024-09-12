import { ProductDto } from "src/application/dto/product.dto";
import { ProductEntity } from "src/domain/entities/product.entity";

export class ProductMapper{

    static toDto(entity: ProductEntity):ProductDto{

        const dto = new ProductDto();

        dto.id = entity.id
        dto.name = entity.name
        dto.description = entity.description
        dto.price = entity.price
        dto.quantity = entity.quantity
        dto.image = entity.image

        return dto
    }

    static toEntity(dto: ProductDto):ProductEntity{

        const entity = new ProductEntity();

        entity.id = dto.id
        entity.name = dto.name
        entity.description = dto.description
        entity.price = dto.price
        entity.quantity = dto.quantity
        entity.image = dto.image
        
        return entity;
    }
}
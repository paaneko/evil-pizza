import type {
  DoughSpecDto,
  IndigrientDto,
  ProductDto,
  SizeSpecDto,
  ToppingsDto,
} from '../api/types';
import type {
  IndigrientType,
  ProductType,
  SizeSpecType,
  ToppingsType,
} from '../model/types';

/**
 * 🧠 Think About It
 *
 * ⚠️ Probably Bad Practice
 *
 * The data collected by this application is sent to a server written by me using Laravel.
 * Before sending the data, I can modify the data that will be sent, so on one hand,
 * DTO seems unnecessary. However, in my opinion, there are two reasons to use it:
 *
 * 1. If I ever need to rename a property on the server,
 * I only need to modify the name in the DTO object on the frontend,
 * rather than in all the places where it is used.
 *
 * 2. For the logic of selecting current toppings or ingredients for each product,
 * I will need an additional property like "selected: true | false" for each object.
 * This is where DTO comes in handy, as it allows me to easily incorporate such properties.
 */

export function mapSizeSpec(dto: SizeSpecDto): SizeSpecType {
  return {
    id: dto.id,
    productId: dto.productId,
    name: dto.name,
    extraPrice: dto.extraPrice,
    extraWeight: dto.extraWeight,
    extraToppingsPrice: dto.extraToppingsPrice,
    extraToppingsWeightRate: dto.extraToppingsWeightRate,
  };
}

export function mapDoughSpec(dto: DoughSpecDto): DoughSpecDto {
  return {
    id: dto.id,
    productId: dto.productId,
    name: dto.name,
    extraPrice: dto.extraPrice,
    extraWeight: dto.extraWeight,
  };
}

export function mapIngredient(dto: IndigrientDto): IndigrientType {
  return {
    id: dto.id,
    name: dto.name,
    required: dto.required,
    excluded: false,
  };
}

export function mapTopping(dto: ToppingsDto): ToppingsType {
  return {
    id: dto.id,
    name: dto.name,
    extraPrice: dto.extraPrice,
    extraWeight: dto.extraWeight,
    thumbnail: dto.thumbnail,
    selected: false,
  };
}

export function mapProduct(dto: ProductDto): ProductType {
  return {
    id: dto.id,
    name: dto.name,
    categoryId: dto.categoryId,
    subCategoryId: dto.subCategoryId,
    oldPrice: dto.oldPrice,
    newPrice: dto.newPrice,
    weight: dto.weight,
    purchasesCount: dto.purchasesCount,
    thumbnail: dto.thumbnail,
    slug: dto.slug,
    selectedSizeId: dto.selectedSizeId,
    selectedDoughId: dto.selectedDoughId,
    category: {
      id: dto.category.id,
      name: dto.category.name,
      slug: dto.category.slug,
    },
    subCategory: {
      id: dto.subCategory.id,
      name: dto.subCategory.name,
      slug: dto.subCategory.slug,
    },
    doughSpecs: dto.doughSpecs.map((item) => mapDoughSpec(item)),
    sizeSpecs: dto.sizeSpecs.map((item) => mapSizeSpec(item)),
    ingredients: dto.ingredients.map((item) => mapIngredient(item)),
    toppings: dto.toppings.map((item) => mapTopping(item)),
  };
}

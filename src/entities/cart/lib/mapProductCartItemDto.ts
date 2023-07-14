import type { ProductCartItemType } from '@entities/productCartItem';
import type { ProductCartItemDto } from '../api/types';

export function mapProductCartItemDto(
  dto: ProductCartItemType
): ProductCartItemDto {
  return {
    productId: dto.productId,
    selectedSizeId: dto.selectedSize ? dto.selectedSize.id : null,
    selectedDoughId: dto.selectedDough ? dto.selectedDough.id : null,
    removedIngredientsId: dto.removedIngredients.map((ingr) => ingr.id),
    selectedToppingsId: dto.selectedToppings.map((topping) => topping.id),
  };
}

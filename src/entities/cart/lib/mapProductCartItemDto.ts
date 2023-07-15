import type { ProductCartItemType } from '@entities/productCartItem';
import type { ProductCartItemDto } from '../api/types';

export function mapProductCartItemDto(
  dto: ProductCartItemType
): ProductCartItemDto {
  return {
    productId: dto.productId,
    selectedSizeId: dto.selectedSize.id,
    selectedDoughId: dto.selectedDough?.id ? dto.selectedDough.id : null,
    removedIngredientsId: dto.removedIngredients.map((ingr) => ingr.id),
    selectedToppingsId: dto.selectedToppings.map((topping) => topping.id),
  };
}

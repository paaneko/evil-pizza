import type { ProductCartItemType } from '@entities/productCartItem';
import type {
  DoughSpecId,
  IndigrientId,
  ProductId,
  SizeSpecId,
  ToppingId,
} from '../../productCard';

/**
 * Types that will be sent to the server.
 * Only the most important props that directly affect the product are described here.
 */

export type CartDto = {
  cartItems: CartItemDto[];
  userCartId: number | null;
  version: CartVersion;
};

export type CartItemDto = {
  hash: string;
  product: ProductCartItemDto;
  quantity: number;
};

export type ProductCartItemDto = {
  productId: ProductId;
  selectedSizeId: SizeSpecId;
  selectedDoughId: DoughSpecId | null;
  selectedToppingsId: ToppingId[] | [];
  removedIngredientsId: IndigrientId[] | [];
};

export type CartResponseDto = {
  cartItems: CartItemResponseDto[];
  cartTotalPrice: number;
  userCartId: number;
  version: CartVersion;
};

export type CartItemResponseDto = {
  product: ProductCartItemType;
  quantity: number;
};

import { CartItemType } from '@entities/productCartItem';
import {
  DoughSpecId,
  IndigrientId,
  ProductId,
  SizeSpecId,
  ToppingId,
} from '../../productCard';

export type UserCartId = Brand<Id, 'UserCartId'>;

export type CartType = {
  cartItems: Record<Hash, CartItemType>;
  cartTotalPrice: number | null;
  userCartId: number | null;
  version: CartVersion;
};

export type ProductCartItemToHashType = ItemToHashType;
export type ProductToHashType = ItemToHashType;

interface ItemToHashType {
  productId: ProductId;
  selectedSizeId: SizeSpecId;
  selectedDoughId: DoughSpecId | null;
  selectedToppingsId: ToppingId[] | [];
  removedIngredientsId: IndigrientId[] | [];
}

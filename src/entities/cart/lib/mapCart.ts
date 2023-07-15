import { objectToHash } from '@shared/lib';
import type { CartType } from '../model/types';
import type { CartResponseDto } from '../api/types';
import { mapProductCartItemToHash } from './mapProductCartItemToHash';

export function mapCart(dto: CartResponseDto): CartType {
  const cartItems = dto.cartItems.reduce((acc: CartType['cartItems'], item) => {
    acc[objectToHash(mapProductCartItemToHash(item.product)) as Hash] = {
      product: item.product,
      quantity: item.quantity,
    };
    return acc;
  }, {});

  return {
    cartItems,
    userCartId: dto.userCartId,
    cartTotalPrice: dto.cartTotalPrice,
    version: dto.version,
  };
}

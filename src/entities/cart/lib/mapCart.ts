import { objectToHash } from '@shared/lib';
import type { CartType } from '../model/types';
import type { CartResponseDto } from '../api/types';
import { mapProductCartItemToHash } from './mapProductCartItemToHash';

export function mapCart(dto: CartResponseDto): CartType {
  const cartItems = dto.cartItems.reduce((acc: CartType['cartItems'], item) => {
    const hash = objectToHash(mapProductCartItemToHash(item.product));
    acc[hash as Hash] = {
      hash,
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

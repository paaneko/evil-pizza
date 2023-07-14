import type { CartItemType } from '@entities/productCartItem';
import type { CartItemDto } from '../api/types';
import { mapProductCartItemDto } from './mapProductCartItemDto';

export function mapCartItemDto(dto: Record<Hash, CartItemType>): CartItemDto[] {
  return Object.keys(dto).map((hash) => ({
    hash,
    product: mapProductCartItemDto(dto[hash].product),
    quantity: dto[hash].quantity,
  }));
}

import { CartDto } from '../api/types';
import { CartType } from '../model/types';
import { mapCartItemDto } from './mapCartItemDto';

export function mapCartDto(dto: CartType): CartDto {
  return {
    cartItems: mapCartItemDto(dto.cartItems),
    userCartId: dto.userCartId,
    version: dto.version,
  };
}

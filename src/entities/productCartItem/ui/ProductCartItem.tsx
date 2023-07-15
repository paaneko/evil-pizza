import Image from 'next/image';
import type { ReactNode } from 'react';
import { formatPrice } from '@shared/lib';
import { CartItemType } from '../model/types';

type Props = {
  index: number;
  productCartItem: CartItemType;
  changeProductQuantitySlot: ReactNode;
  removeProductCartItemSlot: ReactNode;
};

export function ProductCartItem({
  index,
  productCartItem,
  changeProductQuantitySlot,
  removeProductCartItemSlot,
}: Props) {
  const { product, quantity } = productCartItem;

  return (
    <div className="flex flex-auto justify-between items-center">
      <div className="flex items-center mr-10">{index}</div>
      <div className="mr-10">
        <Image
          width={125}
          height={125}
          src="/pizza.webp"
          alt={`${product.name} cart pizza`}
        />
      </div>
      <div className="flex flex-grow">
        <div className="flex flex-col flex-[7]">
          <div className="font-semibold text-xl mb-1">{product.name}</div>
          <div className="font-medium text-sm">
            <span>{product.selectedSize.name}</span>
            {product.selectedDough && (
              <span>, {product.selectedDough?.name}</span>
            )}
          </div>
          {product.selectedToppings.length !== 0 && (
            <div className="">
              +{' '}
              {product.selectedToppings
                .map((topping) => topping.name)
                .join(', ')}
            </div>
          )}
          {product.removedIngredients.length !== 0 && (
            <div className="">
              - {product.removedIngredients.map((ingr) => ingr.name).join(', ')}
            </div>
          )}
        </div>
        <div className="flex flex-[2] items-center justify-center ">
          {changeProductQuantitySlot}
        </div>
        <div className="flex flex-[1] items-center">
          {product.discountTotalPrice ? (
            <div className="flex flex-col justify-center items-center">
              <div className="top-0 left-0 text-lg font-bold">
                {formatPrice(product.discountTotalPrice * quantity)}
              </div>
              <div className="line-through text font-medium text-sm">
                {formatPrice(product.totalPrice * quantity)}
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center">
              <div className="text-lg font-bold">
                {formatPrice(product.totalPrice)}
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-[1] items-center justify-center">
          {removeProductCartItemSlot}
        </div>
      </div>
    </div>
  );
}

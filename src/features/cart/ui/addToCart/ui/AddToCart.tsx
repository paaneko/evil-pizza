import React from 'react';
import { ProductType } from '@entities/productCard';
import { useAppDispatch } from '@shared/model';
import { objectToHash } from '@shared/lib';
import { addOneCartItemThunk } from '../../../model/actions';
import { mapProductToHash } from '../../../lib/mapProductToHash';

type Props = {
  product: ProductType;
};

export function AddToCart({ product }: Props) {
  const dispatch = useAppDispatch();
  const addToCartAction = () => {
    dispatch(
      addOneCartItemThunk({
        hash: objectToHash(mapProductToHash(product)),
        // TODO Maybe add mapper here
        product: {
          productId: product.id,
          name: product.name,
          thumbnail: product.thumbnail,
          selectedSize: {
            id: product.selectedSizeId,
            name: product.sizeSpecs.find(
              (size) => size.id === product.selectedSizeId
            )!.name,
          },
          selectedDough: product.selectedDoughId
            ? {
                id: product.selectedDoughId,
                name: product.sizeSpecs.find(
                  (dough) => dough.id === product.selectedDoughId
                )!.name,
              }
            : null,
          selectedToppings: product.toppings
            .filter((topping) => topping.selected)
            .map(({ id, name }) => ({ id, name })),
          removedIngredients: product.ingredients
            .filter((ingr) => ingr.excluded)
            .map(({ id, name }) => ({ id, name })),
          totalWeight: 0,
          totalPrice: 0,
          discountTotalPrice: 0,
        },
      })
    );
  };
  return (
    <button
      onClick={() => addToCartAction()}
      type="button"
      className="p-3 bg-hot-red rounded-lg text-white font-semibold cursor-pointer"
    >
      Add To Card
    </button>
  );
}

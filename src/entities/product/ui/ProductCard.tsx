'use client';

import Image from 'next/image';
import React, { type ReactNode } from 'react';
import type { ProductType } from '../model/types';
import { getIngredientString } from '../lib/getIngredientString';

type Props = {
  product: ProductType;
  sizeToggleSlot: ReactNode;
  doughToggleSlot: ReactNode;
  productModalButtonSlot: ReactNode;
};

export const ProductCard = React.memo(
  (props: Props) => {
    const { product, sizeToggleSlot, doughToggleSlot, productModalButtonSlot } =
      props;
    const { name, ingredients } = product;

    return (
      <div className="relative flex flex-col w-full h-full bg-white rounded-lg">
        <div className="flex justify-center mt-2">
          <Image width={250} height={250} src="/pizza.webp" alt="pizza" />
        </div>
        <div className="px-6 pt-4">
          <h2 className="font-bold text-lg text-jet-black">{name}</h2>
          <div className="text-jet-black/70 text-sm font-semibold">
            <span>Ingredients: </span>
            {getIngredientString(ingredients)}
          </div>
        </div>
        <div className="px-6 py-4 mt-auto">
          {productModalButtonSlot && <div>{productModalButtonSlot}</div>}
          {doughToggleSlot && <div className="mt-2">{doughToggleSlot}</div>}
          {sizeToggleSlot && <div className="mt-2">{sizeToggleSlot}</div>}
          <div className="">{product.oldPrice}</div>
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    /**
     * 🪄 Re-render Optimization
     * ⚠️ Probably Bad Practice
     *
     * Props comparison function
     *
     * If product: ProductType object has changed,
     * then you need to call Render Slots to update the information if not,
     * then we can suppose that user do not change this card and no re-render is needed
     */
    return prevProps.product === nextProps.product;
  }
);

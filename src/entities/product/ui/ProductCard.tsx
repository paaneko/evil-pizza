'use client';

import Image from 'next/image';
import React, { type ReactNode } from 'react';
import { WeightIndicator } from '@shared/ui/WeightIndicator';
import type { ProductType } from '../model/types';
import { getIngredientString } from '../lib/getIngredientString';
import { calculateProductWeight } from '../model/calculateProductWeight';

type Props = {
  product: ProductType;
  middle: ReactNode;
  priceSlot: ReactNode;
  addToCartSlot: ReactNode;
};

export const ProductCard = React.memo(
  (props: Props) => {
    const { product, middle, priceSlot, addToCartSlot } = props;
    const { name, ingredients } = product;

    return (
      <div className="relative flex flex-col w-full h-full bg-white rounded-lg">
        <div className="absolute top-4 right-4">
          <WeightIndicator
            weight={calculateProductWeight(product)}
            size="big"
          />
        </div>
        <div className="flex justify-center pt-4">
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
          {middle}
          <div className="flex justify-between pt-4">
            {priceSlot}
            {addToCartSlot}
          </div>
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

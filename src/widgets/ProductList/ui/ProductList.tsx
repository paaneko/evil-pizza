'use client';

import { ProductCard } from '@entities/product';
import { useAppSelector } from '@shared/model';
import { SizeToggle } from '@features/product/sizeToggle';
import { DoughToggle } from '@features/product/doughToggle';
import { AdjustToppingsModalButton } from '../../../entities/adjustToppingsModal';
import Image from 'next/image';
import React from 'react';

export function ProductList() {
  const groupedProducts = useAppSelector((store) => store.product.data);

  return (
    <div className="flex-col flex-grow">
      {groupedProducts.map((group, categoryIndex) => (
        <div key={group.categoryName}>
          <h4 className="py-4 text-2xl font-bold text-jet-black">
            {group.categoryName}
          </h4>
          <div className="grid grid-cols-3 gap-2">
            {group.products.map((product) => {
              const renderSizeToggleSlot = product.selectedDoughId ? (
                <DoughToggle
                  productId={product.id}
                  selectedDoughId={product.selectedDoughId}
                  doughSpecs={product.doughSpecs}
                  categoryIndex={categoryIndex}
                />
              ) : undefined;

              const renderDoughToggleSlot = product.selectedSizeId ? (
                <SizeToggle
                  productId={product.id}
                  selectedSizeId={product.selectedSizeId}
                  sizeSpecs={product.sizeSpecs}
                  categoryIndex={categoryIndex}
                />
              ) : undefined;

              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  productModalButtonSlot={
                    product.ingredients || product.toppings ? (
                      <AdjustToppingsModalButton
                        imageSlot={
                          <>
                            <Image
                              width={250}
                              height={250}
                              src="/pizza.webp"
                              alt="pizza"
                            />
                            <div className="mt-5 text-center font-bold text-lg text-jet-black">
                              {product.name}
                            </div>
                          </>
                        }
                        sizeToggleSlot={renderSizeToggleSlot}
                        doughToggleSlot={renderDoughToggleSlot}
                        removeIngredientsSlot={undefined}
                        addToppingsSlot={undefined}
                      />
                    ) : undefined
                  }
                  // by default can be null
                  sizeToggleSlot={renderSizeToggleSlot}
                  doughToggleSlot={renderDoughToggleSlot}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

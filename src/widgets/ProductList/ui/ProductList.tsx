'use client';

import { ProductCard } from '@entities/product';
import { useAppSelector } from '@shared/model';
import React from 'react';
import { ProductPrice } from '@features/product/productPrice';
import { AdjustProduct } from '@features/product/adjustProduct';

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
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  middle={
                    <AdjustProduct
                      product={product}
                      categoryIndex={categoryIndex}
                    >
                      <AdjustProduct.Modal>
                        <AdjustProduct.Modal.Left>
                          <AdjustProduct.Modal.Info />
                          <AdjustProduct.RemoveIngredients />
                          <AdjustProduct.Modal.Left.BottomSlot>
                            <ProductPrice product={product} />
                            <div className="p-3 bg-hot-red rounded-lg text-white font-semibold">
                              Add To Card
                            </div>
                          </AdjustProduct.Modal.Left.BottomSlot>
                        </AdjustProduct.Modal.Left>
                        <AdjustProduct.Modal.Right>
                          <AdjustProduct.Size />
                          <AdjustProduct.Dough />
                          <AdjustProduct.AddToppings />
                        </AdjustProduct.Modal.Right>
                      </AdjustProduct.Modal>

                      <AdjustProduct.Size />
                      <AdjustProduct.Dough />
                    </AdjustProduct>
                  }
                  priceSlot={<ProductPrice product={product} />}
                  addToCartSlot={
                    <div className="p-3 bg-hot-red rounded-lg text-white font-semibold">
                      Add To Card
                    </div>
                  }
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

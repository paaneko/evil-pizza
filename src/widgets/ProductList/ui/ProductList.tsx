'use client';

import { ProductCard } from '@entities/productCard';
import { useAppSelector } from '@shared/model';
import React from 'react';
import { AdjustProduct } from '@features/product/adjustProduct';
import { ProductPrice } from '@features/product/productPrice';
import { AddToCart } from '@features/cart';

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
                            <AddToCart product={product} />
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
                  addToCartSlot={<AddToCart product={product} />}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

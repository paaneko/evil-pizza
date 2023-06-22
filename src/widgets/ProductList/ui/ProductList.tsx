'use client';

import { ProductCard } from '@entities/product';
import { useAppSelector } from '@shared/model';
import { SizeToggle } from '@features/product/sizeToggle';
import { DoughToggle } from '@features/product/doughToggle';

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
            {group.products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                // by default can be null
                sizeToggleSlot={
                  product.selectedSizeId ? (
                    <SizeToggle
                      productId={product.id}
                      selectedSizeId={product.selectedSizeId}
                      sizeSpecs={product.sizeSpecs}
                      categoryIndex={categoryIndex}
                    />
                  ) : undefined
                }
                doughToggleSlot={
                  product.selectedDoughId ? (
                    <DoughToggle
                      productId={product.id}
                      selectedDoughId={product.selectedDoughId}
                      doughSpecs={product.doughSpecs}
                      categoryIndex={categoryIndex}
                    />
                  ) : undefined
                }
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

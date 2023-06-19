'use client';

import { ProductCard } from '@entities/product';
import { useAppSelector } from '@shared/model';

export function ProductList() {
  const products = useAppSelector((store) => store.product.data);
  console.log('ProductList call');
  return (
    <div className="container flex justify-around">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

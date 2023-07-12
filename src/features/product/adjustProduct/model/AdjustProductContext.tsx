import { createContext, useContext } from 'react';
import { ProductType } from '@entities/productCard';

const AdjustProductContext = createContext<{
  product: ProductType;
  categoryIndex: number;
} | null>(null);

export function useAdjustProductContext() {
  const context = useContext(AdjustProductContext);
  if (!context) {
    throw new Error(
      'AdjustProduct.* features cannot be used outside of the AdjustProduct component'
    );
  }
  return context;
}

export default AdjustProductContext;

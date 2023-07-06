import type { ProductType } from '@entities/product';
import type { ReactNode } from 'react';
import AdjustProductContext from '../model/AdjustProductContext';
import { DoughToggle } from './specTogglers/ui/DoughToggle';
import { SizeToggle } from './specTogglers/ui/SizeToggle';
import { RemoveIngredientList } from './removeIngredients/ui/RemoveIngredientList';
import { AddToppingList } from './addToppings/ui/AddToppingList';
import { AdjustProductModal } from './adjustProductModal/ui/AdjustProductModal';

type Props = {
  product: ProductType;
  categoryIndex: number;
  children: ReactNode;
};

export function AdjustProduct({ product, categoryIndex, children }: Props) {
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AdjustProductContext.Provider value={{ product, categoryIndex }}>
      <div className="space-y-2">{children}</div>
    </AdjustProductContext.Provider>
  );
}

AdjustProduct.Dough = DoughToggle;
AdjustProduct.Size = SizeToggle;

AdjustProduct.Modal = AdjustProductModal;
AdjustProduct.RemoveIngredients = RemoveIngredientList;
AdjustProduct.AddToppings = AddToppingList;

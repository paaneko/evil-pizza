import { useAppDispatch } from '@shared/model';
import type { ToppingId } from '@entities/product';
import { useAdjustProductContext } from '../../../model/AdjustProductContext';
import { ToppingCard } from './ToppingCard';
import { calculateToppingPrice } from '../model/calculateToppingPrice';
import { calculateToppingWeight } from '../model/calculateToppingWeight';
import { addToppingToggle } from '../../../model/slice';

export function AddToppingList() {
  const { product, categoryIndex } = useAdjustProductContext();

  const dispatch = useAppDispatch();
  const toppingToggle = (selectedToppingId: ToppingId) => {
    dispatch(
      addToppingToggle({
        productId: product.id,
        categoryIndex,
        selectedTopping: selectedToppingId,
      })
    );
  };
  return (
    <>
      <div className="font-bold text-2xl text-center text-jet-black pt-5">
        Toppings:{' '}
      </div>
      <div className="grid grid-cols-4-fix gap-4 pt-2">
        {product.toppings.map((topping) => (
          <ToppingCard
            id={topping.id}
            image="/mozzarella.png"
            name={topping.name}
            price={calculateToppingPrice(product, topping.extraPrice)}
            weight={calculateToppingWeight(product, topping.extraWeight)}
            selected={topping.selected}
            toggle={toppingToggle}
          />
        ))}
      </div>
    </>
  );
}

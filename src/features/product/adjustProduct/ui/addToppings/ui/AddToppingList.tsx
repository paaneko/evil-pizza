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

  if (product.toppings.length === 0) {
    return (
      <div className="flex flex-col flex-grow items-center bg-dark-white rounded-lg justify-center">
        <div className="text-4xl transform scale-150">😔</div>
        <div className="font-bold text-4xl pt-2 pt-7">Regrettably</div>
        <div className="font-semibold pt-4 px-20 text-center ">
          But this exquisite creation has been meticulously crafted to deliver
          the ultimate flavor experience, carefully balancing each ingredient.
          Thus, we kindly ask that you savor its original form without any
          additional toppings.
        </div>
      </div>
    );
  }

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

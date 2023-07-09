import type { IndigrientId } from '@entities/product';
import { useAppDispatch } from '@shared/model';
import { RemoveIngredientItem } from './RemoveIngredientItem';
import { useAdjustProductContext } from '../../../model/AdjustProductContext';
import { deleteIngredientToggle } from '../../../model/slice';

export function RemoveIngredientList() {
  const dispatch = useAppDispatch();
  const { product, categoryIndex } = useAdjustProductContext();

  const toggleIngredient = (selectedIngredient: IndigrientId) => {
    dispatch(
      deleteIngredientToggle({
        productId: product.id,
        categoryIndex,
        selectedIngredient,
      })
    );
  };

  // TODO Fix duplicate code
  if (product.ingredients.filter((ingr) => !ingr.required).length === 0) {
    return (
      <>
        <div className="border-hot-red w-full border mt-4" />
        <h4 className="font-bold text text-jet-black my-4">
          Remove ingredients:
        </h4>
        <div className="flex flex-col flex-grow items-center justify-center space-y-2.5 px-5 bg-dark-white rounded-lg">
          <div className="text-4xl transform scale-150">😔</div>
          <div className="font-bold text-xl pt-2 ">Regrettably</div>
          <div className="font-semibold text-center">
            There are no ingredients to remove
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="border-hot-red w-full border mt-4" />
      <h4 className="font-bold text text-jet-black my-4">
        Remove ingredients:
      </h4>
      <div className="flex flex-col space-y-2.5 px-5 max-h-[270px] overflow-y-auto">
        {product.ingredients
          .filter((ingr) => !ingr.required)
          .map((ingr) => (
            <RemoveIngredientItem
              key={ingr.id}
              label={ingr.name}
              isExcluded={ingr.excluded}
              toggle={() => toggleIngredient(ingr.id)}
            />
          ))}
      </div>
    </>
  );
}

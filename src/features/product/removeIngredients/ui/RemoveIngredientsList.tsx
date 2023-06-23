import type {
  IndigrientId,
  IndigrientType,
  ProductId,
} from '@entities/product';
import { deleteIngredientToggle } from '@entities/product';
import { useAppDispatch } from '@shared/model';
import { RemoveIngredientButton } from './RemoveIngredientButton';

type Props = {
  productId: ProductId;
  ingredients: IndigrientType[];
  categoryIndex: number;
};

export function RemoveIngredientsList({
  ingredients,
  categoryIndex,
  productId,
}: Props) {
  const dispatch = useAppDispatch();

  const toggleIngredient = (selectedIngredient: IndigrientId) => {
    dispatch(
      deleteIngredientToggle({
        productId,
        categoryIndex,
        selectedIngredient,
      })
    );
  };

  return (
    <>
      <div className="border-hot-red w-full border mt-4" />
      <h4 className="font-bold text text-jet-black my-4">
        Remove ingredients:
      </h4>
      <div className="flex flex-col space-y-2.5 px-5 max-h-[270px] overflow-y-auto">
        {ingredients
          .filter((ingr) => !ingr.required)
          .map((ingr) => (
            <RemoveIngredientButton
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

import type {
  DoughSpecId,
  DoughSpecType,
  ProductId,
  SizeSpecId,
} from '@entities/product';
import { changeProductDough } from '@entities/product';
import { useAppDispatch } from '@shared/model';

type Props = {
  doughSpecs: DoughSpecType[];
  productId: ProductId;
  selectedDoughId: DoughSpecId;
  categoryIndex: number;
};

/**
 * Blah-Blah-Blah, Don't Repeat Yourself ...
 * I don't care, I'm too lazy to pass types from entitie to shared
 */

export function DoughToggle({
  doughSpecs,
  selectedDoughId,
  categoryIndex,
  productId,
}: Props) {
  const dispatch = useAppDispatch();

  const selectProductDough = (doughId: SizeSpecId) => {
    dispatch(
      changeProductDough({
        productId,
        selectedDough: doughId,
        categoryIndex,
      })
    );
  };

  const activeClass =
    'text-white border-b-[3px] border-hot-red bg-goldenrod cursor-default hover:bg-none';

  return (
    <div
      className="w-full h-12 flex justify-evenly bg-dark-white rounded-lg space-x-1.5 px-2"
      role="group"
    >
      {doughSpecs.map((spec) => (
        <button
          key={spec.id}
          type="button"
          onClick={() => selectProductDough(spec.id)}
          className={`w-full my-1.5 flex justify-center items-center text-sm rounded font-semibold text-jet-black select-none ${
            selectedDoughId === spec.id && activeClass
          }`}
        >
          <span>{spec.name}</span>
        </button>
      ))}
    </div>
  );
}

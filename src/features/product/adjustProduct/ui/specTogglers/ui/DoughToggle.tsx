import type { SizeSpecId } from '@entities/product';
import { useAppDispatch } from '@shared/model';
import { changeProductDough } from '../../../model/slice';
import { useAdjustProductContext } from '../../../model/AdjustProductContext';

export function DoughToggle() {
  const dispatch = useAppDispatch();
  const { product, categoryIndex } = useAdjustProductContext();

  const selectProductDough = (doughId: SizeSpecId) => {
    dispatch(
      changeProductDough({
        productId: product.id,
        selectedDough: doughId,
        categoryIndex,
      })
    );
  };

  const activeClass =
    'text-white border-b-[3px] border-hot-red bg-goldenrod cursor-default hover:bg-none';

  if (product.doughSpecs.length === 0) {
    return null;
  }

  return (
    <div
      className="w-full h-12 flex justify-evenly bg-dark-white rounded-lg space-x-1.5 px-2"
      role="group"
    >
      {product.doughSpecs.map((spec) => (
        <button
          key={spec.id}
          type="button"
          onClick={() => selectProductDough(spec.id)}
          className={`w-full my-1.5 flex justify-center items-center text-sm rounded font-semibold text-jet-black select-none ${
            product.selectedDoughId === spec.id && activeClass
          }`}
        >
          <span>{spec.name}</span>
        </button>
      ))}
    </div>
  );
}

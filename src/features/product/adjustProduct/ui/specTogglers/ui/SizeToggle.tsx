import type { SizeSpecId } from '@entities/productCard';
import { useAppDispatch } from '@shared/model';
import { changeProductSize } from '@entities/productCard';
import { useAdjustProductContext } from '../../../model/AdjustProductContext';

export function SizeToggle() {
  const dispatch = useAppDispatch();
  const { product, categoryIndex } = useAdjustProductContext();

  const selectProductSize = (sizeId: SizeSpecId) => {
    dispatch(
      changeProductSize({
        productId: product.id,
        selectedSize: sizeId,
        categoryIndex,
      })
    );
  };

  const activeClass =
    'text-white border-b-[3px] border-hot-red bg-goldenrod cursor-default hover:bg-none';

  if (product.sizeSpecs.length === 0) {
    return null;
  }

  return (
    <div
      className="w-full h-12 flex justify-evenly bg-dark-white rounded-lg space-x-1.5 px-2"
      role="group"
    >
      {product.sizeSpecs.map((spec) => (
        <button
          key={spec.id}
          type="button"
          onClick={() => selectProductSize(spec.id)}
          className={`w-full my-1.5 flex justify-center items-center text-sm rounded font-semibold text-jet-black select-none ${
            product.selectedSizeId === spec.id && activeClass
          }`}
        >
          <span>{spec.name}</span>
        </button>
      ))}
    </div>
  );
}

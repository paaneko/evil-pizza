import type { ProductId, SizeSpecId, SizeSpecType } from '@entities/product';
import { useAppDispatch } from '@shared/model';
import { changeProductSize } from '@entities/product';

type Props = {
  sizeSpecs: SizeSpecType[];
  productId: ProductId;
  selectedSizeId: SizeSpecId;
  categoryIndex: number;
};

export function SizeToggle({
  sizeSpecs,
  selectedSizeId,
  categoryIndex,
  productId,
}: Props) {
  const dispatch = useAppDispatch();

  const selectProductSize = (sizeId: SizeSpecId) => {
    dispatch(
      changeProductSize({
        productId,
        selectedSize: sizeId,
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
      {sizeSpecs.map((spec) => (
        <button
          key={spec.id}
          type="button"
          onClick={() => selectProductSize(spec.id)}
          className={`w-full my-1.5 flex justify-center items-center text-sm rounded font-semibold text-jet-black select-none ${
            selectedSizeId === spec.id && activeClass
          }`}
        >
          <span>{spec.name}</span>
        </button>
      ))}
    </div>
  );
}

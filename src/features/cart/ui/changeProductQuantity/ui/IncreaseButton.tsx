import { useAppDispatch } from '@shared/model';
import { ProductCartItemType } from '@entities/productCartItem';
import { addOneCartItemThunk } from '../../../model/actions';

type Props = {
  hash: Hash;
  item: ProductCartItemType;
};

export function IncreaseButton({ hash, item }: Props) {
  const dispatch = useAppDispatch();

  const increaseAction = () => {
    dispatch(
      addOneCartItemThunk({
        hash,
        product: item,
      })
    );
  };
  return (
    <button type="button" onClick={() => increaseAction()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </button>
  );
}

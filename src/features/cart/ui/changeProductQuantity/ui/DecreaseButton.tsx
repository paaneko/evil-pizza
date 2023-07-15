import { useAppDispatch } from '@shared/model';
import { removeOneCartItemThunk } from '../../../model/actions';

type Props = {
  hash: Hash;
};

export function DecreaseButton({ hash }: Props) {
  const dispatch = useAppDispatch();

  const decreaseAction = () => {
    dispatch(removeOneCartItemThunk({ hash }));
  };
  return (
    <button type="button" onClick={() => decreaseAction()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
      </svg>
    </button>
  );
}

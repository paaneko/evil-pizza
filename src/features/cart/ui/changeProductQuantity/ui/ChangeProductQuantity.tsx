import { ProductCartItemType } from '@entities/productCartItem';
import { IncreaseButton } from './IncreaseButton';
import { DecreaseButton } from './DecreaseButton';

type Props = {
  quantity: number;
  item: ProductCartItemType;
  hash: Hash;
};

export function ChangeProductQuantity({ quantity, item, hash }: Props) {
  return (
    <div className="flex w-[100px] justify-between items-center p-2 bg-dark-white rounded-lg">
      <DecreaseButton hash={hash} />
      <div className="font-semibold text-xl">{quantity}</div>
      <IncreaseButton hash={hash} item={item} />
    </div>
  );
}

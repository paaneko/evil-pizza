import Image from 'next/image';
import { formatPrice, ToppingId } from '@entities/product';

type Props = {
  id: Id;
  image: Path;
  name: string;
  price: Penny;
  weight: Gram;
  selected: boolean;
  toggle: (selectedToppingId: ToppingId) => void;
};

export function ToppingCard({
  id,
  image,
  name,
  price,
  weight,
  selected,
  toggle,
}: Props) {
  const activeClass = selected ? 'bg-goldenrod text-white' : '';
  return (
    <button
      type="button"
      onClick={() => toggle(id)}
      className={`${activeClass} p-2 relative flex flex-col justify-between rounded-lg items-center bg-dark-white cursor-pointer`}
    >
      <div className="absolute top-[8px] right-[7px] text-xs font-semibold bg-hot-red text-white rounded-full px-1.5 py-0.5">
        {weight}g
      </div>
      <Image
        className="pt-3 pointer-events-none"
        width={75}
        height={75}
        src={image}
        alt={`${name} topping for pizza`}
      />
      <div className="text-center font-semibold">{name}</div>
      <div className="pt-2 text-sm font-semibold">+ {formatPrice(price)}</div>
    </button>
  );
}

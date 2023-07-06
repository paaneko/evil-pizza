import Image from 'next/image';
import { WeightIndicator } from '@shared/ui/WeightIndicator';
import { calculateProductWeight } from '@entities/product';
import { useAdjustProductContext } from '../../../model/AdjustProductContext';

export function ProductInfo() {
  // TODO make dynamic image link

  const { product } = useAdjustProductContext();
  return (
    <div className="relative flex items-center flex-col">
      <div className="absolute top-0 right-0">
        <WeightIndicator weight={calculateProductWeight(product)} size="big" />
      </div>
      <Image width={250} height={250} src="/pizza.webp" alt="Pizza image" />
      <div className="mt-2 font-medium text-2xl text-jet-black text-center">
        {product.name}
      </div>
    </div>
  );
}

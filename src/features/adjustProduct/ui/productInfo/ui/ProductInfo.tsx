import Image from 'next/image';
import { useAdjustProductContext } from '../../../model/AdjustProductContext';

export function ProductInfo() {
  // TODO make dynamic image link

  const { product } = useAdjustProductContext();
  return (
    <div className="flex items-center flex-col">
      <Image width={250} height={250} src="/pizza.webp" alt="Pizza image" />
      <div className="mt-2 font-medium text-2xl text-jet-black text-center">
        {product.name}
      </div>
    </div>
  );
}

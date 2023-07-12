import { formatPrice, ProductType } from '@entities/productCard';
import { calculatePrice } from '../model/calculatePrice';
import { calculatePriceWithDiscount } from '../model/calculatePriceWithDiscount';

type Props = {
  product: ProductType;
};

export function ProductPrice({ product }: Props) {
  // by default is null
  if (product.newPrice) {
    return (
      <div className="flex flex-col justify-center items-center flex-grow">
        <div className="top-0 left-0 text-lg font-bold">
          {formatPrice(calculatePriceWithDiscount(product))}
        </div>
        <div className="line-through text font-medium text-sm">
          {formatPrice(calculatePrice(product))}
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-center items-center flex-grow">
      <div className="text-lg font-bold">
        {formatPrice(calculatePrice(product))}
      </div>
    </div>
  );
}

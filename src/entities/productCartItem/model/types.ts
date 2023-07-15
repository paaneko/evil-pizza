import type {
  DoughSpecId,
  IndigrientId,
  ProductId,
  SizeSpecId,
  ToppingId,
} from '@entities/productCard';

export type CartItemType = {
  hash: Hash;
  product: ProductCartItemType;
  quantity: number;
};

export type ProductCartItemType = {
  productId: ProductId;
  name: string;
  thumbnail: Path;
  selectedSize: { id: SizeSpecId; name: string };
  selectedDough: { id: DoughSpecId; name: string } | null;
  selectedToppings: { id: ToppingId; name: string }[] | [];
  removedIngredients: { id: IndigrientId; name: string }[] | [];
  totalWeight: Gram;
  totalPrice: Penny;
  discountTotalPrice: Penny | null;
};

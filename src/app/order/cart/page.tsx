'use client';

import { useAppSelector } from '@shared/model';
import { ProductCartItem } from '@entities/productCartItem';
import { ChangeProductQuantity } from '@features/cart/ui/changeProductQuantity/ui/ChangeProductQuantity';
import { RemoveProductButton } from '@features/cart/ui/removeAllProducts/ui/RemoveProductButton';

export default function Cart() {
  const cartData = useAppSelector((store) => store.cart.cartItems);
  return (
    <div className="container">
      {Object.values(cartData).map((item, index) => (
        <ProductCartItem
          index={index + 1}
          productCartItem={item}
          changeProductQuantitySlot={
            <ChangeProductQuantity
              item={item.product}
              quantity={item.quantity}
              hash={item.hash}
            />
          }
          removeProductCartItemSlot={<RemoveProductButton hash={item.hash} />}
        />
      ))}
    </div>
  );
}

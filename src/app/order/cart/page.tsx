'use client';

import { useAppSelector } from '@shared/model';
import { ProductCartItem } from '@entities/productCartItem';
import { ChangeProductQuantity, RemoveProductButton } from '@features/cart';
import { Stepper } from '@features/cart/ui/steps/ui/Stepper';

export default function Cart() {
  const cartData = useAppSelector((store) => store.cart.cartItems);
  return (
    <div className="container">
      <div className="mt-4 ">
        <Stepper currentIndex={1} />
      </div>
      <h2 className="text-4xl font-bold mt-8 ">Cart</h2>
      <section>
        <h3 className="text-gray text-2xl font-semibold mt-6">
          Order composition
        </h3>
        <p className="mt-2 ">Check the selected products before checkout</p>
        <div className="mt-12">
          {/* TODO use selector instead of this */}
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
              removeProductCartItemSlot={
                <RemoveProductButton hash={item.hash} />
              }
            />
          ))}
        </div>
      </section>
    </div>
  );
}

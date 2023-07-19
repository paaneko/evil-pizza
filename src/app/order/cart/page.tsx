'use client';

import { useAppSelector } from '@shared/model';
import { ProductCartItem } from '@entities/productCartItem';
import { ChangeProductQuantity, RemoveProductButton } from '@features/cart';
import { Stepper } from '@features/cart/ui/steps/ui/Stepper';
import { selectTotalCartPrice } from '@entities/cart';
import Link from 'next/link';
import { formatPrice } from '@shared/lib';

export default function Cart() {
  const cartData = useAppSelector((store) => store.cart.cartItems);
  const totalPrice = useAppSelector(selectTotalCartPrice);
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
      <section className="mt-6">
        <div className="flex justify-between items-end">
          <Link href="/">
            <div className="text-center p-3 bg-goldenrod rounded-lg text-white font-semibold cursor-pointer">
              Back to menu
            </div>
          </Link>
          <div className="flex flex-col">
            <div className="font-semibold">
              Total price: {formatPrice(totalPrice)}
            </div>
            <Link href="/checkout">
              <div className="mt-2 text-center px-14 py-3 bg-hot-red rounded-lg text-white font-semibold cursor-pointer">
                Checkout
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

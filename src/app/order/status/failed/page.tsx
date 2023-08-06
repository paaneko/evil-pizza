'use client';

import Link from 'next/link';
import { Stepper } from '@features/cart';

export default function Failed() {
  return (
    <div className="container">
      <div className="mt-4 ">
        <Stepper currentIndex={3} />
      </div>
      <div className="flex mt-32 justify-center items-center">
        <div className="flex flex-col items-center bg-dark-white rounded-lg p-10">
          <div className="text-4xl transform scale-150">⛔</div>
          <div className="font-bold text-4xl pt-7">Error</div>
          <div className="font-semibold pt-4 px-6 text-center">
            For some reason your order was not accepted, please try again.
          </div>
          <Link href="/order/cart">
            <div className="text-center p-3 bg-hot-red rounded-lg text-white font-semibold cursor-pointer mt-6">
              Back to Cart
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

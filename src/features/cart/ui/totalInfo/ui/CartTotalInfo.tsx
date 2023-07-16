'use client';

import { useAppSelector } from '@shared/model';
import { selectTotalCartPrice, selectTotalCartQuantity } from '@entities/cart';
import { formatPrice } from '@shared/lib';

export function CartTotalInfo() {
  const totalPrice = useAppSelector(selectTotalCartPrice);
  const totalQuantity = useAppSelector(selectTotalCartQuantity);
  return (
    <div className="w-full flex justify-between items-center">
      <span className="text-center font-semibold text-lg w-[150px]">
        {formatPrice(totalPrice)}
      </span>
      <div className="h-[25px] w-[1px] bg-white" />
      <div className="flex justify-center w-[100px]">
        <div className="flex justify-between w-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          <div className="font-semibold text-lg">{totalQuantity}</div>
        </div>
      </div>
    </div>
  );
}

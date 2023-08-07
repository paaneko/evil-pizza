'use client';

import { type ReactNode } from 'react';
import { Logo } from '@shared/ui/Logo';
import Link from 'next/link';
import { useCartQuery } from '@entities/cart/api/cartApi';
import { useAppSelector } from '@shared/model';
import { getUserCartId } from '@entities/cart';

type Props = {
  rightContentSlot: ReactNode;
};

export function Header({ rightContentSlot }: Props) {
  useCartQuery(useAppSelector(getUserCartId), { skip: false });
  return (
    <div className="bg-light-yellow">
      <div className="container flex justify-between items-center py-4">
        <Logo whiteText={false} />
        <nav>
          <ul className="flex space-x-3 text-lg font-semibold cursor-pointer">
            <Link href="/">
              <li>Pizza</li>
            </Link>
            <Link href="/">
              <li>Drinks</li>
            </Link>
            <li>Desserts</li>
          </ul>
        </nav>
        <Link
          href="/order/cart"
          className="bg-hot-red text-white rounded-full w-[256px] py-4"
        >
          {rightContentSlot}
        </Link>
      </div>
    </div>
  );
}

'use client';

import { type ReactNode } from 'react';
import { Logo } from '@shared/ui/Logo';
import Link from 'next/link';
import { useCartQuery } from '@entities/cart/api/cartApi';

type Props = {
  rightContentSlot: ReactNode;
};

export function Header({ rightContentSlot }: Props) {
  useCartQuery(undefined, { skip: false });
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
        <div className="bg-hot-red">{rightContentSlot}</div>
      </div>
    </div>
  );
}

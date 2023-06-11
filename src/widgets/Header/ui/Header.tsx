import { type ReactNode } from 'react';
import { Logo } from '@shared/ui/Logo';

type Props = {
  rightContentSlot: ReactNode;
};

export function Header({ rightContentSlot }: Props) {
  return (
    <div className="bg-light-yellow">
      <div className="container flex justify-between items-center py-4">
        <Logo whiteText={false} />
        <ul className="flex space-x-3 text-lg font-semibold cursor-pointer">
          <li>Pizza</li>
          <li>Drinks</li>
          <li>Desserts</li>
        </ul>
        <div className="bg-hot-red">{rightContentSlot}</div>
      </div>
    </div>
  );
}

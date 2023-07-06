import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export function ModalLeft({ children }: Props) {
  return <div className="flex flex-col">{children}</div>;
}

ModalLeft.BottomSlot = function ModalBottomSlot({
  children,
}: {
  children: ReactNode;
}) {
  return <div className="flex justify-between mt-auto">{children}</div>;
};

import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export function ModalLeft({ children }: Props) {
  return <div className="flex flex-col">{children}</div>;
}

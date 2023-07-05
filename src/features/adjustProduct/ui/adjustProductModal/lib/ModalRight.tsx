import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export function ModalRight({ children }: Props) {
  return (
    <div className="flex flex-col space-y-2">
      <div className="font-bold text-3xl text-center text-jet-black">
        😈 Surrender to Temptation!
      </div>
      <p className="mt-2 text-center text-jet-black/80 font-semibold pb-4">
        Indulge in the sinful creation of your own pizza, a tantalizing blend of
        evil temptations that will capture your taste buds and devour your soul.
      </p>
      {children}
    </div>
  );
}

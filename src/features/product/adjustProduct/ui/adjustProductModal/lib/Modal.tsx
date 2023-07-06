import ReactDOM from 'react-dom';
import { ReactNode } from 'react';

type Props = {
  close: () => void;
  children: ReactNode;
};

export function Modal({ children, close }: Props) {
  const portal = document.getElementById('toppings-modal');

  if (!portal) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="pr-[17px] flex w-full h-full fixed left-0 right-0 top-0 bottom-0 justify-center items-center transition delay-150 ease-in-out">
      <input
        onClick={() => close()}
        className="absolute z-20 bg-light-yellow/90 w-full h-full top-0 left-0 cursor-default"
      />
      <div className="modal-grid-template p-12 z-30 w-[1084px] h-[800px] bg-white rounded-3xl">
        {children}
      </div>
    </div>,
    portal
  );
}

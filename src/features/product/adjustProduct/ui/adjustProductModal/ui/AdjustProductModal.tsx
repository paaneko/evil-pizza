import { ReactNode, useState } from 'react';
import { Modal } from '../lib/Modal';
import { ModalRight } from '../lib/ModalRight';
import { ModalLeft } from '../lib/ModalLeft';
import { ProductInfo } from '../../productInfo/ui/ProductInfo';
import { useAdjustProductContext } from '../../../model/AdjustProductContext';

type Props = {
  children: ReactNode;
};

export function AdjustProductModal({ children }: Props) {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const { product } = useAdjustProductContext();

  const closeModal = () => {
    document.body.classList.remove('overflow-hidden');
    document.body.classList.remove('mr-[17px]');

    setOpenModal(false);
  };
  if (openModal) {
    document.body.classList.add('overflow-hidden');
    document.body.classList.add('mr-[17px]');
  }

  if (
    product.toppings.length === 0 &&
    product.ingredients.filter((ingr) => !ingr.required).length === 0
  ) {
    return null;
  }

  return (
    <>
      <button
        className="w-full bg-light-yellow font-bold border-2 border-hot-red px-6 pb-[6px] pt-2 text-xs uppercase leading-normal text-hot-red hover:text-white hover:bg-goldenrod"
        type="button"
        onClick={() => setOpenModal(true)}
      >
        Adjust Toppings
      </button>
      {openModal && <Modal close={closeModal}>{children}</Modal>}
    </>
  );
}

AdjustProductModal.Right = ModalRight;
AdjustProductModal.Left = ModalLeft;
AdjustProductModal.Info = ProductInfo;

import { ReactNode, useState } from 'react';
import { Modal } from '../lib/Modal';
import { ModalRight } from '../lib/ModalRight';
import { ModalLeft } from '../lib/ModalLeft';
import { ProductInfo } from '../../productInfo/ui/ProductInfo';

type Props = {
  children: ReactNode;
};

function AdjustProductModal({ children }: Props) {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const closeModal = () => {
    document.body.classList.remove('overflow-hidden');
    document.body.classList.remove('mr-[17px]');

    setOpenModal(false);
  };
  if (openModal) {
    document.body.classList.add('overflow-hidden');
    document.body.classList.add('mr-[17px]');
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

export default AdjustProductModal;

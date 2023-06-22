import { useState } from 'react';
import { AdjustToppingsModal } from './AdjustToppingsModal';
import { ModalSlotsType } from '../model/types';

export function AdjustToppingsModalButton({
  doughToggleSlot,
  sizeToggleSlot,
  removeIngredientsSlot,
  addToppingsSlot,
  imageSlot,
}: ModalSlotsType) {
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
      {openModal && (
        <AdjustToppingsModal
          imageSlot={imageSlot}
          sizeToggleSlot={sizeToggleSlot}
          doughToggleSlot={doughToggleSlot}
          addToppingsSlot={addToppingsSlot}
          removeIngredientsSlot={removeIngredientsSlot}
          close={closeModal}
        />
      )}
    </>
  );
}

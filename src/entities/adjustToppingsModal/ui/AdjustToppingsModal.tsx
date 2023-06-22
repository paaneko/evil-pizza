import ReactDOM from 'react-dom';
import { ModalSlotsType } from '../model/types';

export function AdjustToppingsModal(
  props: ModalSlotsType & { close: () => void }
) {
  const portal = document.getElementById('toppings-modal');
  const {
    doughToggleSlot,
    sizeToggleSlot,
    removeIngredientsSlot,
    imageSlot,
    addToppingsSlot,
    close,
  } = props;

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
        <div className="flex items-center flex-col">
          {imageSlot && <div>{imageSlot}</div>}
          {removeIngredientsSlot && <div>{removeIngredientsSlot}</div>}
        </div>
        <div className="flex-grow">
          <div className="font-bold text-3xl text-center text-jet-black">
            😈 Surrender to Temptation!
          </div>
          <p className="mt-2 text-center text-jet-black/80 font-semibold">
            Indulge in the sinful creation of your own pizza, a tantalizing
            blend of evil temptations that will capture your taste buds and
            devour your soul.
          </p>
          <div className="mt-5">
            {sizeToggleSlot && <div>{sizeToggleSlot}</div>}
            {doughToggleSlot && <div className="mt-2">{doughToggleSlot}</div>}
            {addToppingsSlot && <div>{addToppingsSlot}</div>}
          </div>
        </div>
      </div>
    </div>,
    portal
  );
}

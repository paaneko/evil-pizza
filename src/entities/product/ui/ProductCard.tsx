'use client';

import Image from 'next/image';
import React from 'react';
import { useAppDispatch } from '@shared/model';
import { ProductType, SizeSpecId } from '../model/types';
import { changeProductSize } from '../model/slice';

type Props = {
  product: ProductType;
};

export const ProductCard = React.memo((props: Props) => {
  const { product } = props;
  const { id, name, selectedSizeId, sizeSpecs } = product;

  const dispatch = useAppDispatch();

  const selectProductSize = (sizeId: SizeSpecId) => {
    dispatch(
      changeProductSize({
        productId: id,
        selectedSize: sizeId,
      })
    );
  };
  return (
    <div className="w-[280px] h-[400px]">
      <div className="">
        <Image width={250} height={250} src="/pizza.webp" alt="pizza" />
      </div>
      <h2 className="font-semibold text-2xl text-center">{name}</h2>
      <div className="flex justify-between">
        {sizeSpecs.map((item) => (
          <button
            onClick={() => {
              selectProductSize(item.id);
            }}
            className={`flex-grow ${
              selectedSizeId === item.id
                ? 'bg-hot-red text-white'
                : 'bg-light-yellow'
            }`}
            key={item.id}
            type="button"
          >
            {item.name}
          </button>
        ))}
      </div>
      {/* {selectedDoughId && ( */}
      {/*  <div className="flex justify-between pt-2"> */}
      {/*    {doughSpecs.map((item) => ( */}
      {/*      <button */}
      {/*        className={`p-2 text-xl font-semibold flex-grow ${ */}
      {/*          selectedDoughId === item.id */}
      {/*            ? 'bg-hot-red text-white' */}
      {/*            : 'bg-light-yellow' */}
      {/*        }`} */}
      {/*        key={item.id} */}
      {/*        type="button" */}
      {/*      > */}
      {/*        {item.name} */}
      {/*      </button> */}
      {/*    ))} */}
      {/*  </div> */}
      {/* )} */}
    </div>
  );
});

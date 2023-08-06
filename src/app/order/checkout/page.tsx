'use client';

import { Stepper } from '@features/cart';
import { useForm, type FieldErrors, type Control } from 'react-hook-form';
import { getUserCartId, useCreateOrderMutation } from '@entities/cart';
import Link from 'next/link';
import {
  ContactInfoForm,
  type ContactInfoType,
} from '@features/checkout/contactInfoForm';
import {
  type PaymentMethodType,
  PaymentMethod,
} from '@features/checkout/paymentMethod';
import {
  type AddressInfoType,
  AddressInfoForm,
} from '@features/checkout/addressInfoForm';
import type { DeliveryInfoType } from '@entities/cart';
import { useAppSelector } from '@shared/model';
import { redirect } from 'next/navigation';

// TODO add to each func name suffix Page
export default function Checkout() {
  const orderCartId = useAppSelector(getUserCartId);
  const [createOrder, { isError, isSuccess }] = useCreateOrderMutation();

  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<DeliveryInfoType>({
    mode: 'onBlur',
    defaultValues: { paymentMethod: 'cash' },
  });

  // TODO maybe make form feature?
  const onSubmit = (data: DeliveryInfoType) => {
    createOrder({
      orderData: {
        orderInfo: data,
        // on this stage orderCartId cannot be null
        orderCartId: orderCartId!,
      },
    });
  };

  if (isSuccess) {
    redirect('/order/status/success');
  }

  if (isError) {
    redirect('order/status/failed');
  }

  return (
    <div className="container mb-32">
      <div className="mt-4 ">
        <Stepper currentIndex={2} />
      </div>
      <h2 className="text-4xl font-bold mt-8 ">Checkout</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <section>
            <ContactInfoForm
              /**
               * 🧠 Think About It
               * How to prevent type cross imports
               *
               * In order to register form fields inside each form feature component,
               * you need to pass a common DeliveryInfoType
               * which contains all types of fields of each form.
               *
               * In order to bypass the type error I found this way:
               */
              control={control as Control<any> as Control<ContactInfoType>}
              errors={errors as FieldErrors<ContactInfoType>}
            />
          </section>
          <section>
            <AddressInfoForm
              control={control as Control<any> as Control<AddressInfoType>}
              errors={errors as FieldErrors<AddressInfoType>}
            />
          </section>
        </div>
        <section>
          <PaymentMethod
            control={control as Control<any> as Control<PaymentMethodType>}
          />
        </section>
        <div className="flex justify-between items-center mt-12">
          <Link href="/order/cart">
            <div className="w-32 text-center p-3 bg-goldenrod rounded-lg text-white font-semibold cursor-pointer">
              Back to Cart
            </div>
          </Link>
          <button
            disabled={!isValid}
            type="submit"
            className={`${
              isValid ? 'bg-hot-red cursor-pointer' : 'bg-gray'
            } w-32 text-center p-3 bg-goldenrod rounded-lg text-white font-semibold`}
          >
            Order
          </button>
        </div>
      </form>
    </div>
  );
}

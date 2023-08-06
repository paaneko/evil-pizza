import { type Control, Controller } from 'react-hook-form';
import { PaymentMethodType } from '../model/types';

type Props = {
  control: Control<PaymentMethodType>;
};

// TODO use heroicons lib instead of this
function ErrorIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="red"
      className="w-6 h-6 mr-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
      />
    </svg>
  );
}

export function PaymentMethod({ control }: Props) {
  const activeClass =
    'text-white border-b-[3px] border-hot-red bg-goldenrod cursor-default hover:bg-none';
  return (
    <>
      <h3 className="text-gray text-2xl font-semibold mt-6">Payment Type</h3>
      <p className="mt-2 ">Select your payment method</p>
      <Controller
        name="paymentMethod"
        control={control}
        rules={{ required: 'Please select a gender' }}
        render={({ field, fieldState }) => (
          <div className="mt-4">
            <div
              className="w-full h-12 flex justify-evenly bg-dark-white rounded-lg space-x-1.5 px-2"
              role="group"
            >
              <label
                htmlFor="cash"
                className={`w-full my-1.5 flex justify-center items-center text-sm rounded font-semibold text-jet-black select-none cursor-pointer ${
                  field.value === 'cash' && activeClass
                }`}
              >
                Cash
                <input
                  className="absolute hidden"
                  type="radio"
                  /* eslint-disable-next-line react/jsx-props-no-spreading */
                  {...field}
                  value="cash"
                  id="cash"
                />
              </label>
              <label
                htmlFor="google_pay"
                className={`w-full my-1.5 flex justify-center items-center text-sm rounded font-semibold text-jet-black select-none cursor-pointer ${
                  field.value === 'google_pay' && activeClass
                }`}
              >
                Google Pay
                <input
                  className="absolute hidden"
                  type="radio"
                  /* eslint-disable-next-line react/jsx-props-no-spreading */
                  {...field}
                  value="google_pay"
                  id="google_pay"
                />
              </label>
              <label
                htmlFor="online_card"
                className={`w-full my-1.5 flex justify-center items-center text-sm rounded font-semibold text-jet-black select-none cursor-pointer ${
                  field.value === 'online_card' && activeClass
                }`}
              >
                Online Card
                <input
                  className="absolute hidden"
                  type="radio"
                  /* eslint-disable-next-line react/jsx-props-no-spreading */
                  {...field}
                  value="online_card"
                  id="online_card"
                />
              </label>
            </div>
            <div className="text-sm mt-1 text-hot-red">
              {fieldState?.error && (
                <p className="flex items-center">
                  <ErrorIcon />
                  {fieldState?.error?.message || 'Error!'}
                </p>
              )}
            </div>
          </div>
        )}
      />
    </>
  );
}

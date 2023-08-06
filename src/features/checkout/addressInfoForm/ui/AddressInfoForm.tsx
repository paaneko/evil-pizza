import type { Control, FieldErrors } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { AddressInfoType } from '../model/types';

type Props = {
  control: Control<AddressInfoType>;
  errors: FieldErrors<AddressInfoType>;
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

export function AddressInfoForm({ control, errors }: Props) {
  const errorInputStyle = 'text-hot-red border-hot-red';

  return (
    <>
      <h3 className="text-gray text-2xl font-semibold mt-6">Address</h3>
      <p className="mt-2">Enter your delivery information</p>
      <div>
        <div>
          <label
            htmlFor="street"
            className="block text-lg mb-2 font-semibold text-jet-black-900 mt-4"
          >
            Street* :
            <Controller
              control={control}
              name="street"
              rules={{
                required: 'This field is required!',
                maxLength: {
                  value: 128,
                  message: 'The street cannot be longer than 128 characters!',
                },
              }}
              render={({ field }) => (
                <input
                  /* eslint-disable-next-line react/jsx-props-no-spreading */
                  {...field}
                  type="text"
                  value={field.value || ''}
                  className={`${
                    errors.street
                      ? errorInputStyle
                      : 'text-jet-black border-gray'
                  }bg-dark-white border text-sm font-medium rounded-lg focus:ring-hot-red focus:border-hot-red block w-full p-3`}
                  placeholder="Street"
                />
              )}
            />
            {errors.street && (
              <div className="text-sm mt-1 text-hot-red">
                <p className="flex items-center">
                  <ErrorIcon />
                  {errors.street.message || 'Error!'}
                </p>
              </div>
            )}
          </label>
        </div>

        <div>
          <label
            htmlFor="houseNumber"
            className="block text-lg mb-2 font-semibold text-jet-black-900 mt-4"
          >
            House Number* :
            <Controller
              control={control}
              name="houseNumber"
              rules={{
                required: 'This field is required!',
                maxLength: {
                  value: 6,
                  message:
                    'The house number cannot be longer than 6 characters!',
                },
              }}
              render={({ field }) => (
                <input
                  /* eslint-disable-next-line react/jsx-props-no-spreading */
                  {...field}
                  type="text"
                  value={field.value || ''}
                  className={`${
                    errors.houseNumber
                      ? errorInputStyle
                      : 'text-jet-black border-gray'
                  }bg-dark-white border text-sm font-medium rounded-lg focus:ring-hot-red focus:border-hot-red block w-full p-3`}
                  placeholder="House Number"
                />
              )}
            />
            {errors.houseNumber && (
              <div className="text-sm mt-1 text-hot-red">
                <p className="flex items-center">
                  <ErrorIcon />
                  {errors.houseNumber.message || 'Error!'}
                </p>
              </div>
            )}
          </label>
        </div>

        <div>
          <label
            htmlFor="entrance"
            className="block text-lg mb-2 font-semibold text-jet-black-900 mt-4"
          >
            Entrance:
            <Controller
              control={control}
              name="entrance"
              rules={{
                maxLength: {
                  value: 128,
                  message: 'The entrance cannot be longer than 128 characters!',
                },
              }}
              render={({ field }) => (
                <input
                  /* eslint-disable-next-line react/jsx-props-no-spreading */
                  {...field}
                  type="text"
                  value={field.value || ''}
                  className={`${
                    errors.entrance
                      ? errorInputStyle
                      : 'text-jet-black border-gray'
                  }bg-dark-white border text-sm font-medium rounded-lg focus:ring-hot-red focus:border-hot-red block w-full p-3`}
                  placeholder="Entrance"
                />
              )}
            />
            {errors.entrance && (
              <div className="text-sm mt-1 text-hot-red">
                <p className="flex items-center">
                  <ErrorIcon />
                  {errors.entrance.message || 'Error!'}
                </p>
              </div>
            )}
          </label>
        </div>

        <div>
          <label
            htmlFor="apartment"
            className="block text-lg mb-2 font-semibold text-jet-black-900 mt-4"
          >
            Apartment:
            <Controller
              control={control}
              name="apartment"
              rules={{
                maxLength: {
                  value: 128,
                  message:
                    'The apartment cannot be longer than 128 characters!',
                },
              }}
              render={({ field }) => (
                <input
                  /* eslint-disable-next-line react/jsx-props-no-spreading */
                  {...field}
                  type="text"
                  value={field.value || ''}
                  className={`${
                    errors.apartment
                      ? errorInputStyle
                      : 'text-jet-black border-gray'
                  }bg-dark-white border text-sm font-medium rounded-lg focus:ring-hot-red focus:border-hot-red block w-full p-3`}
                  placeholder="Apartment"
                />
              )}
            />
            {errors.apartment && (
              <div className="text-sm mt-1 text-hot-red">
                <p className="flex items-center">
                  <ErrorIcon />
                  {errors.apartment.message || 'Error!'}
                </p>
              </div>
            )}
          </label>
        </div>

        <div>
          <label
            htmlFor="floor"
            className="block text-lg mb-2 font-semibold text-jet-black-900 mt-4"
          >
            Floor:
            <Controller
              control={control}
              name="floor"
              rules={{
                maxLength: {
                  value: 6,
                  message: 'The floor cannot be longer than 6 characters!',
                },
              }}
              render={({ field }) => (
                <input
                  /* eslint-disable-next-line react/jsx-props-no-spreading */
                  {...field}
                  type="text"
                  value={field.value || ''}
                  className={`${
                    errors.floor
                      ? errorInputStyle
                      : 'text-jet-black border-gray'
                  }bg-dark-white border text-sm font-medium rounded-lg focus:ring-hot-red focus:border-hot-red block w-full p-3`}
                  placeholder="Floor"
                />
              )}
            />
            {errors.floor && (
              <div className="text-sm mt-1 text-hot-red">
                <p className="flex items-center">
                  <ErrorIcon />
                  {errors.floor.message || 'Error!'}
                </p>
              </div>
            )}
          </label>
        </div>

        <div>
          <label
            htmlFor="code"
            className="block text-lg mb-2 font-semibold text-jet-black-900 mt-4"
          >
            Code:
            <Controller
              control={control}
              name="code"
              rules={{
                maxLength: {
                  value: 6,
                  message: 'The code cannot be longer than 6 characters!',
                },
              }}
              render={({ field }) => (
                <input
                  /* eslint-disable-next-line react/jsx-props-no-spreading */
                  {...field}
                  type="text"
                  value={field.value || ''}
                  className={`${
                    errors.code ? errorInputStyle : 'text-jet-black border-gray'
                  }bg-dark-white border text-sm font-medium rounded-lg focus:ring-hot-red focus:border-hot-red block w-full p-3`}
                  placeholder="Code"
                />
              )}
            />
            {errors.code && (
              <div className="text-sm mt-1 text-hot-red">
                <p className="flex items-center">
                  <ErrorIcon />
                  {errors.code.message || 'Error!'}
                </p>
              </div>
            )}
          </label>
        </div>
      </div>
    </>
  );
}

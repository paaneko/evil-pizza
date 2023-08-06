import type { Control, FieldErrors } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { ContactInfoType } from '../model/types';

type Props = {
  control: Control<ContactInfoType>;
  errors: FieldErrors<ContactInfoType>;
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

export function ContactInfoForm({ control, errors }: Props) {
  const errorInputStyle = 'text-hot-red border-hot-red';

  return (
    <>
      <h3 className="text-gray text-2xl font-semibold mt-6">Contacts</h3>
      <p className="mt-2">Enter your contact information</p>
      <div>
        <Controller
          control={control}
          name="name"
          rules={{
            required: 'This field is required!',
            maxLength: {
              value: 128,
              message: 'The name cannot be longer than 128 characters!',
            },
          }}
          render={({ field }) => (
            <label
              htmlFor="name"
              className="block text-lg mb-2 font-semibold text-jet-black-900 mt-4"
            >
              Name* :
              <input
                /* eslint-disable-next-line react/jsx-props-no-spreading */
                {...field}
                value={field.value || ''}
                type="text"
                className={`${
                  errors.name ? errorInputStyle : 'text-jet-black border-gray'
                } bg-dark-white border text-sm font-medium rounded-lg focus:ring-hot-red focus:border-hot-red block w-full p-3`}
                placeholder="Name"
              />
              <div className="text-sm mt-1 text-hot-red">
                {errors.name && (
                  <p className="flex items-center">
                    <ErrorIcon />
                    {errors?.name?.message || 'Error!'}
                  </p>
                )}
              </div>
            </label>
          )}
        />
      </div>

      <div>
        <Controller
          control={control}
          name="email"
          rules={{
            maxLength: {
              value: 128,
              message: 'The email cannot be longer than 128 characters!',
            },
          }}
          render={({ field }) => (
            <label
              htmlFor="email"
              className="block text-lg mb-2 font-semibold text-jet-black-900 mt-4"
            >
              Email:
              <input
                /* eslint-disable-next-line react/jsx-props-no-spreading */
                {...field}
                type="text"
                value={field.value || ''}
                className={`${
                  errors.email ? errorInputStyle : 'text-jet-black border-gray'
                } bg-dark-white border text-sm font-medium rounded-lg focus:ring-hot-red focus:border-hot-red block w-full p-3`}
                placeholder="Email"
              />
              <div className="text-sm mt-1 text-hot-red">
                {errors.email && (
                  <p className="flex items-center">
                    <ErrorIcon />
                    {errors?.email?.message || 'Error!'}
                  </p>
                )}
              </div>
            </label>
          )}
        />
      </div>

      <div>
        <Controller
          control={control}
          name="phoneNumber"
          rules={{
            required: 'This field is required!',
            pattern: {
              value: /^[0-9]*$/, // Regular expression to allow only numeric values
              message: 'Only numeric values are allowed',
            },
          }}
          render={({ field }) => (
            <label
              htmlFor="phoneNumber"
              className="block text-lg mb-2 font-semibold text-jet-black-900 mt-4"
            >
              Phone Number* :
              <input
                /* eslint-disable-next-line react/jsx-props-no-spreading */
                {...field}
                type="text"
                value={field.value || ''}
                className={`${
                  errors.phoneNumber
                    ? errorInputStyle
                    : 'text-jet-black border-gray'
                } bg-dark-white border text-sm font-medium rounded-lg focus:ring-hot-red focus:border-hot-red block w-full p-3`}
                placeholder="Phone Number"
              />
              <div className="text-sm mt-1 text-hot-red">
                {errors.phoneNumber && (
                  <p className="flex items-center">
                    <ErrorIcon />
                    {errors?.phoneNumber?.message || 'Error!'}
                  </p>
                )}
              </div>
            </label>
          )}
        />
      </div>
    </>
  );
}

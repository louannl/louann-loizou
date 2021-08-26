import { send } from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import tw from '../../../helpers/tailwind';
import LoadingIcon from '../icons/LoadingIcon';

const labelAndInputClass = tw('px-3 w-full md:w-1/2');

const labelClass = tw(
  'block',
  'uppercase',
  'tracking-wide',
  'text-gray-700',
  'text-xs',
  'font-bold',
  'mb-2'
);

const inputClass = tw(
  'appearance-none',
  'block',
  'w-full',
  'bg-gray-200',
  'text-gray-700',
  'border',
  'border-gray-200',
  'rounded',
  'py-3 px-4',
  'mb-3',
  'leading-tight',
  'hover:bg-white',
  'focus:outline-none',
  'focus:bg-white',
  'focus:border-gray-500'
);

const ErrorText = (props) => {
  return (
    <div className={tw('text-red-600', 'text-xs')}>⚠ {props.children}</div>
  );
};

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const reRef = useRef();

  const onSubmit = async (data) => {
    setIsLoading(true);
    const token = await reRef.current.executeAsync();
    const params = {
      ...data,
      'g-recaptcha-response': token,
    };
    send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      params,
      process.env.REACT_APP_USER_ID
    )
      .then((res) => {
        toast.success('Response received, thank you for your enquiry!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error(`An Error occurred: ${err.message}`, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setIsLoading(false);
      });
  };

  let submitButton = (
    <input
      type="submit"
      className={tw(
        'justify-center',
        'py-2 px-4',
        'border',
        'border-transparent',
        'shadow-sm',
        'text-sm',
        'font-medium',
        'text-white',
        'bg-blue-dark',
        'transform duration-300',
        'hover:bg-blue',
        'outline-none',
        'cursor-pointer'
      )}
    />
  );

  if (isLoading) {
    submitButton = (
      <button
        className={tw(
          'justify-center',
          'py-2 px-4',
          'border',
          'border-transparent',
          'shadow-sm',
          'text-sm',
          'font-medium',
          'text-white',
          'bg-gray-400',
          'outline-none',
          'cursor-wait'
        )}
      >
        <LoadingIcon />
      </button>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid shadow-lg rounded-md sm:overflow-hidden m-4 bg-white mt-8"
    >
      <h1 className="text-center lg:text-left text-lg font-medium pt-6 lg:pl-6 leading-6 text-gray-900">
        Contact Form
      </h1>
      <div className="flex flex-wrap -mx-2 p-6">
        <div className={labelAndInputClass}>
          <label className={labelClass}>Name</label>
          <input
            type="text"
            className={inputClass}
            placeholder="Name"
            {...register('Name', { required: true, maxLength: 80 })}
          />
          {errors.Name?.type === 'required' && (
            <ErrorText>Name is required</ErrorText>
          )}
          {errors.Name?.type === 'maxLength' && (
            <ErrorText>Name is too long</ErrorText>
          )}
        </div>
        <div className={labelAndInputClass}>
          <label className={labelClass}>Email</label>
          <input
            type="text"
            className={inputClass}
            placeholder="Email"
            {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.Email?.type === 'required' && (
            <ErrorText>Email is required</ErrorText>
          )}
          {errors.Email?.type === 'pattern' && (
            <ErrorText>Email is not valid</ErrorText>
          )}
        </div>
        <div className={labelAndInputClass + 'md:w-full lg:w-full'}>
          <label className={labelClass}>Message</label>
          <textarea
            type="text"
            rows={3}
            className={inputClass}
            placeholder="Message"
            {...register('Message', { required: true })}
          />
          {errors.Message?.type === 'required' && (
            <ErrorText>Message is required</ErrorText>
          )}
        </div>
      </div>
      {submitButton}
      <ReCAPTCHA
        ref={reRef}
        size="invisible"
        className="z-50"
        sitekey={process.env.REACT_APP_CAPTCHA_SITE_KEY}
      />
    </form>
  );
};

export default ContactForm;

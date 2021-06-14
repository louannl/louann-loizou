import { useState } from 'react';
import tw from '../../../helpers/tailwind';

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

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    //TODO: send info
  };

  return (
    <form className="grid shadow-lg rounded-md sm:overflow-hidden m-4 bg-white mt-8">
      <h1 className="text-center lg:text-left text-lg font-medium pt-6 pl-6 leading-6 text-gray-900">
        Contact Form
      </h1>
      <div className="flex flex-wrap -mx-2 p-6">
        <div className={labelAndInputClass}>
          <label className={labelClass}>Name</label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
          />
        </div>
        <div className={labelAndInputClass}>
          <label className={labelClass}>Email</label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
        </div>
        <div className={labelAndInputClass + 'md:w-full lg:w-full'}>
          <label className={labelClass}>Message</label>
          <textarea
            type="text"
            id="message"
            placeholder="Message"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>
      <input
        type="submit"
        onClick={handleSubmit}
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
          'hover:bg-blue',
          'focus:outline-none',
          'focus:ring-2',
          'focus:ring-offset-2',
          'focus:ring-pink'
        )}
      />
    </form>
  );
};

export default ContactForm;

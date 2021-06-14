import tw from '../../../helpers/tailwind';

export const SubHeader = (props) => {
  return (
    <p
      className={tw(
        'mt-3 sm:mt-5 md:mt-5',
        'mb-3',
        'sm:text-lg, md:text-xl',
        'sm:mx-auto, lg:mx-0',
        'text-center',
        'lg:text-left',
        'text-base',
        'text-gray-600',
        'font-medium',
        props.className
      )}
    >
      {props.children}
    </p>
  );
};

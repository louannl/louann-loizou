import tw from '../../../helpers/tailwind';

export const SubHeader = (props) => {
  return (
    <p
      className={tw(
        'm-4 lg:mx-0',
        'mt-3 sm:mt-5 md:mt-5',
        'mb-3',
        'sm:text-lg, md:text-xl',
        'text-center',
        'lg:text-left',
        'text-base',
        'font-medium',
        props.className
      )}
    >
      {props.children}
    </p>
  );
};

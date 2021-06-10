import tw from '../../../helpers/tailwind';

export const Link = (props) => {
  return (
    <div className="rounded-md shadow">
      <a
        href={props.link}
        className={tw(
          'w-full',
          'flex',
          'items-center',
          'justify-center',
          'px-8 py-3',
          'border border-transparent',
          'text-base font-medium',
          'rounded-md',
          'hover:bg-pink hover:text-white',
          'md:py-4 md:text-lg md:px-10',
          'filter drop-shadow-md md:drop-shadow-xl',
          props.className
        )}
      >
        {props.children}
      </a>
    </div>
  );
};

export const BlueLink = (props) => {
  return (
    <Link
      className={tw('bg-blue', 'text-white', props.className)}
      link={props.link}
    >
      {props.children}
    </Link>
  );
};

export const YellowLink = (props) => {
  return (
    <Link className={tw('bg-yellow', props.className)} link={props.link}>
      {props.children}
    </Link>
  );
};

export const MainLink = (props) => {
  return (
    <div className="rounded-md shadow mt-3 sm:mt-0 sm:mr-3">
      {props.children}
    </div>
  );
};

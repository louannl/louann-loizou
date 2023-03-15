import { Link as ScrollLink } from 'react-scroll';
import { AiFillGithub } from 'react-icons/ai';
import { MdPhonelink, MdPhonelinkOff } from 'react-icons/md';
import tw from '../../../helpers/tailwind';

export const ButtonLink = (props) => {
  if (props.website) {
    return (
      <div className="rounded-md shadow">
        <button
          onClick={() => window.open(props.website)}
          className={tw(
            'w-full',
            'flex',
            'items-center',
            'justify-center',
            'px-8 py-3',
            'border border-transparent',
            'text-base font-medium',
            'rounded-md',
            'transform duration-500',
            'hover:bg-pink hover:text-white',
            'md:py-4 md:text-lg md:px-10',
            'filter drop-shadow-md md:drop-shadow-xl',
            'cursor-pointer',
            props.className
          )}
        >
          {props.children}
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-md shadow">
      <ScrollLink
        to={props.link}
        smooth={true}
        className={tw(
          'w-full',
          'flex',
          'items-center',
          'justify-center',
          'px-8 py-3',
          'border border-transparent',
          'text-base font-medium',
          'rounded-md',
          'transform duration-500',
          'hover:bg-pink hover:text-white',
          'md:py-4 md:text-lg md:px-10',
          'filter drop-shadow-md md:drop-shadow-xl',
          'cursor-pointer',
          props.className
        )}
      >
        {props.children}
      </ScrollLink>
    </div>
  );
};

export const BlueLink = (props) => {
  return (
    <ButtonLink
      className={tw('bg-blue', 'text-white', props.className)}
      link={props.link}
      website={props.website}
    >
      {props.children}
    </ButtonLink>
  );
};

export const MainLink = (props) => {
  return <div className="rounded-md m-4 lg:ml-0">{props.children}</div>;
};

const iconClasses =
  'h-8 w-auto cursor-pointer transform duration-500, hover:fill-current hover:text-pink mr-1 mt-2';

export const CodeLink = (props) => {
  return (
    <AiFillGithub
      className={iconClasses}
      title="link to github repo"
      onClick={() => window.open(props.link)}
    />
  );
};

export const WebsiteLink = (props) => {
  if (props.link) {
    return (
      <MdPhonelink
        title={`${props.title} link`}
        className={iconClasses}
        onClick={() => window.open(props.link)}
      />
    );
  }

  return (
    <MdPhonelinkOff
      color={'#5a5858'}
      className={iconClasses}
      title="unused link"
    />
  );
};

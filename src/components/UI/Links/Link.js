import { Link } from 'react-scroll';
import { LogoGithub, Link as WebLink } from 'react-ionicons';
import tw from '../../../helpers/tailwind';

export const ButtonLink = (props) => {
  return (
    <div className="rounded-md shadow">
      <Link
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
          'hover:bg-pink hover:text-white',
          'md:py-4 md:text-lg md:px-10',
          'filter drop-shadow-md md:drop-shadow-xl',
          props.className
        )}
      >
        {props.children}
      </Link>
    </div>
  );
};

export const BlueLink = (props) => {
  return (
    <ButtonLink
      className={tw('bg-blue', 'text-white', props.className)}
      link={props.link}
    >
      {props.children}
    </ButtonLink>
  );
};

export const YellowLink = (props) => {
  return (
    <ButtonLink className={tw('bg-yellow', props.className)} link={props.link}>
      {props.children}
    </ButtonLink>
  );
};

export const MainLink = (props) => {
  return (
    <div className="rounded-md shadow mt-3 sm:mt-0 sm:mr-3">
      {props.children}
    </div>
  );
};

const iconClasses =
  'cursor-pointer hover:fill-current hover:text-pink mr-1 mt-2';

export const CodeLink = (props) => {
  return (
    <LogoGithub
      height="2rem"
      width="2rem"
      color={'#333'}
      cssClasses={iconClasses}
      onClick={() => window.open(props.link)}
    />
  );
};

export const WebsiteLink = (props) => {
  if (props.link) {
    return (
      <WebLink
        height="2rem"
        width="2rem"
        cssClasses={iconClasses}
        onClick={() => window.open(props.link)}
      />
    );
  }

  return (
    <WebLink
      color={'#5a5858'}
      height="2rem"
      width="2rem"
      cssClasses="cursor-not-allowed mr-1 mt-2"
    />
  );
};

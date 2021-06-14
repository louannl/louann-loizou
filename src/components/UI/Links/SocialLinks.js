import { LogoGithub, LogoLinkedin } from 'react-ionicons';
import tw from '../../../helpers/tailwind';

const SocialLinks = () => {
  const classes = 'cursor-pointer hover:fill-current hover:text-pink mr-1 mt-2';

  return (
    <span
      className={tw('flex flex-wrap', 'justify-center', 'lg:justify-start')}
    >
      <LogoGithub
        color={'#211F1F'}
        height="2rem"
        width="2rem"
        onClick={() => window.open('https://github.com/louannl')}
        cssClasses={classes}
      />
      <LogoLinkedin
        color={'#0077b5'}
        height="2rem"
        width="2rem"
        onClick={() => window.open('https://www.linkedin.com/in/louann-loizou')}
        cssClasses={classes}
      />
    </span>
  );
};

export default SocialLinks;

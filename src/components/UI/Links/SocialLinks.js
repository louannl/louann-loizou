import { LogoGithub, LogoLinkedin } from 'react-ionicons';
import tw from '../../../helpers/tailwind';

const SocialLinks = (props) => {
  let hoverColor = 'text-pink';

  if (props.color === 'white') {
    hoverColor = 'text-blue';
  }

  const classes = `cursor-pointer hover:fill-current hover:${hoverColor} mr-1`;

  return (
    <span
      className={tw('flex flex-wrap', 'justify-center', 'lg:justify-start')}
    >
      <LogoGithub
        color={props.color ? '#F9F9F9' : '#211F1F'}
        height="2rem"
        width="2rem"
        title="link to my github"
        onClick={() => window.open('https://github.com/louannl')}
        cssClasses={classes}
      />
      <LogoLinkedin
        color={props.color ? '#F9F9F9' : '#0077b5'}
        height="2rem"
        width="2rem"
        title="link to my LinkedIn page"
        onClick={() => window.open('https://www.linkedin.com/in/louann-loizou')}
        cssClasses={classes}
      />
    </span>
  );
};

export default SocialLinks;

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import tw from '../../../helpers/tailwind';

const SocialLinks = (props) => {
  let hoverColor = 'text-mint';

  if (props.color === 'white') {
    hoverColor = 'text-themeDarkGrey';
  }

  const classes = ` fill-current h-10 w-auto cursor-pointer hover:fill-current hover:${hoverColor} mr-1`;

  return (
    <span
      className={tw('flex flex-wrap', 'justify-center', 'lg:justify-start')}
    >
      <AiFillGithub
        className={
          props.color ? 'text-white dark:text-white' + classes : 'text-githubGrey dark:text-white' + classes
        }
        title="link to my github"
        onClick={() => window.open('https://github.com/louannl')}
      />
      <AiFillLinkedin
        className={
          props.color ? 'text-white' + classes : 'text-linkedInBlue' + classes
        }
        title="link to my LinkedIn page"
        onClick={() => window.open('https://www.linkedin.com/in/louann-loizou')}
      />
    </span>
  );
};

export default SocialLinks;

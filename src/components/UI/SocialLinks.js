import { LogoGithub, LogoLinkedin } from 'react-ionicons';

const SocialLinks = () => {
  return (
    <span className="block flex">
      <LogoGithub color={'#00000'} height="2rem" width="2rem" />
      <LogoLinkedin color={'#00000'} height="2rem" width="2rem" />
    </span>
  );
};

export default SocialLinks;

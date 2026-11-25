import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const SocialLinks = ({ color }) => {
  const linkClasses = 'grid h-11 w-11 place-items-center rounded-full text-3xl hover:bg-white/15';

  return (
    <div className={`flex flex-wrap justify-center gap-1 lg:justify-start ${color === 'white' ? 'text-white' : ''}`}>
      <a className={linkClasses} href="https://github.com/louannl" target="_blank" rel="noreferrer" aria-label="GitHub">
        <AiFillGithub aria-hidden="true" />
      </a>
      <a className={linkClasses} href="https://www.linkedin.com/in/louann-loizou" target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <AiFillLinkedin aria-hidden="true" />
      </a>
    </div>
  );
};

export default SocialLinks;

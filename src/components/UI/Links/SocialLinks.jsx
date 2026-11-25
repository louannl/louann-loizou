import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import {
  GlassButtonGroup,
  GlassButtonGroupItem,
  GlassButtonGroupSeparator,
} from '../../liquid-glass/glass-button-group';

const profiles = [
  { name: 'GitHub', url: 'https://github.com/louannl', Icon: AiFillGithub },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/louann-loizou', Icon: AiFillLinkedin },
];

const SocialLinks = ({ color, grouped = false }) => {
  const links = profiles.map(({ name, url, Icon }) => {
    const link = (
      <a
        key={name}
        className={grouped ? undefined : 'grid h-11 w-11 place-items-center rounded-full text-3xl hover:bg-white/15'}
        href={url}
        target="_blank"
        rel="noreferrer"
        aria-label={name}
      >
        <Icon aria-hidden="true" />
      </a>
    );

    return grouped ? <GlassButtonGroupItem key={name} asChild>{link}</GlassButtonGroupItem> : link;
  });

  if (grouped) {
    return (
      <GlassButtonGroup size="lg" className="portfolio-profile-links bg-[#314d72] text-white" aria-label="Social profiles">
        {links[0]}
        <GlassButtonGroupSeparator className="portfolio-profile-divider" />
        {links[1]}
      </GlassButtonGroup>
    );
  }

  return (
    <div className={`flex flex-wrap justify-center gap-1 lg:justify-start ${color === 'white' ? 'text-white' : ''}`}>
      {links}
    </div>
  );
};

export default SocialLinks;

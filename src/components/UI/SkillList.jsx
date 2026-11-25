import {
  GlassPopover,
  GlassPopoverClose,
  GlassPopoverContent,
  GlassPopoverTitle,
  GlassPopoverTrigger,
} from '../liquid-glass/glass-popover';

const chip = 'portfolio-skill-tag rounded-full px-3 py-1 text-sm';

export default function SkillList({ skills, label, limit = skills.length }) {
  const extra = skills.length - limit;

  return (
    <ul className="flex flex-wrap items-center gap-2" aria-label="Tools and skills">
      {skills.slice(0, limit).map(skill => <li className={chip} key={skill}>{skill}</li>)}
      {extra > 0 && (
        <li>
          <GlassPopover>
            <GlassPopoverTrigger className="portfolio-skill-trigger" aria-label={`See all skills for ${label}`}>
              {`+${extra} more`}
            </GlassPopoverTrigger>
            <GlassPopoverContent over="edge" className="portfolio-glass-popup">
              <GlassPopoverTitle>Skills</GlassPopoverTitle>
              <ul className="flex flex-wrap gap-2">
                {skills.map(skill => <li className={chip} key={skill}>{skill}</li>)}
              </ul>
              <GlassPopoverClose className="portfolio-skill-close self-start">Done</GlassPopoverClose>
            </GlassPopoverContent>
          </GlassPopover>
        </li>
      )}
    </ul>
  );
}

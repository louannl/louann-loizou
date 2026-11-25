import React from 'react';
import {
  DiCss3,
  DiHtml5,
  DiSass,
  DiJsBadge,
  DiNodejs,
  DiNpm,
  DiReact,
  DiLinux,
  DiPostgresql,
  DiVisualstudio,
  DiGit,
  DiPython,
} from 'react-icons/di';

export const SkillIcons = () => {
  const iconStyle = 'h-24 w-auto mx-1';

  return (
    <div className="flex flex-wrap justify-center mt-8 mb-8">
      <DiHtml5 title="HTML" color={'#FF5733'} className={iconStyle} />
      <DiCss3 title="CSS" color={'#264de4'} className={iconStyle} />
      <DiSass title="SASS" color={'#cc6699'} className={iconStyle} />
      <DiJsBadge title="JavaScript" color={'#F0DB4F'} className={iconStyle} />
      <DiReact title="React" color={'#61DBFB'} className={iconStyle} />
      <DiNpm title="NPM" color={'#CC3534'} className={iconStyle} />
      <DiNodejs title="NodeJs" color={'#3C873A'} className={iconStyle} />
      <DiPython title="Python" color={'#306998'} className={iconStyle} />
      <DiPostgresql
        title="Postgresql"
        color={'#0064a5'}
        className={iconStyle}
      />
      <DiVisualstudio title="VSCode" color={'#0065A9'} className={iconStyle} />
      <DiGit title="Git" color={'#f34f29'} className={iconStyle} />
      <DiLinux title="Linux" className={iconStyle} />
    </div>
  );
};

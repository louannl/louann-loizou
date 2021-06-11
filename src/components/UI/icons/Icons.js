import React from 'react';
import {
  LogoCss3,
  LogoGoogle,
  LogoHtml5,
  LogoJavascript,
  LogoNodejs,
  LogoNpm,
  LogoReact,
  LogoSass,
  LogoTux,
  LogoWindows,
} from 'react-ionicons';

export const SkillIcons = () => {
  const iconSize = '100px';
  return (
    <div className="flex justify-center">
      <LogoHtml5
        title="HTML"
        color={'#FF5733'}
        height={iconSize}
        width={iconSize}
      />
      <LogoCss3
        title="CSS"
        color={'#264de4'}
        height={iconSize}
        width={iconSize}
      />
      <LogoSass
        title="SASS"
        color={'#cc6699'}
        height={iconSize}
        width={iconSize}
      />
      <LogoJavascript
        title="JavaScript"
        color={'#F0DB4F'}
        height={iconSize}
        width={iconSize}
      />
      <LogoNpm
        title="NPM"
        color={'#CC3534'}
        height={iconSize}
        width={iconSize}
      />
      <LogoNodejs
        title="NodeJs"
        color={'#3C873A'}
        height={iconSize}
        width={iconSize}
      />
      <LogoReact
        title="React"
        color={'#61DBFB'}
        height={iconSize}
        width={iconSize}
      />
      <LogoTux title="Linux" height={iconSize} width={iconSize} />
      <LogoGoogle
        title="Google"
        color={'#4285F4'}
        height={iconSize}
        width={iconSize}
      />
    </div>
  );
};

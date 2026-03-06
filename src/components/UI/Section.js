import { Fragment } from 'react';
import { Element } from 'react-scroll';
import tw from '../../helpers/tailwind';
import MultiLayeredWaves from './Waves/MultiLayeredWaves';
import TwoLayeredWaves from './Waves/TwoLayeredWaves';

export const Section = (props) => {
  return (
    <Fragment>
      <section className={tw(props.className, 'static')}>
        <Element name={props.name}>{props.children}</Element>
      </section>
      {props.className.includes('bg-themeLightGrey') ? (
        <div className={tw('aspect-w-10 aspect-h-1', 'w-full', '-my-2')}>
          <MultiLayeredWaves className="block dark:hidden" isDark={false} />
          <MultiLayeredWaves className="hidden dark:block" isDark={true} />
        </div>
      ) : null}
      {props.className.includes('bg-mint') ? (
        <div className={tw('aspect-w-10 aspect-h-1', 'w-full', '-my-2')}>
          <TwoLayeredWaves className="block dark:hidden" isDark={false} />
          <TwoLayeredWaves className="hidden dark:block" isDark={true} />
        </div>
      ) : null}
    </Fragment>
  );
};

export const Content = (props) => {
  return (
    <div
      className={tw(
        'max-w-screen-lg',
        'xl:max-w-screen-xl',
        'mx-auto lg:mx-8 xl:mx-auto',
        'pt-16',
        'pb-8',
        props.className
      )}
    >
      {props.children}
    </div>
  );
};

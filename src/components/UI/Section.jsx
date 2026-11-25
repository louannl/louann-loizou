import { Element } from 'react-scroll';
import tw from '../../helpers/tailwind';

export const Section = (props) => {
  return (
    <section className={tw(props.className, 'static')}>
      <Element id={props.name} name={props.name}>{props.children}</Element>
    </section>
  );
};

export const Content = (props) => {
  return (
    <div
      className={tw(
        'max-w-(--breakpoint-lg)',
        'xl:max-w-(--breakpoint-xl)',
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

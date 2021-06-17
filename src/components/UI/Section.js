import { Element } from 'react-scroll';
import tw from '../../helpers/tailwind';

export const Section = (props) => {
  return (
    <section className={tw(props.className, 'static')}>
      <Element name={props.name}>{props.children}</Element>
    </section>
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

import { Element } from 'react-scroll';
import tw from '../../helpers/tailwind';

export const Section = (props) => {
  return (
    <section className={tw(props.className, 'static min-h-1/2')}>
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
        'mx-auto',
        'pt-16',
        props.className
      )}
    >
      {props.children}
    </div>
  );
};

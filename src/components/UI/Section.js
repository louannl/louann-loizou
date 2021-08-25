import { Fragment } from 'react';
import { Element } from 'react-scroll';
import tw from '../../helpers/tailwind';

export const Section = (props) => {
  return (
    <Fragment>
      <section className={tw(props.className, 'static')}>
        <Element name={props.name}>{props.children}</Element>
      </section>
      {props.className.includes('bg-white') ? (
        <div
          className={tw(
            'aspect-w-10 aspect-h-1',
            'w-full',
            'bg-no-repeat',
            'bg-center',
            'bg-cover',
            'bg-white-waves',
            '-my-2'
          )}
        ></div>
      ) : null}
      {props.className.includes('bg-pink') ? (
        <div
          className={tw(
            'aspect-w-10 aspect-h-1',
            'w-full',
            'bg-no-repeat',
            'bg-center',
            'bg-cover',
            'bg-pink-waves',
            '-my-2'
          )}
        ></div>
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

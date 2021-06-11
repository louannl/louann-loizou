import tw from '../../helpers/tailwind';

export const Section = (props) => {
  return <section className={props.className}>{props.children}</section>;
};

export const Content = (props) => {
  return (
    <div
      className={tw(
        'relative z-10',
        'max-w-screen-lg',
        'xl:max-w-screen-xl',
        'mx-auto',
        props.className
      )}
    >
      {props.children}
    </div>
  );
};

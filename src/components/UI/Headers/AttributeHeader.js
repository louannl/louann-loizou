import tw from '../../../helpers/tailwind';

const AttributeHeader = (props) => {
  return (
    <h1
      className={tw(
        'text-4xl',
        'tracking-tight',
        'font-extrabold',
        'sm:text-5xl',
        'md:text-6xl',
        props.className
      )}
    >
      {props.children}
    </h1>
  );
};

export default AttributeHeader;

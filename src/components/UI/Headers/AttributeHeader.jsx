import tw from '../../../helpers/tailwind';

const AttributeHeader = (props) => {
  return (
    <h2
      className={tw(
        'font-scoreboard uppercase',
        'text-4xl',
        'tracking-[0.025em]',
        'font-bold',
        'sm:text-5xl',
        'md:text-6xl',
        'text-center',
        'lg:text-left',
        props.className
      )}
    >
      {props.children}
    </h2>
  );
};

export default AttributeHeader;

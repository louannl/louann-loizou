import tw from '../../../helpers/tailwind';
import { CodeLink, WebsiteLink } from '../Links/Link';

export const Tags = (props) => {
  const tags = props.tags;
  const tagItems = tags.map((tag) => (
    <span
      className={tw(
        'inline-block',
        'bg-gray-200',
        'rounded-full',
        'px-3 py-1',
        'text-sm',
        'font-semibold',
        'text-gray-700',
        'mr-2 mb-2'
      )}
    >
      {tag}
    </span>
  ));
  return tagItems;
};

export const Card = (props) => {
  return (
    <div
      className={tw(
        'bg-white',
        'w-full sm:w-1/2 md:w-2/5 lg:w-2/7 xl:w-2/7',
        'm-4',
        'rounded',
        'overflow-hidden',
        'shadow-lg',
        'transform duration-500',
        'hover:scale-110',
        'hover:shadow-none'
      )}
    >
      <img
        className="h-64 w-full object-cover"
        src={props.image}
        alt="Project"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.name}</div>
        <p className="h-32 text-gray-700 text-base">{props.text}</p>
        <div className="text-sm flex items-center justify-around">
          <CodeLink link={props.github} />
          {props.link ? <WebsiteLink link={props.link} /> : <WebsiteLink />}
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Tags tags={props.tags} />
      </div>
    </div>
  );
};

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
      key={tag}
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
        'bg-themeLightGrey',
        'dark:bg-themeGrey',
        'text-black',
        'dark:text-white',
        'w-full sm:w-1/2 md:w-2/5 lg:w-2/7 xl:w-2/7',
        'm-4',
        'rounded',
        'flex flex-col',
        'overflow-hidden',
        'shadow-lg',
        'transform duration-500',
      )}
    >
      <img
        className="h-64 w-full object-cover"
        src={props.image}
        alt="Project"
      />
      <div
        className={tw(
          'flex flex-col',
          'flex-grow',
          'content-between',
          'px-6 py-4'
        )}
      >
        <div className="font-bold text-xl mb-2">{props.name}</div>
        <p className={tw('h-auto', 'text-gray-700', 'dark:text-white', 'text-base', 'flex-grow')}>
          {props.text}
        </p>
        <div className="flex-grow">
          <div
            className={tw(
              'text-sm',
              'flex',
              'items-center',
              'justify-around',
              'w-full',
              'py-4'
            )}
          >
            <CodeLink link={props.github} />
            {props.link ? (
              <WebsiteLink link={props.link} title={props.name} />
            ) : (
              <WebsiteLink />
            )}
          </div>
          <div className="w-full">
            <Tags tags={props.tags} />
          </div>
        </div>
      </div>
    </div>
  );
};

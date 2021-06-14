import tw from '../../../helpers/tailwind';
import { CodeLink, WebsiteLink } from '../Links/Link';

export const Card = (props) => {
  return (
    <div
      className={tw(
        'flex flex-col',
        'bg-white',
        'rounded-lg',
        'shadow-2xl',
        'transform transition duration-500 hover:scale-110 hover:shadow-none',
        'w-full md:w-1/2 lg:w-1/3',
        'm-8',
        'overflow-hidden'
      )}
    >
      <img
        src={props.image}
        alt="Project"
        className="object-cover w-full bg-cover bg-top min-h-item"
      />
      <div className="flex flex-1 flex-col justify-between p-4">
        <div className="flex flex-1 flex-col justify-between p-4">
          {props.name}
        </div>
        <p className="text-sm flex">{props.text}</p>
        <div className="text-sm flex items-center justify-around">
          <CodeLink link={props.github} />
          {props.link ? (
            <WebsiteLink link={props.websiteURL} />
          ) : (
            <WebsiteLink />
          )}
        </div>
      </div>
    </div>
  );
};

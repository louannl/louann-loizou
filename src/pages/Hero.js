import { Link } from 'react-router-dom';
import SocialLinks from '../components/UI/SocialLinks';

const Hero = () => {
  return (
    <div className="sm:text-center lg:text-left">
      <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
        <span className="block text-pink">Louann Loizou</span>
        <span className="block">Junior Developer</span>
      </h1>
      <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
        Please check out my portfolio!
      </p>
      <SocialLinks />
      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <div className="rounded-md shadow">
          <Link
            to="/projects"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue hover:bg-pink md:py-4 md:text-lg md:px-10"
          >
            Projects
          </Link>
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-3">
          <Link
            to="/contact-me"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-pink-700 bg-white hover:bg-pink md:py-4 md:text-lg md:px-10"
          >
            Contact me!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

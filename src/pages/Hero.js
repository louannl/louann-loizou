import AttributeHeader from '../components/UI/Headers/AttributeHeader';
import { BlueLink, MainLink, YellowLink } from '../components/UI/Links/Link';
import SocialLinks from '../components/UI/Links/SocialLinks';

const Hero = () => {
  return (
    <section className="sm:text-center lg:text-left">
      <AttributeHeader className="text-pink">Louann Loizou</AttributeHeader>
      <AttributeHeader>Software Developer</AttributeHeader>
      <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
        Please check out my portfolio!
      </p>
      <SocialLinks />
      <div className="mt-5 mb-5 sm:mt-8 sm:mb-8 sm:flex sm:justify-center lg:justify-start">
        <MainLink>
          <BlueLink link="#projects">Projects</BlueLink>
        </MainLink>
        <MainLink>
          <YellowLink link="#contact-me">Contact me!</YellowLink>
        </MainLink>
      </div>
    </section>
  );
};

export default Hero;

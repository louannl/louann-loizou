import AttributeHeader from '../components/UI/Headers/AttributeHeader';
import { BlueLink, MainLink } from '../components/UI/Links/Link';
import SocialLinks from '../components/UI/Links/SocialLinks';
import { Content, Section } from '../components/UI/Section';
import tw from '../helpers/tailwind';

const Hero = () => {
  return (
    <Section className="bg-themeLightGrey dark:bg-themeDarkGrey" name="home">
      <Content className="pt-24">
        <AttributeHeader className="mt-8 text-themeDarkGrey dark:text-white">Louann Loizou</AttributeHeader>
        <AttributeHeader className="text-mint dark:text-themeLightGrey">Software Developer</AttributeHeader>
        <SocialLinks/>
        <div
          className={tw(
            'pt-4 pb-5',
            'sm:pb-8 sm:pt-4',
            'sm:flex',
            'sm:justify-center',
            'lg:justify-start'
          )}
        >
          <MainLink>
            <BlueLink link="projects">Projects</BlueLink>
          </MainLink>
        </div>
      </Content>
    </Section>
  );
};

export default Hero;

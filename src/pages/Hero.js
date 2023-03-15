import AttributeHeader from '../components/UI/Headers/AttributeHeader';
import { BlueLink, MainLink } from '../components/UI/Links/Link';
import SocialLinks from '../components/UI/Links/SocialLinks';
import { SubHeader } from '../components/UI/Paragraphs/SubHeader';
import { Content, Section } from '../components/UI/Section';
import tw from '../helpers/tailwind';

const Hero = () => {
  return (
    <Section className="bg-white" name="home">
      <Content className="pt-24">
        <AttributeHeader className="text-pink">Louann Loizou</AttributeHeader>
        <AttributeHeader>Software Developer</AttributeHeader>
        <SubHeader classname="text-gray-600">
          I am a self-taught software developer with a serious passion for
          process improvement and automation. I have worked on both frontend and
          backend projects, check out what I've been working on below!
        </SubHeader>
        <SocialLinks />
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

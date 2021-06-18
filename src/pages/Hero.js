import AttributeHeader from '../components/UI/Headers/AttributeHeader';
import { BlueLink, MainLink, YellowLink } from '../components/UI/Links/Link';
import SocialLinks from '../components/UI/Links/SocialLinks';
import { SubHeader } from '../components/UI/Paragraphs/SubHeader';
import { Content, Section } from '../components/UI/Section';

const Hero = () => {
  return (
    <Section className="bg-white" name="home">
      <Content className="pt-24">
        <AttributeHeader className="text-pink">Louann Loizou</AttributeHeader>
        <AttributeHeader>Software Developer</AttributeHeader>
        <SubHeader>
          Hi, I'm Lou! I'm a self-taught software developer with a passion for
          automation and process improvement. I'm originally from East-London
          and I am now based in beautiful Cardiff!
        </SubHeader>
        <SocialLinks />
        <div className="pt-4 pb-5 sm:pb-8 sm:pt-4 sm:flex sm:justify-center lg:justify-start">
          <MainLink>
            <BlueLink link="projects">Projects</BlueLink>
          </MainLink>
          <MainLink>
            <YellowLink link="contact-me">Contact me!</YellowLink>
          </MainLink>
        </div>
      </Content>
    </Section>
  );
};

export default Hero;

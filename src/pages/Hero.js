import AttributeHeader from '../components/UI/Headers/AttributeHeader';
import { BlueLink, MainLink, YellowLink } from '../components/UI/Links/Link';
import SocialLinks from '../components/UI/Links/SocialLinks';
import { SubHeader } from '../components/UI/Paragraphs/SubHeader';
import { Content, Section } from '../components/UI/Section';

const Hero = () => {
  return (
    <Section className="bg-white">
      <Content className="lg:text-left sm:text-center pt-16">
        <AttributeHeader className="text-pink">Louann Loizou</AttributeHeader>
        <AttributeHeader>Software Developer</AttributeHeader>
        <SubHeader>
          Accountant turned software developer, with a passion for automation
          and process improvement...
        </SubHeader>
        <SocialLinks />
        <div className="pt-5 pb-5 sm:pt-8 sm:pb-8 sm:flex sm:justify-center lg:justify-start">
          <MainLink>
            <BlueLink link="#projects">Projects</BlueLink>
          </MainLink>
          <MainLink>
            <YellowLink link="#contact-me">Contact me!</YellowLink>
          </MainLink>
        </div>
      </Content>
    </Section>
  );
};

export default Hero;

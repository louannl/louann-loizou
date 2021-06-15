import AttributeHeader from '../components/UI/Headers/AttributeHeader';
import { MainLink, YellowLink } from '../components/UI/Links/Link';
import { Content, Section } from '../components/UI/Section';

const Cv = () => {
  return (
    <Section className="bg-white" name="cv">
      <Content>
        <AttributeHeader>CV</AttributeHeader>
        <MainLink>
          <YellowLink website="https://drive.google.com/file/d/1M-EnD51FNK7EzW4Yxjm6byWN8bYO2b1H/view?usp=sharing">
            Google Drive Link
          </YellowLink>
        </MainLink>
      </Content>
    </Section>
  );
};

export default Cv;

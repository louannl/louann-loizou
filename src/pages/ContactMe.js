import AttributeHeader from '../components/UI/Headers/AttributeHeader';
import { Content, Section } from '../components/UI/Section';

const ContactMe = () => {
  return (
    <Section className="bg-pink" name="contact-me">
      <Content>
        <AttributeHeader className="text-white">Get in touch!</AttributeHeader>
      </Content>
    </Section>
  );
};

export default ContactMe;

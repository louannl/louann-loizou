import ContactForm from '../components/UI/Form/ContactForm';
import AttributeHeader from '../components/UI/Headers/AttributeHeader';
import { Content, Section } from '../components/UI/Section';

const ContactMe = () => {
  return (
    <Section className="bg-pink" name="contact-me">
      <Content>
        <AttributeHeader className="text-white">Contact me!</AttributeHeader>
        <ContactForm />
      </Content>
    </Section>
  );
};

export default ContactMe;

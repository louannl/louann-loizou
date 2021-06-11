import { Content, Section } from '../components/UI/Section';
import tw from '../helpers/tailwind';

const Projects = () => {
  return (
    <Section className={tw('bg-pink', 'h-100')}>
      <Content>
        <div>Some text</div>
      </Content>
    </Section>
  );
};

export default Projects;

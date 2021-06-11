import AttributeHeader from '../components/UI/Headers/AttributeHeader';
import { SkillIcons } from '../components/UI/icons/Icons';
import { Content, Section } from '../components/UI/Section';

const Skills = () => {
  return (
    <Section className="bg-white">
      <Content className="pt-16">
        <AttributeHeader>Skills</AttributeHeader>
        <SkillIcons />
      </Content>
    </Section>
  );
};

export default Skills;

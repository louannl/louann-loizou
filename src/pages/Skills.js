import AttributeHeader from '../components/UI/Headers/AttributeHeader';
import { SkillIcons } from '../components/UI/icons/Icons';
import { SubHeader } from '../components/UI/Paragraphs/SubHeader';
import { Content, Section } from '../components/UI/Section';

const Skills = () => {
  return (
    <Section className="bg-themeLightGrey dark:bg-themeDarkGrey" name="skills">
      <Content className="pt-16">
        <AttributeHeader className="text-themeDarkGrey dark:text-white">Skills</AttributeHeader>
        <SubHeader className="text-gray-600 dark:text-white">
          I have learnt a lot of my coding skills using Udemy, books and general
          research online. Some skills not explicitly covered in my projects
          above, but have been covered in courses include MongoDB using an ODM
          library (Mongoose), SASS, basics of Golang.
        </SubHeader>
        <SkillIcons />
      </Content>
    </Section>
  );
};

export default Skills;

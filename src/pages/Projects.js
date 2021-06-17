import { Content, Section } from '../components/UI/Section';
import { Card } from '../components/UI/Cards/Card';
import AttributeHeader from '../components/UI/Headers/AttributeHeader';
import { SubHeader } from '../components/UI/Paragraphs/SubHeader';
import tw from '../helpers/tailwind';

import mealPlanner from '../assets/images/mealplanner.png';
import dawghaus from '../assets/images/dawghaus.png';
import portfolio from '../assets/images/louann-loizou.png';

const Projects = () => {
  return (
    <Section className={tw('bg-pink', 'h-100')} name="projects">
      <Content>
        <AttributeHeader className="text-white">Projects</AttributeHeader>
        <SubHeader className="text-white">
          I learnt a lot from the projects I created. I am still working on
          adding more functionality and also refactoring my code too!
          <br />
          For a more detailed list of the problems I faced or the logic behind
          some of my coding choices, please check out the projects ReadMe on
          Github. Links to the repos are included in all listed projects.
        </SubHeader>
        <div className="container mx-auto flex flex-wrap justify-around">
          <Card
            name="Meal Planner"
            text="Designed to help organise the weekly shop, it not only renders the meals you input, but also a shopping list."
            image={mealPlanner}
            github="https://github.com/louannl/meal-planner"
            tags={['React', 'API', 'AntDesign']}
          />
          <Card
            name="Meal Planner API"
            text="An API created to be used with the Meal Planner site, it currently doesn't use an ORM, check out the readme on GitHub for more info on why."
            image={mealPlanner}
            github="https://github.com/louannl/meal-planner"
            tags={['NodeJs', 'PostgreSQL', 'Postman']}
          />
          <Card
            name="DogHouseKustoms"
            text="A website I created for my brother's *cough* imaginery *cough* business, I originally coded this in vanilla JS and html to help solidify what I had learnt."
            image={dawghaus}
            github="https://github.com/louannl/dog-house-kustoms"
            tags={['HTML', 'Vanilla JS', 'CSS']}
          />
          <Card
            name="Portfolio"
            text="This website :)"
            image={portfolio}
            link="louannloizou.co.uk"
            github="https://github.com/louannl/louann-loizou"
            tags={['React', 'Tailwind']}
          />
        </div>
      </Content>
    </Section>
  );
};

export default Projects;

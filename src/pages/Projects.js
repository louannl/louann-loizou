import { Content, Section } from '../components/UI/Section';
import { Card } from '../components/UI/Cards/Card';
import AttributeHeader from '../components/UI/Headers/AttributeHeader';
import { SubHeader } from '../components/UI/Paragraphs/SubHeader';
import tw from '../helpers/tailwind';

import mealPlanner from '../assets/images/mealplanner.png';
import dawghaus from '../assets/images/dawghaus.png';
import portfolio from '../assets/images/louann-loizou.png';
import unitakeaway from '../assets/images/uni-takeaway.png';

const Projects = () => {
  return (
    <Section className={tw('bg-mint', 'h-100')} name="projects">
      <Content>
        <AttributeHeader className="text-white">Projects</AttributeHeader>
        <SubHeader className="text-white">
          For a more detailed summary and breakdown on my learning and issues I
          overcame, please check out the project's respective GitHub repository
          - linked below.
        </SubHeader>
        <div className="container mx-auto flex flex-wrap justify-around">
          <Card
            name="Meal Planner"
            text={`Designed to help organise the weekly shop, it not only 
            renders the meals you input, but also a handy shopping list - using 
            the Meal Planner API.`}
            image={mealPlanner}
            github="https://github.com/louannl/meal-planner"
            tags={['React', 'API', 'AntDesign']}
          />
          <Card
            name="Meal Planner API"
            text={`An API created to be used with the Meal Planner site, the original 
            version didn't use an ORM, this has now been refactored to use one check - 
            out the readme on GitHub for more info on why.`}
            image={mealPlanner}
            github="https://github.com/louannl/meal-planner-api"
            tags={['API', 'NodeJs', 'PostgreSQL', 'Postman', 'Sequelize']}
          />
          <Card
            name="Uni Takeaway Redesign"
            text={`A redesign of Uni Takeaway's site (keeping inline with the 
              original), with better functionality and responsiveness.`}
            image={unitakeaway}
            link="http://www.unitakeaway.com"
            github="https://github.com/louannl/unitakeaway"
            tags={['React', 'Tailwind']}
          />
          <Card
            name="Portfolio"
            text={`I hosted this site by myself, using AWS Amplify. The Meal 
            Planner Demo was hosted on a subdomain utilising Route 53, 
            CloudFront, S3, Aurora RDS (postgres) and EC2 - although I didn't 
            set this part up myself.`}
            image={portfolio}
            link="louannloizou.co.uk"
            github="https://github.com/louannl/louann-loizou"
            tags={['React', 'Tailwind', 'AWS Amplify']}
          />
          <Card
            name="DogHouseKustoms"
            text={`A website I created for my brother's business idea, 
            I originally coded this in vanilla JS and HTML to help solidify 
            what I had been learning.`}
            image={dawghaus}
            github="https://github.com/louannl/dog-house-kustoms"
            tags={['HTML', 'Vanilla JS', 'CSS']}
          />
        </div>
      </Content>
    </Section>
  );
};

export default Projects;

import { Content, Section } from '../components/UI/Section';
import { Card } from '../components/UI/Cards/Card';
import tw from '../helpers/tailwind';
import mealPlanner from '../assets/images/mealplanner.png';
import AttributeHeader from '../components/UI/Headers/AttributeHeader';

const Projects = () => {
  return (
    <Section className={tw('bg-pink', 'h-100')} name="projects">
      <Content>
        <AttributeHeader className="text-white">Projects</AttributeHeader>
        <div className="flex flex-wrap justify-around">
          <Card
            name="Meal Planner"
            text="A meal planner created using the meal-planner api"
            image={mealPlanner}
            github="https://github.com/louannl/meal-planner"
          />
          <Card
            name="Meal Planner API"
            text="An api using postgresql to store and manage data on weekly meals"
            image={mealPlanner}
            github="https://github.com/louannl/meal-planner"
          />
          <Card
            name="DogHouseKustoms"
            text="A website created with vanilla css and javascript"
            image=""
            github="https://github.com/louannl/meal-planner"
          />
        </div>
      </Content>
    </Section>
  );
};

export default Projects;

export const caseStudies = {
  'game-data-warehouse-ingestion': {
    sections: [
      { title: 'The challenge', paragraphs: ['A new billing system needed to feed the same warehouse as two existing sources: online sales and game analytics. The events arrived asynchronously, and the incoming data could be unreliable.'] },
      { title: 'What I worked on', paragraphs: ['I worked on ingesting data from the new billing system and adapting the existing sales and game analytics feeds so they could be used together in Snowflake. The setup used Kubernetes and Airflow, and the ingestion workflows had to account for asynchronous events and inconsistent source data.'] },
      { title: 'Outcome', paragraphs: ['Billing, online sales and game analytics data could be analysed together in Snowflake.'] },
    ],
  },
  'game-platform-observability': {
    sections: [
      { title: 'The challenge', paragraphs: ['The team needed a way to monitor the systems behind a game and make their metrics available to the people running the platform.'] },
      { title: 'What I built', paragraphs: ['I set up Prometheus and Grafana with OpenTelemetry. OpenTelemetry handled the telemetry side of the setup, Prometheus provided metrics storage and querying, and Grafana made those metrics available to view.'] },
      { title: 'Outcome', paragraphs: ['The game systems gained a monitoring setup built around these tools. The team could use Grafana to view metrics collected by the platform.'] },
    ],
  },
  'game-backend-delivery': {
    sections: [
      { title: 'The challenge', paragraphs: ['The client had a complex game backend and specific expectations for what its delivery pipeline should test. The additions had to fit the existing platform and delivery process.'] },
      { title: 'What I built', paragraphs: ['I extended the CI/CD pipeline and set up a test suite around the client’s requirements. The platform used AWS CDK, CodePipeline, and CodeDeploy, with Redis Cluster among the technologies involved.'] },
      { title: 'Outcome', paragraphs: ['The backend’s delivery pipeline gained test coverage tailored to the client’s platform.'] },
    ],
  },
  'game-backend-load-testing': {
    sections: [
      { title: 'The challenge', paragraphs: ['The backend already existed and needed load testing across the service. The goal was to exercise it broadly enough to uncover problems that might only show up under load.'] },
      { title: 'What I built', paragraphs: ['I used Locust and Python to put together a load-testing suite covering the existing backend service. The work then moved from building the suite to investigating the issues it exposed.'] },
      { title: 'Outcome', paragraphs: ['The suite uncovered issues in the backend. I triaged and fixed the issues I found during the work.'] },
    ],
  },
  'fraud-analytics': {
    sections: [
      { title: 'The challenge', paragraphs: ['The data needed for fraud analysis came from several microservices. Bringing it together was part of making it easier to identify and block bad actors.'] },
      { title: 'What we built', paragraphs: ['I worked in a small team introducing a dedicated fraud analytics service. It collected data from multiple services, centralised it, and processed it in one place.'] },
      { title: 'Outcome', paragraphs: ['The platform gained a dedicated service for processing fraud analytics data from across the system.'] },
    ],
  },
  'dependency-maintenance': {
    sections: [
      { title: 'The challenge', paragraphs: ['At the beginning of the year, the team had more than 400 dependency vulnerabilities to work through.'] },
      { title: 'What I started', paragraphs: ['As a junior engineer, I started a weekly meeting focused on reducing the dependency backlog. The recurring meeting gave the team dedicated time to work through it.'] },
      { title: 'Outcome', paragraphs: ['The team ended the year with just under 70 vulnerabilities, down from more than 400 at the start.'] },
    ],
  },
  'uni-takeaway': {
    image: 'uni-takeaway',
    imageAlt: 'Screenshot of the redesigned Uni Takeaway website',
    sections: [
      { title: 'The challenge', paragraphs: ['I wanted to redesign the Uni Takeaway website while keeping it recognisable to people familiar with the original.'] },
      { title: 'What I built', paragraphs: ['I built the redesign in React and Tailwind CSS. I used the original design as a reference while improving how the layout adapted to different screen sizes.'] },
      { title: 'Outcome', paragraphs: ['The redesign retained the feel of the original site and improved its responsiveness and functionality.'] },
    ],
  },
  'meal-planner': {
    image: 'meal-planner',
    imageAlt: 'Screenshot of the Meal Planner application',
    sections: [
      { title: 'The challenge', paragraphs: ['I wanted one place to plan meals for the week and work out what to buy.'] },
      { title: 'What I built', paragraphs: ['I built a React app backed by a Node.js API and PostgreSQL. The app displays the meals entered and uses the plan to produce a shopping list.'] },
      { title: 'What changed', paragraphs: ['The first API version worked directly with the database. I later refactored its data access to use Sequelize as an ORM.'] },
    ],
  },
};

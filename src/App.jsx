import { Link, Route, Routes } from 'react-router';
import Layout from './components/layout/Layout';
import Hero from './pages/Hero';
import Portfolio from './pages/Portfolio';
import { Content } from './components/UI/Section';

function ProjectNotFound() {
  return (
    <Content className="portfolio-hero-content px-5 text-white sm:px-8">
      <h1 className="font-scoreboard text-5xl font-bold">Page not found</h1>
      <Link className="portfolio-case-link mt-5 inline-block" to="/#projects">Back to projects</Link>
    </Content>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<><Hero /><Portfolio /></>} />
        <Route path="*" element={<ProjectNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

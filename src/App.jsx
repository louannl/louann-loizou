import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Hero from './pages/Hero';
import Portfolio from './pages/Portfolio';
import { ProjectNotFound } from './pages/ProjectCaseStudy';

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

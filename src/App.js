import { Switch, Route } from 'react-router';
import Layout from './components/layout/Layout';
import Hero from './pages/Hero';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Hero />
        </Route>
        <Route path="/projects"></Route>
        <Route path="/about-me"></Route>
      </Switch>
    </Layout>
  );
}

export default App;

import { Switch, Route } from 'react-router';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact></Route>
        <Route path="/projects"></Route>
        <Route path="/about-me"></Route>
      </Switch>
    </Layout>
  );
}

export default App;

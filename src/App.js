import { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from './components/layout/Layout';

function App() {
  return (
    <Fragment>
      <Layout />
      <ToastContainer />
    </Fragment>
  );
}

export default App;

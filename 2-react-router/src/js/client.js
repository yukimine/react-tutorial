import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Archives from './pages/Archives';
import Featured from './pages/Featured';
import Settings from './pages/Settings';

const app = document.getElementById('app');
ReactDOM.render(
  <Router>
    <Layout>
      <Route exact path="/" component={Featured}></Route>
      <Route exact path="/archives" component={Archives}></Route>
      <Route exact path="/settings" component={Settings}></Route>
    </Layout>
  </Router>,
  app
);

import React from 'react';
import { render } from 'react-dom';
import ApiClient from './ApiClient';
import Layout from './containers/Layout.jsx';

const client = new ApiClient('https://api.fixer.io');

const App = () => (
  <div className="container-fluid">
    <Layout client={client} />
  </div>
);

render(<App />, document.getElementById('app'));

import React from 'react';
import { render } from 'react-dom';
import ApiClient from './ApiClient';
import Converter from './containers/Converter.jsx';
import conf from './config/default'

const client = new ApiClient(conf);

const App = () => (
  <div className="container">
    <Converter client={client} />
  </div>
);

render(<App />, document.getElementById('app'));

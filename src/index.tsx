import React from 'react';
import { hydrate, render } from 'react-dom';
import './index.scss';
import App from './App';

const root = document.querySelector('main');

root?.hasChildNodes() ? hydrate(<App />, root) : render(<App />, root);
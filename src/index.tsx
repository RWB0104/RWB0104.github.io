import React from 'react';
import { hydrate, render } from 'react-dom';
import './index.scss';
import App from './App';
import { RecoilRoot } from 'recoil';

const root = document.querySelector('main');

root?.hasChildNodes() ? hydrate(<RecoilRoot><App /></RecoilRoot>, root) : render(<RecoilRoot><App /></RecoilRoot>, root);
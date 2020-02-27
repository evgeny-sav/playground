import React, { FC } from 'react';
import logo from '../../assets/logo.svg';
import './App.module.scss';
import { AppProps } from './types';

const App: FC<AppProps> = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
};

export default App;

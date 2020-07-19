import React from 'react';
import './App.css';
import Routes from './routes/Routes';
// import { isAuthenticated } from './utils/auth';
// import SignIn from './signin/SignIn';

function App() {
  return (
    <div>
      {/* {isAuthenticated() ? <Routes /> : <SignIn />} */}
      <Routes />
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import { Helmet } from "react-helmet";
import Routes from "./routes/Routes";
// import { isAuthenticated } from './utils/auth';
// import SignIn from './signin/SignIn';

function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Margherita Dashboard</title>
      </Helmet>
      <Routes />
    </div>
  );
}

export default App;

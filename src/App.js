import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import PageRouter from "./PageRouter";
import Footer from "./component/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <PageRouter />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

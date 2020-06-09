import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Header from "./component/Header";
import PageRouter from "./PageRouter";
import Footer from "./component/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <PageRouter />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

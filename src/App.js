import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import ReactGA from 'react-ga';
import PageRouter from "./PageRouter";
import Footer from "./component/Footer";
import ScrollToTop from "./effect/ScrollToTop";
import GoogleAnalytics from "./effect/GoogleAnalytics";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

ReactGA.initialize('UA-169326922-1');

function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop />
        <GoogleAnalytics />
        <PageRouter />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

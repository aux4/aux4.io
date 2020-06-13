import React from "react";
import {useLocation} from "react-router-dom";
import ReactGA from 'react-ga';

export default function GoogleAnalytics() {
  const location = useLocation();

  React.useEffect(() => {
    if (document.location.hostname.search("aux4.io") !== -1) {
      ReactGA.pageview(location.pathname);
    }
  }, [location]);

  return null;
}

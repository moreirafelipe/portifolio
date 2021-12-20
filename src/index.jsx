import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/* https://github.com/scottjehl/Hide-Address-Bar */

/*! Normalized address bar hiding for iOS & Android (c) @scottjehl MIT License */
(function () {
  var doc = window.document;

  // If there's a hash, or addEventListener is undefined, stop here
  if (!window.location.hash && window.addEventListener) {

    //scroll to 1
    window.scrollTo(0, 1);
    var scrollTop = 1,
      getScrollTop = function () {
        return (window.pageYOffset || doc.compatMode) === "CSS1Compat" && (doc.documentElement.scrollTop || doc.body.scrollTop || 0);
      },

      //reset to 0 on bodyready, if needed
      bodycheck = setInterval(function () {
        if (doc.body) {
          clearInterval(bodycheck);
          scrollTop = getScrollTop();
          window.scrollTo(0, scrollTop === 1 ? 0 : 1);
        }
      }, 15);

    window.addEventListener("load", function () {
      setTimeout(function () {
        //at load, if user hasn't scrolled more than 20 or so...
        if (getScrollTop() < 20) {
          //reset to hide addr bar at onload
          window.scrollTo(0, scrollTop === 1 ? 0 : 1);
        }
      }, 0);
    }, false);
  }
})(this);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

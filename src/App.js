import React from 'react';
import iilogo from './ii_main.svg';
import excytelogo from './main_logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={iilogo} className="mx-auto mb-4" alt="Insightful Innovations logo" />
        <p className="desc">
          We build highly available online tools to help teams and organizations manage marketing and sales. We do this through automation and machine learning to maximize efficiency and ROI.
        </p>
      </header>
      <h2 className="sub-header">Products</h2>
      <div className="products">
        <img src={excytelogo} className="mx-auto" alt="Excyte logo" />
      </div>
      <h2 className="sub-header">Contact</h2>
      <div className="products">
        <a className="link" href="mailto:derek@insightful-innovations.com">contact@insightful-innovations.com</a>
      </div>
      <p className="copy mt-8">&#169; Insightful Innovations</p>
    </div>
  );
}

export default App;

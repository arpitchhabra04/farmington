import React from 'react';
import Header from './components/headerComponent/headerComponent';
import Testimonials from './components/testimonialComponent/testimonials';
import AboutUs from './components/aboutComponent/aboutUs';

function App() {
  return (
    <div className="App">
      {/* <Header></Header> */}

      <AboutUs></AboutUs>
      <Testimonials></Testimonials>
    </div>
  );
}

export default App;

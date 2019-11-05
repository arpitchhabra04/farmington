import React from 'react';
import Header from './components/headerComponent/headerComponent';
import Testimonials from './components/testimonialComponent/testimonials';
import AboutUs from './components/aboutComponent/aboutUs';
import Contact from './components/contactComponent/contactUs';

function App() {
  return (
    <div className="App">
      {/* <Header></Header>00 */}

      <AboutUs></AboutUs>
      <Testimonials></Testimonials>
      <Contact></Contact>
    </div>
  );
}

export default App;

import React from 'react';
import Header from './components/headerComponent/headerComponent';
import Testimonials from './components/testimonialComponent/testimonials';
import AboutUs from './components/aboutComponent/aboutUs';
import Contact from './components/contactComponent/contactUs';
import Relaible from './components/reliableComponent/reliable';
import Services from './components/servicesComponent/services';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Services></Services>
      <AboutUs></AboutUs>
      <Testimonials></Testimonials>
      <Relaible></Relaible>
      <Contact></Contact>
    </div>
  );
}

export default App;

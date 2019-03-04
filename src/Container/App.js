import React, { Component } from 'react';
import MainPage from '../Components/MainPage/MainPage';
import MyProjects from '../Components/MyProjects/MyProjects';
import ContactForm from '../Components/contactForm/ContactForm';
import Footer from '../Components/Footer/Footer';




class App extends Component {
  render() {
    return (
          <div>
             <MainPage/>
             <MyProjects/>
             <ContactForm />
             <Footer />
          </div>
           
       
      
    );
  }
}

export default App;

import React, { Component } from 'react';
import MainPage from '../Components/MainPage/MainPage';
import MyProjects from '../Components/MyProjects/MyProjects';
import ContactForm from '../Components/contactForm/ContactForm';




class App extends Component {
  render() {
    return (
          <div>
             <MainPage/>
             <MyProjects/>
             <ContactForm />
          </div>
           
       
      
    );
  }
}

export default App;

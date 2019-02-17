import React, { Component } from 'react';
import MainPage from '../Components/MainPage/MainPage';
import MyProjects from '../Components/MyProjects/MyProjects';



class App extends Component {
  render() {
    return (
          <div>
             <MainPage/>
             <MyProjects/>
          </div>
           
       
      
    );
  }
}

export default App;

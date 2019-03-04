import React, { Component } from 'react';
import axios from 'axios';
import ContactDetials from './contactDetials';






class ContactForm extends Component {

    state = {
        name: '',
        email: '',
        message: '',
        emailIsValad: false,
        error: null,
        emailSent: false
        
    }

    componentWillMount(){
        const resetContactFormHandler = ()=> {
            this.setState({
                email: '',
                message: '',
                name: '',
                emailIsValad: false,})
    
        }
    }
 
    componentDidUpdate(){

       const emailIsValadHandler = (email)=>{
   
            if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && !this.state.emailIsValad){
                this.setState({emailIsValad: true})
            }
            if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && this.state.emailIsValad){
             this.setState({emailIsValad: false})
         }
           
        }
       
        


        emailIsValadHandler(this.state.email)
        
    }

    
    
   
  

    
    nameChangeHandler = (event) => {

        this.setState({
                name: event.target.value
            })
        }

   
    messageChangeHandler = (event) => {

        event.preventDefault();

        this.setState({message: event.target.value})
    }

    submitHandler = (event) => {

        event.preventDefault();

        let name = this.state.name;
        let email = this.state.email;
        let message = this.state.message;



        axios.post("https://getform.io/f/f25c2bf3-3457-4234-b585-ce25454e50b6", 
            {   
                name: name,
                email: email,
                message: message
              
            })
            .then(function (response) {
              console.log(response);
              // add a thank you page 
             
            })
            .catch(function(error) {
              console.log(error);
              // add some sort of error message
              
            
        })

        this.setState({
            email: '',
            message: '',
            name: '',
            emailIsValad: false,})


        


    }

        
    
    emailChangeHandler = (event) => {
        
        this.setState({email: event.target.value})

       
    }
    
    
    render(){
        
        
        return(
            <div className = 'section-contact'>
                <div className= "row">
                    <div className ="contact__block">
                        <div className = "contact__block-form">
                            <ContactDetials 
                            nameChange = {this.nameChangeHandler}
                            name= {this.state.name}
                            emailChange ={this.emailChangeHandler}
                            messageChange = {this.messageChangeHandler}
                            submit = {this.submitHandler}
                            email ={this.state.email}
                            message = {this.state.message}
                            validEmail = {this.emailIsValadHandler}
                            valid = {this.state.emailIsValad}
                            
                            
                            />
                            
                        </div>                    
                    </div>                
                </div>
            </div>
        )
    }
}


export default ContactForm;
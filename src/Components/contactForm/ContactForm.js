import React, { Component } from 'react';
import ContactDetials from './contactDetials';


class ContactForm extends Component {

    state = {
        name: '',
        email: '',
        message: '',
    }

    
      nameChangeHandler = (event) => {
            
        
        this.setState({
                name: event.target.value
            })
        }


    


    render(){

        
        return(
            <div className = 'section-contact'>
                <div className= "row">
                    <div className ="contact__block">
                        <div className = "contact__block-form">
                            <ContactDetials 
                            change = {this.nameChangeHandler}
                            name= {this.state.name}
                            />
                            
                        </div>                    
                    </div>                
                </div>
            </div>
        )
    }
}


export default ContactForm;
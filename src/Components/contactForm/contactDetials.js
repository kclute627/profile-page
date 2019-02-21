import React from 'react';






const contactDetials = (props) => {



    return (
        <form className="form">
            <div className="u-margin-bottom-medium">
                <h3 className="heading-secondary">
                    Let's Work Together
                </h3>
            </div>
            <div className="form__group">
                <input 
                className="form__input"
                onChange = {props.change}
                type ="text"
                value = {props.name}
                placeholder="Name" 
                id="name"
                />
                <label
                className = "form__label">Name</label>
                
            </div>
            <div className="form__group">
                <input 
                type="email" 
                className="form__input" 
                placeholder="Email Address" />
                <label
                className = "form__label">Email Address</label>
                
                
            </div>
            <div className="form__group-text">
        
                <textarea 
                className="form__input"  
                placeholder="Message" />
                <label
                className = "form__label">Message</label>
                
                
            </div>
            <input type="submit"  />
        </form>

    )
}


export default contactDetials; 
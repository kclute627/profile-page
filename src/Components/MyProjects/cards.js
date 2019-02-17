import React from 'react';





const cards = (props)=>{

    return(
        <div className = "col-1-of-3">
            <div className="card">
                
                <a href= {props.link} target="_blank">
                
                <div className= {props.class}>
                
                </div>
                </a>
                
                <div className="card__heading">
                {props.heading}
                </div>
                <div className="card__detials">
                    <p>
                    {props.description}
                    </p>
                    
                </div>
                <div className="card__footer">
                    <h4 className="card__footer-text">Languages Used</h4>
                    <ul>
                        <li key ={props.index}><i className={props.react === "true" ? "fab fa-react" : null}></i></li>
                        <li key ={props.index +6}><i className={props.css === "true" ?"fab fa-css3-alt" : null}></i></li>
                        <li key ={props.index +1}><i className={props.js === "true" ? "fab fa-js" : null}></i></li>
                        
                    </ul>
                    
                </div>

            </div>
        </div>
    )
}

export default cards;
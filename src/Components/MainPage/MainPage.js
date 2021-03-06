import React, { Component } from 'react';




class MainPage extends Component {


    render(){



        return(
            <div className="header">
                <div className = 'header__text-box'>
                    <h1 className='heading-primary'>
                    <span className='heading-primary--main first'> 
                        Kyle
                        </span>
                    <span className='middle-int'>W.</span>
                    <span className='heading-primary--main2'>
                         Clutter
                    </span> 
                        <span className='heading-primary--sub'>Full Stack Web Developer</span>

                    </h1>
                    <a href='#projects' className='btn btn-white btn-animated'> See My Projects </a>

                </div>
            </div>
        )
    }
}



export default MainPage;
import React, { Component } from 'react';

import Cards from './cards';






class MyProjects extends Component {

    state = {
        projectStart: 0,
        rightArrow: true,
        leftArrow: false,
        
        


    }


    

    render(){
        const projects = [
            {
                index: 1,
                name: "Burger Builder App",
                description: "Improved my Javascript, React and Redux skills following along to an indepth 30+ hour udemy Course",
                lagUsed: 'Javascript: with React and Redux Firebase',
                img: '../../assets/BurgBuilder.jpg',
                link: "https://react-my-burger-d3658.firebaseapp.com/",
                className: "card__picture-1",
                lang1: "true",
                lang2: "true",
                lang3: "true"
            },
            {
                index: 2,
                name: "GitHub Battle",
                description: "I coded along side a course tought by Tyler Mcggins github Battle was the final project built with React",
                lagUsed: 'Javascript: with React and Redux. Hosted by Firebase',
                img: '../../assets/gitHubBattle.jpg',
                link: "https://github-battle-f6281.firebaseapp.com/",
                className: "card__picture-2",
                lang1: "true",
                lang2: "true",
                lang3: "true",
            },
            {
                index: 3,
                name: "Meme Generator",
                description: "I created an app that builds Memes using React and Redux. I pulled memes from an API and displayed them",
                lagUsed: 'Javascript: with React and Redux. Hosted by Firebase',
                img: '../../assets/MemeGen.jpg',
                link: "https://memegen-2fe54.firebaseapp.com/",
                className: "card__picture-3",
                lang1: "true",
                lang2: "true",
                lang3: "true",
            },
            {
                index: 3,
                name: "Meme Generator",
                description: "I created an app that builds Memes. This uses a meme API to send and receive information. This project helped me sharpen my redux skills",
                lagUsed: 'Javascript: with React and Redux. Hosted by Firebase',
                img: '../../assets/MemeGen.jpg',
                link: "https://memegen-2fe54.firebaseapp.com/",
                className: "card__picture-3",
                lang1: "true",
                lang2: "true",
                lang3: "true",
            },
            
            {
                index: 2,
                name: "GitHub Battle",
                description: "I coded along side a course tought by Tyler Mcggins github Battle was the final project built with React",
                lagUsed: 'Javascript: with React and Redux. Hosted by Firebase',
                img: '../../assets/gitHubBattle.jpg',
                link: "https://github-battle-f6281.firebaseapp.com/",
                className: "card__picture-2",
                lang1: "true",
                lang2: "true",
                lang3: "true",
            },
            {
                index: 1,
                name: "Burger Builder App",
                description: "Improved my Javascript, React and Redux skills following along to an indepth 30+ hour udemy Course",
                lagUsed: 'Javascript: with React and Redux Firebase',
                img: '../../assets/BurgBuilder.jpg',
                link: "https://react-my-burger-d3658.firebaseapp.com/",
                className: "card__picture-1",
                lang1: "true",
                lang2: "true",
                lang3: "true"
            },
            
        ];

        const arrUpdateHandlerAddRight = () => {
            this.setState({
                projectStart: 3,
                rightArrow: false,
                leftArrow: true,
            })
        }
        const arrUpdateHandlerAddLeft = () => {
            this.setState({
                projectStart: 0,
                rightArrow: true,
                leftArrow: false,

            })
        }

    

        const cards = projects.slice(this.state.projectStart, (this.state.projectStart +3)).map(cur=>{
            return <Cards
            link = {cur.link}
            heading = {cur.name}
            description= {cur.description}
            class={cur.className}
            react={cur.lang1}
            css={cur.lang2}
            js={cur.lang3}
            index={cur.index}
            key ={cur.index}


             />
        })

        return(
            <div className="section-projects">
                <div className = "section-projects--main">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className='heading-secondary'>
                        My Projects
                    </h2>
                </div>
                <div className='row'>
                    <div className = "3-cards">
                    {cards}
                    </div>
                    
                </div>
                <div className ='row__icon'>
                    <i 
                    className ={this.state.rightArrow ? "fas fa-arrow-circle-right" : null}
                    onClick = {()=> arrUpdateHandlerAddRight()}></i>
                    <i 
                    className={this.state.leftArrow ? "fas fa-arrow-circle-left" : null}
                    onClick= {()=> arrUpdateHandlerAddLeft()}></i>
                </div>
                
                
                </div>
                
                
            </div>
        )
    }
}






export default MyProjects;
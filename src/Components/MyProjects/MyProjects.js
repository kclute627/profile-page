import React, { Component } from 'react';

import Cards from './cards';






class MyProjects extends Component {


    

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
            }
        ];

        const cards = projects.map(cur=>{
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
                
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className='heading-secondary'>
                        My Projects
                    </h2>
                </div>
                <div className='row'>
                    {cards}
                
                </div>
            </div>
        )
    }
}






export default MyProjects;
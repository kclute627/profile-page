import React, { Component } from 'react';

import Cards from './cards';


//



class MyProjects extends Component {

    state = {
        projectStart: 0,
        pageEnd: 3,
        rightArrow: true,
        leftArrow: false, // changed from False 
        projects: [ 
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
                name: "Budget App",
                description: "I coded a fully functional budget app",
                lagUsed: 'React, SASS. Hosted by Firebase',
                
                link: "https://budget-302a9.web.app/",
                className: "card__picture-8",
                lang1: "true",
                lang2: "true",
                lang3: "true",
            },
            {
                index: 3,
                name: "Recipie Finder",
                description: "I coded along side a Udemy course using React along with the axios package to pull recpies from an api ",
                lagUsed: 'Javascript: with React. Hosted by Firebase',
                img: '../../assets/MemeGen.jpg',
                link: "https://forkify-fe340.firebaseapp.com/#35477",
                className: "card__picture-5",
                lang1: "true",
                lang2: "true",
                lang3: "true",
            },
            {
                
                index: 4,
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
                index: 5,
                name: "Super Squad",
                description: "I created an app that builds a super hero squad while displaying superhero stats built using react / redux",
                lagUsed: 'Javascript: with React and Redux. Hosted by Firebase',
                img: '../../assets/MemeGen.jpg',
                link: "https://super-hero-cffe5.firebaseapp.com/",
                className: "card__picture-4",
                lang1: "true",
                lang2: "true",
                lang3: "true",
            },
            
            {
                index: 6,
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
                index: 7,
                name: "HTML Website",
                description: "I coded along side a Udemy course taught by Jonas Schmedtmann focusing on HTML and CSS",
                lagUsed: 'HTML and CSS. Hosted by Firebase',
                
                link: "https://omni-food-a17cc.firebaseapp.com/",
                className: "card__picture-7",
                lang1: "false",
                lang2: "true",
                lang3: "false",
            },
            {
                index: 8,
            
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
                index: 9,
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
                index: 10,
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
                index: 11,
                name: "Recipie Finder",
                description: "I coded along side a Udemy course using React along with the axios package to pull recpies from an api ",
                lagUsed: 'Javascript: with React. Hosted by Firebase',
                img: '../../assets/MemeGen.jpg',
                link: "https://forkify-fe340.firebaseapp.com/#35477",
                className: "card__picture-5",
                lang1: "true",
                lang2: "true",
                lang3: "true",
            },
            
            
        ],
        dataLen: null, 
    } 
    
    componentDidUpdate(){
        this.arrCheck();
       
    }


    arrCheck = ()=> {
        if(this.state.dataLen === null){
            this.setState({dataLen: this.state.projects.length})
        }
        if(this.projectStart >= 1 && this.state.dataLen > this.state.pageEnd && this.state.rightArrow && !this.state.rightArrow){
            this.setState({
                rightArrow: true,
               
            })
        }
        if(this.projectStart >= 1 && this.state.dataLen > this.state.pageEnd && this.state.rightArrow && !this.state.leftArrow){
            this.setState({
                leftArrow: true,
               
            })
        }
        

        if(this.state.projectStart === 0 && this.state.leftArrow){
            this.setState({
                leftArrow: false,
                rightArrow: true})
        }
        if(this.state.pageEnd === this.state.dataLen && this.state.rightArrow){
            this.setState({
                rightArrow: false,
                leftArrow: true,})
        }
        if(this.state.pageEnd > this.state.dataLen && this.state.pageEnd -2 <= this.state.dataLen && this.state.rightArrow){
            this.setState({
                rightArrow: false,
                leftArrow: true,
            })
        }
        if(this.state.pageEnd-2 > this.state.dataLen && !this.state.leftArrow){
            this.setState({leftArrow: true})
        }
        if(this.state.dataLen > this.state.pageEnd && !this.state.rightArrow){
            this.setState({rightArrow: true})
        }
        if(this.state.projectStart >= 3 && this.state.pageEnd < this.state.dataLen && !this.state.leftArrow){
            this.setState({leftArrow: true})
        }
        
        
        // if(this.projectStart !== 0 && this.state.dataLen > this.state.pageEnd && !this.state.rightArrow){
        //     this.setState({
        //         rightArrow: true,
               
        //     })
        // }
        // if(this.projectStart !== 0 && this.state.dataLen > this.state.pageEnd && !this.state.leftArrow){
        //     this.setState({
        //         leftArrow: true,
               
        //     })
        // }
        

        // if(this.state.pageEnd === this.state.dataLen && this.state.rightArrow ){
        //     this.setState({
        //         leftArrow:true,
        //         rightArrow: false,
                
        //     })
        // }
       

        
        // if(this.state.projectStart <= 0 && this.state.leftArrow){
        //     this.setState({
        //         leftArrow:false,
        //         rightArrow: true,
                
        //     })
        // }
        // if(this.state.projectStart > 0 && !this.state.leftArrow){
        //     this.setState({leftArrow: true})
        // }
        
       
        // if(this.state.pageEnd !== this.state.dataLen && !this.state.rightArrow ){
        //     this.setState({rightArrow: true})
        // }
        

    }
            



    



 arrUpdateHandlerAddRight = () => {

            
           
    this.setState({
        
       
        projectStart: this.state.projectStart + 3,
        pageEnd: this.state.pageEnd + 3,
        
    })


    
// if more projects are added implement if statment for the arrows to work properly 
}
 arrUpdateHandlerAddLeft = () => {

    this.setState({
        
        
        projectStart: this.state.projectStart - 3,
        pageEnd: this.state.pageEnd -3,
        
    })

}
 


    




    render(){
    
        // this.arrCheck()
        

       



        let cards = null;
                                            
        if(this.state.projects){
            cards = this.state.projects.slice(this.state.projectStart, this.state.pageEnd).map(cur=>{
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
            });
    

        }
        
        return(
            <div className="section-projects">
                <div className = "section-projects--main">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className='heading-secondary' id="projects">
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
                    onClick = {this.arrUpdateHandlerAddRight} ></i>
                    <i 
                    className={this.state.leftArrow ? "fas fa-arrow-circle-left" : null}
                    onClick= {this.arrUpdateHandlerAddLeft}></i>
                </div>
                
                
                </div>
                
                
            </div>
        )
    }
}






export default MyProjects;
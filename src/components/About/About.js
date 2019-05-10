import React from 'react';
import Posts from './Posts/Posts';
import './About.css';

function About(){
    return(
        <div className="aboutpage">
            <React.Fragment >
                <Posts/>
                <h1>About</h1>
                <p className="itsptag">This is a paragraph written in the about page hello world this is my application</p>
            </React.Fragment>
        </div>
    )

}
export default About;
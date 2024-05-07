import React from 'react';
import './skills.css';
import UIDesign from '../../assets/UXUI.png'
import WebDesign from '../../assets/icons8-web-design-64.png'
import AppDesign from '../../assets/icons8-app-design-66.png'

const Skills = () => {
  return (
    <section id= 'skills'>
        <span className="skillTitle">What I do</span>
        <span className="skillDescription">I am a skilled and passionate web designer with experience in HTML, CSS, and JavaScript.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UI Design" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>I have two years of experience and a certificate in UX/UI design</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="Web Design" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Web Design</h2>
                    <p>Experienced in building intuitive and aesthetically pleasing websites</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="App Design" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>Experienced in building modern, user-friendly mobile apps</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
import React from "react";
import './works.css'
import Dark from '../../assets/FEP-Dark.png'
import Epark from '../../assets/EPark - Home.png'
import LMG from '../../assets/Lofi Mockup - LMG Homepage First Iteration.jpg'

const Works = () => {
  return (
    <section id='works'>
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDescription">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to use my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
        <div className="worksImgs">
            <img src={Dark} alt="Fort Edmonton Park - DARK" className="worksImg" />
            <img src={Epark} alt="EPark App" className="worksImg" />
            <img src={LMG} alt="LMG" className="worksImg" />
        </div>
        <button className="worksBtn">See More</button>
    </section>
  )
}

export default Works
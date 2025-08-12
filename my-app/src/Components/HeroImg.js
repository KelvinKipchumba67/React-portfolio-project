import "./HeroimageStyles.css"
import IntroImg from "../assets/retouch2.jpg"
import React from 'react'
import { Link } from "react-router-dom"

const Heroimage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg}  alt="IntroImg"/>
      </div>
      <div className="content">
        <p>Hi, I'm Kelvin Kipchumba</p>
        <h1>FrontEnd Developer</h1>
        <div className="buttons">
        <Link to="/projects" className="btn">Projects</Link>
        </div>
        <div className="buttons">
        <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>


    </div>
  )
}

export default Heroimage;

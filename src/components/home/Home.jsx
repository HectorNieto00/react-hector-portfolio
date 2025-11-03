
import React from "react";
import "./Home.css";
import Me from "../../assets/me-gif.gif";
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import Shapes from "./Shapes"

function Home() {
    return (
        <section className="home container" id='home'>
            <div className="intro">
                <img src={Me} alt="" className='home__img' width='150' />
                <h1 className="home__name">Héctor Nieto Ruiz</h1>
                <span className="home__education">Software Engineer <br />MSc Big Data and Data Science Technology Student <br />London - UK</span>

                <div className="home__socials">
                    <a href='https://github.com/HectorNieto00/' className='home__social-link' target='_blank' rel='noreferrer'>
                        <FaGithub />
                    </a>

                    <a href='https://www.linkedin.com/in/hector-nieto-ruiz-753202169/' className='home__social-link' target='_blank' rel='noreferrer'>
                        <FaLinkedinIn />
                    </a>

                    <a href='/' className='home__social-link' target='_blank' rel='noreferrer'>
                        <FaInstagram />
                    </a>
                </div>
                <a href="#contact" className="btn"> Contact Me</a>
            </div>

            <Shapes />
        </section>
    );
}

export default Home
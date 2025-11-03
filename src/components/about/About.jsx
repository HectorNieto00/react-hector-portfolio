
import React from 'react';
import './About.css';
import Image from '../../assets/me.svg';
import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox';

function About() {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Hello! I'm Héctor, a Software Engineer currently pursuing an MSc in Big Data and Data Science Technology at Northumbria University in London, where I’m in my second semester. <br /><br />
                            I’m deeply passionate about data-driven development, machine learning, and scalable web applications. I enjoy writing clean, efficient, and purposeful code that transforms complex data into meaningful insights and powerful solutions. 
                            Right now, I’m focused on expanding my portfolio by developing projects that combine software engineering with modern data technologies, enhancing my technical expertise and showcasing my skills. <br /> <br />
                            I’m always open to new opportunities, challenges, and learning experiences that help me grow as a professional and as a person. Here are a few technologies I’ve been working with recently:
                        </p>
                        <ul className="about__list">
                            <li>Python, JavaScript (ES6+), TypeScript</li>
                            <li>React, Vite, HTML, CSS</li>
                            <li>Node.js, Django, Flask</li>
                            <li>PostgreSQL, MongoDB</li>
                            <li>Power BI, Pandas, NumPy, Matplotlib</li>
                            <li>Git, GitHub, Jira</li>
                            <li>REST APIs, Machine Learning Fundamentals</li>
                        </ul>
                        <button className="btn" onClick={downloadResume}>Donwload CV</button>
                    </div>

                </div>
            </div>
            <AboutBox />
        </section>
    )
}

export default About
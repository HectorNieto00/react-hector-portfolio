
import React from 'react';
import './Services.css';
import Image1 from '../../assets/service-1.svg'
import Image2 from '../../assets/service-2.svg'
import Image3 from '../../assets/service-3.svg'

const data = [
    {
        id: 1,
        image: Image1,
        title: "Web & Full Stack Development",
        description:
            "Building responsive, scalable, and user-focused web applications using React, Vite, Node.js, Django, Flask, and modern frontend and backend technologies.",
    },
    {
        id: 2,
        image: Image2,
        title: "Data & Analytics",
        description:
            "Designing and implementing data pipelines, dashboards, and visualizations using Python, Power BI, Pandas, NumPy, and SQL to extract actionable insights.",
    },
    {
        id: 3,
        image: Image3,
        title: "Machine Learning",
        description:
            "Developing predictive models and intelligent solutions using Python, machine learning libraries, and data science techniques to solve real-world problems.",
    },
];

function Services() {
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">Services</h2>

            <div className="services__container grid">
                {data.map(({ id, image, title, description }) => {
                    return (
                        <div className="services__card" key={id}>
                            <img src={image} alt='' className='services__img' width="80" />

                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Services
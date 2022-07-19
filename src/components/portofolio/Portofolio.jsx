import React from "react";
import './portofolio.css'
import IMG1 from '../../Photos/Portfolio.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'My portfolio',
    github: 'https://github.com/Perparim30'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github}) => {
            return (
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <a href={github} className="btn" target={"_blank"}>GitHub</a>
              </article>
            )
          })
        }
      </div>
    </section>
  )
};

export default Portfolio;
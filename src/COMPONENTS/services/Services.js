import React from "react";
import "./services.scss";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

const serviceData = {
  services: [
    {
      icon: <FaCocktail />,
      title: "Free Cocktails",
      info:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
    },
    {
      icon: <FaHiking />,
      title: "Endless Hiking",
      info:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
    },
    {
      icon: <FaShuttleVan />,
      title: "Free Shuttle",
      info:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
    },
    {
      icon: <FaBeer />,
      title: "Strongest Beer",
      info:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
    },
  ],
};

export default function Services() {
  return (
    <div>
      <section className='services'>
        <div className="section-title">
          <h4>Services</h4>
          <div />
        </div>
        <div className="services-center">
          {serviceData.services.map((i) => (
            <article className="service" key={i.title}>
              <span>{i.icon}</span>
              <h6>{i.title}</h6>
              <p>{i.info}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

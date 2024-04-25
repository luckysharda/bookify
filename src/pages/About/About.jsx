import React from "react";
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">About Bookify</h2>
            <p className="fs-17">
              Bookify is an innovative platform revolutionizing the way people
              engage with literature. It seamlessly integrates the worlds of
              social networking and reading, offering a unique space for book
              lovers to connect, share, and discover new titles.
            </p>
            <p className="fs-17">
              At its core, Bookify allows users to create personalized profiles
              where they can curate their reading lists, share reviews, and
              connect with like-minded readers. Through its intuitive interface,
              users can easily browse through a vast catalog of books, spanning
              various genres and authors, and engage in meaningful discussions
              about their favorite reads.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              At our restaurant, we believe in crafting culinary experiences that go beyond just a meal. With a focus on fresh, locally-sourced ingredients, we create dishes that blend tradition with innovation. From our kitchen to your plate, every dish is prepared with care and passion, ensuring an unforgettable dining experience. We strive to not only satisfy your hunger but to ignite your senses with flavors that tell a story of quality, creativity, and dedication. Join us on this delicious journey where every bite is a celebration of good food and great times.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="About our restaurant" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

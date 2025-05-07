import React from 'react';

const AboutUs = () => {
  return (
    <section className="about">
      <div className="about-text">
        <h1>About Us</h1>
        <p>
          We are a food rescue platform based in Seattle, connecting local eateries with surplus meals to customers looking for delicious discounts, while reducing food waste across our community.
        </p>
      </div>
      <div className="about-image">
        <img src="/imgs/skyline.jpg" alt="Seattle Skyline" />
      </div>
    </section>
  );
};

export default AboutUs;

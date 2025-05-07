import React from 'react';

const AboutUs = () => {
  return (
    <section className="about">
      <div className="about-text">
        <h1>About Us</h1>
        <p>
        [App Name] is a food rescue platform built on the belief that no one should go hungry and no good food should go to waste. Founded with community in mind, we partner with restaurants around Seattle to offer low-cost, surprise meal boxes from their unsold food—fresh, delicious, and ready to be enjoyed.

We understand the challenges faced by individuals and families in low-income communities. That’s why our platform is designed to make nutritious, filling meals more affordable, accessible, and dignified—without the stigma.
        </p>
      </div>
      <div className="about-image">
        <img src="/imgs/skyline.jpg" alt="Seattle Skyline" />
      </div>
    </section>
  );
};

export default AboutUs;

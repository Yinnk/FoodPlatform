import React from 'react';

const MissionSection = () => {
  return (
    <section className="mission py-10 flex flex-col md:flex-row items-center gap-8">
      <div className="mission-text md:w-1/2">
        <h1 className="text-2xl font-bold mb-3">Our Mission</h1>
        <p className='mx-3'>
          At [App Name], our mission is to bridge the gap between surplus food and communities in need. Every day, perfectly good meals go to waste while many individuals and families struggle to afford their next one. We’re here to change that.

          We work with local restaurants to rescue unsold food and offer it at affordable prices, making sure more people—especially those in low-income communities—have access to quality meals. Through surprise boxes and discounted offers, we provide an easy way for you to eat well, support local businesses, and make a real impact on reducing food waste.

          Because everyone deserves a good meal.
        </p>
      </div>
      <div className="mission-image md:w-1/2">
        <img src="/imgs/veggies.jpg" alt="Fresh Salad" className="rounded-lg shadow-lg" />
      </div>
    </section>
  );
};

export default MissionSection;
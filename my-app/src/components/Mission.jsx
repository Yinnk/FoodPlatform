import React from 'react';

const MissionSection = () => {
  return (
    <section className="mission py-10 flex flex-col md:flex-row items-center gap-8">
      <div className="mission-text md:w-1/2">
        <h1 className="text-2xl font-bold mb-3">Our Mission</h1>
        <p>
          At AppName, our mission is to bridge the gap between surplus food and communities,
          promoting a more sustainable future one meal at a time.
        </p>
      </div>
      <div className="mission-image md:w-1/2">
        <img src="/imgs/veggies.jpg" alt="Fresh Salad" className="rounded-lg shadow-lg" />
      </div>
    </section>
  );
};

export default MissionSection;

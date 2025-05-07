import React from 'react';

const PartnersSection = () => {
  return (
    <section className="partners py-10 text-center">
      <h1 className="text-2xl font-semibold mb-6">Our Partners</h1>
      <div className="partner-logos flex flex-wrap justify-center gap-6">
        <img src="/imgs/partner1.jpg" alt="Partner 1" className="h-16 object-contain" />
        <img src="/imgs/partner2.webp" alt="Partner 2" className="h-16 object-contain" />
        <img src="/imgs/partner1.jpg" alt="Partner 3" className="h-16 object-contain" />
        <img src="/imgs/partner2.webp" alt="Partner 4" className="h-16 object-contain" />
      </div>
    </section>
  );
};

export default PartnersSection;

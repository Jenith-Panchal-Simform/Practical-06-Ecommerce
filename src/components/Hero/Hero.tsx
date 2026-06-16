import { useEffect, useState } from 'react';

export const Hero = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const fadeDistance = window.innerHeight * 0.6;

      const progress = Math.min(window.scrollY / fadeDistance, 1);

      setOpacity(1 - progress);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const images = [
    '/images/img1.jpeg',
    '/images/img2.jpg',
    '/images/img3.jpeg',
    '/images/img4.jpeg',
  ];

  return (
    <section className="relative h-[200vh] w-full">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0 grid grid-cols-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Hero ${index}`}
              className="h-full w-full object-cover"
            />
          ))}
        </div>

        {/* Overlay */}
        <div className="from-primary absolute inset-0 bg-linear-to-t via-black/40 to-transparent" />

        {/* Content */}
        <div
          style={{
            opacity,
            transform: `translateY(${(1 - opacity) * -80}px)`,
          }}
          className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center"
        >
          <h1 className="font-heading text-secondary text-6xl tracking-[0.2em] md:text-8xl">
            ANTLER
          </h1>

          <p className="text-secondary mt-6 text-xl font-light md:text-3xl">
            A Summer State of Mind
          </p>

          <button className="bg-secondary text-primary hover:bg-primary hover:text-secondary mt-10 px-10 py-4 tracking-widest transition-all duration-300">
            SHOP COLLECTION
          </button>
        </div>
      </div>
    </section>
  );
};

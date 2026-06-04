import { useEffect, useState } from "react";

export const Hero = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const fadeDistance = window.innerHeight * 0.6;

      const progress = Math.min(window.scrollY / fadeDistance, 1);

      setOpacity(1 - progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const images = [
    "/images/img1.jpeg",
    "/images/img2.jpg",
    "/images/img3.jpeg",
    "/images/img4.jpeg",
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
              className="
                            h-full
                            w-full
                            object-cover
                        "
            />
          ))}
        </div>

        {/* Overlay */}
        <div
          className=" absolute
            inset-0
            bg-linear-to-t
            from-primary
            via-black/40
            to-transparent"
        />

        {/* Content */}
        <div
          style={{
            opacity,
            transform: `translateY(${(1 - opacity) * -80}px)`,
          }}
          className="
                    relative
                    z-10
                    flex
                    h-full
                    flex-col
                    items-center
                    justify-center
                    text-center
                    px-4
                "
        >
          <h1
            className="
                        font-heading
                        text-secondary
                        text-6xl
                        md:text-8xl
                        tracking-[0.2em]
                    "
          >
            ANTLER
          </h1>

          <p
            className="
                        mt-6
                        text-secondary
                        text-xl
                        md:text-3xl
                        font-light
                    "
          >
            A Summer State of Mind
          </p>

          <button
            className="
                        mt-10
                        bg-secondary
                        text-primary
                        px-10
                        py-4
                        tracking-widest
                        transition-all
                        duration-300
                        hover:bg-primary
                        hover:text-secondary
                    "
          >
            SHOP COLLECTION
          </button>
        </div>
      </div>
    </section>
  );
};

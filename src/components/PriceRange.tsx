export const PriceRange = () => {
  return (
    <section className="pt-5 pb-5">
      <p className="font-body">Price Range</p>
      <input
        type="range"
        className="  pointer-events-none mt-2 w-full"
        style={{ pointerEvents: "auto" }}
      />
    </section>
  );
};

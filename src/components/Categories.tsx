export const Categories = () => {
  return (
    <section className="pt-5 pb-5">
      <p className="font-body">Category</p>
      {/* select category */}
      <div className="pt-3">
        <div className="flex gap-2">
          <input type="checkbox" name="luggage" id="luggage" />
          <label>Lugagge</label>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" name="headphone" id="headphone" />
          <label>Headphone</label>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" name="shoes" id="shoes" />
          <label>Shoes</label>
        </div>
      </div>
    </section>
  );
};

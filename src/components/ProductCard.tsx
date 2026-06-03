export const ProductCard = () => {
  return (
    <div className="mt-5">
      <div className="aspect-4/5 overflow-hidden">
        <img
          src="/images/img1.jpeg"
          alt="product name"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="font-body flex flex-col gap-2 mt-2">
        <p className="font-bold text-xl">Product Name</p>
        <p className="text-gray-500 text-sm">Description</p>
        <div className="flex gap-5 items-center">
          <p className="text-lg font-bold">Discounted Price</p>
          {/* Strikethroughed */}
          <p className="text-gray-400 line-through">100</p>
          <p className="text-xs font-semibold text-red-500 ">15% OFF</p>
        </div>
      </div>
    </div>
  );
};

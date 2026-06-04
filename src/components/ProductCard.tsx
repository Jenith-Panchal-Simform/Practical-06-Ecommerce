export const ProductCard = () => {
  return (
    <div className="mt-5 min-w-0">
      <div className="aspect-4/5 overflow-hidden">
        <img
          src="/images/img1.jpeg"
          alt="product name"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="font-body flex flex-col gap-2 mt-2 min-w-0">
        <p
          className=" text-lg
                md:text-xl
                font-bold
                truncate"
        >
          Product Name
        </p>
        <p
          className="  text-sm
                text-gray-500
                line-clamp-2
                wrap-break-word"
        >
          Description
        </p>
        <div
          className="flex
                flex-wrap
                items-center
                gap-x-3
                gap-y-1"
        >
          <p className="text-base md:text-lg font-bold">Discounted Price</p>
          {/* Strikethroughed */}
          <p className="text-gray-400 line-through text-sm md:text-base">100</p>
          <p className="text-xs font-semibold text-red-500">15% OFF</p>
        </div>
      </div>
    </div>
  );
};

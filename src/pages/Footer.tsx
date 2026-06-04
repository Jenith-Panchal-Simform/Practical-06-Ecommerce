export const Footer = () => {
  return (
    <div className=" bg-white flex p-20 items-center justify-between">
      {/* Logo  and copyright*/}
      <div>
        <h1 className="font-heading text-3xl tracking-[0.25em] text-primary">
          ANTLER
        </h1>
        <p className="text-gray-500">
          © 2026 ANTLER Pvt. Ltd. ALL RIGHTS RESERVED
        </p>
      </div>
      <ul className="flex gap-10 text-gray-500">
        <li className="cursor-pointer">Privay Policy</li>
        <li className="cursor-pointer">Terms Of Service</li>
        <li className="cursor-pointer">Shipping and Returns</li>
        <li className="cursor-pointer">ContactUs</li>
      </ul>
    </div>
  );
};

export const Footer = () => {
  return (
    <div className="flex flex-col gap-8 bg-white p-6 md:flex-row md:items-center md:justify-between md:p-10 lg:p-20">
      {/* Logo & Copyright */}
      <div className="space-y-2">
        <h1 className="font-heading text-primary text-2xl tracking-[0.25em] md:text-3xl">ANTLER</h1>

        <p className="text-sm text-gray-500">© 2026 ANTLER Pvt. Ltd. ALL RIGHTS RESERVED</p>
      </div>

      {/* Links */}
      <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500 md:justify-end md:text-base">
        <li className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</li>

        <li className="hover:text-primary cursor-pointer transition-colors">Terms Of Service</li>

        <li className="hover:text-primary cursor-pointer transition-colors">Shipping & Returns</li>

        <li className="hover:text-primary cursor-pointer transition-colors">Contact Us</li>
      </ul>
    </div>
  );
};

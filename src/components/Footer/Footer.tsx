export const Footer = () => {
  return (
    <div
      className="
    bg-white
    flex
    flex-col
    gap-8
    p-6
    md:p-10
    lg:p-20
    md:flex-row
    md:items-center
    md:justify-between
  "
    >
      {/* Logo & Copyright */}
      <div className="space-y-2">
        <h1
          className="
        font-heading
        text-2xl
        md:text-3xl
        tracking-[0.25em]
        text-primary
      "
        >
          ANTLER
        </h1>

        <p className="text-sm text-gray-500">
          © 2026 ANTLER Pvt. Ltd. ALL RIGHTS RESERVED
        </p>
      </div>

      {/* Links */}
      <ul
        className="
      flex
      flex-wrap
      gap-x-6
      gap-y-3
      text-sm
      md:text-base
      text-gray-500
      md:justify-end
    "
      >
        <li className="cursor-pointer hover:text-primary transition-colors">
          Privacy Policy
        </li>

        <li className="cursor-pointer hover:text-primary transition-colors">
          Terms Of Service
        </li>

        <li className="cursor-pointer hover:text-primary transition-colors">
          Shipping & Returns
        </li>

        <li className="cursor-pointer hover:text-primary transition-colors">
          Contact Us
        </li>
      </ul>
    </div>
  );
};

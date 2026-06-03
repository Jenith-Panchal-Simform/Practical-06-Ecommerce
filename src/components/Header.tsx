import { ShoppingBag, User } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto flex h-20 items-center justify-between px-8">
        {/* Logo */}
        <div>
          <h1 className="font-heading text-3xl tracking-[0.25em] text-secondary">
            ANTLER
          </h1>
        </div>

        {/* Search */}
        <div className="hidden md:block w-[35%]">
          <input
            type="text"
            placeholder="Search products..."
            className="
                            w-full
                            border
                            border-secondary/50
                            bg-white/10
                            px-5
                            py-3
                            text-secondary
                            placeholder:text-secondary/70
                            backdrop-blur-md
                            outline-none
                        "
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6 text-secondary">
          <ShoppingBag size={22} />
          <User size={22} />
        </div>
      </div>
    </header>
  );
};

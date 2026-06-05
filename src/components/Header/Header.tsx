import { Search, ShoppingBag, User } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/20 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto flex h-20 items-center justify-between px-8">
        {/* Logo */}
        <div>
          <h1 className="font-heading text-3xl tracking-[0.25em] text-primary">
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
                            border-primary/50
                            bg-white/10
                            px-5
                            py-3
                            text-primary
                            placeholder:text-primary/70
                            backdrop-blur-md
                            outline-none
                        "
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6 text-primary">
          <Search size={22} className="md:hidden" />
          <ShoppingBag size={22} />
          <User size={22} />
        </div>
      </div>
    </header>
  );
};

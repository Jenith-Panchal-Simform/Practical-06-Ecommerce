import { Package, Search } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useFilter } from '../Products/hooks/useFilter';

export const Header = () => {
  const { searchTerm, setSearchTerm } = useFilter();
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-white/20 backdrop-blur-md">
      <div className="mx-auto flex h-20 items-center justify-between px-8">
        {/* Logo */}
        <NavLink to="/" className="inline-block">
          <h1 className="font-heading text-primary text-3xl tracking-[0.25em] transition-opacity duration-300 hover:opacity-80">
            ANTLER
          </h1>
        </NavLink>

        {/* Search */}
        <div className="hidden w-[35%] md:block">
          <input
            type="text"
            placeholder="Search products..."
            className="border-primary/50 text-primary placeholder:text-primary/70 w-full border bg-white/10 px-5 py-3 backdrop-blur-md outline-none"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
        </div>

        {/* Icons */}
        <div className="text-primary flex items-center gap-6">
          <Search size={22} className="md:hidden" />
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `transition-colors duration-300 ${isActive ? 'text-primary' : 'text-primary hover:text-secondary'} `
            }
          >
            <Package size={22} />
          </NavLink>
        </div>
      </div>
    </header>
  );
};

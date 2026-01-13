import { useEffect, useRef, useState } from "react";
import { navItems } from "../Utils/Constant";

const Header = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Close menu on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus(); //Restore keyboard focus
      }
    };

    if (open) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // menuRef.current - exist in the DOM or not
      // !menuRef.current.contains(e.target) - Safety check (prevent from runtime error) !- to ensure that click is outside the menu
      // !buttonRef.current?.contains(e.target as Node) - to ensure that click is not on menu button
      if (open && menuRef.current && !menuRef.current.contains(e.target as Node) && !buttonRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <header className="w-full sticky top-0 z-50 bg-white backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto py-2 px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex gap-2 sm:gap-3 items-center">
            <img className="h-12 sm:h-14 w-auto" src="/Paw_Prints2.png" alt="PawChoice Logo" />
            <span className="text-xl sm:text-2xl md:text-3xl font-yujiBoku text-amber-900">PawChoice</span>
          </div>

          {/* Desktop Nav */}
          <nav id="mobile-menu" className="hidden md:flex items-center gap-10 text-lg font-medium">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-amber-700 hover:text-amber-900 transition">
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            ref={buttonRef}
            type="button"
            className="md:hidden pr-1 cursor-pointer"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu">
            <img src="/menu_Icon.png" alt="Open navigation menu" className="h-6 w-auto" />
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div ref={menuRef}>
            <nav id="mobile-menu" className="md:hidden pb-3 flex flex-col gap-1 text-lg font-medium">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="p-2 hover:bg-red-100 transition rounded-md" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

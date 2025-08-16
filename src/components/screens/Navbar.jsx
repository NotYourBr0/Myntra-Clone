import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MegaMenu from "./MegaMenu";
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function MyntraNavbar() {
  // State to track which menu item is hovered for the mega menu
  const [hovered, setHovered] = useState(null);
  // State to store the mega menu data from a JSON file
  const [menuData, setMenuData] = useState({});
  // State to control the visibility of the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State to control the visibility of the mobile search bar
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  // Load the mega menu data from a local JSON file when the component mounts
  useEffect(() => {
    // This import is commented out because it relies on a local file,
    // which cannot be accessed in this environment.
    // import("../../../data/megaMenu.json").then(module =>
    //   setMenuData(module.default)
    // );
  }, []);

  const menuLabels = ["MEN", "WOMEN", "KIDS", "HOME", "BEAUTY", "GENZ", "STUDIO"];

  // Toggle the mobile search bar and close the mobile menu if it's open
  const toggleMobileSearch = () => {
    setIsMobileSearchOpen(!isMobileSearchOpen);
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  // Toggle the mobile menu and close the mobile search if it's open
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileSearchOpen) {
      setIsMobileSearchOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 bg-white shadow-sm z-50">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        {/* Myntra Logo - Retains navigation */}
        <Link to="/">
          <img src="/images/logo/logo.png" alt="Myntra" className="h-12 w-12 md:h-16 md:w-16 item" />
        </Link>

        {/* Desktop Navigation - Navigation removed */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-10">
          {menuLabels.map(label => (
            <div
              key={label}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHovered(label)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="font-semibold text-gray-800 hover:text-pink-500 transition text-sm lg:text-base">
                {label}
              </div>
              {hovered === label && menuData[label] && (
                <div className="absolute left-0 transform pt-4">
                  <MegaMenu data={menuData[label]} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Search Bar - No navigation */}
        <div className="hidden md:flex flex-grow justify-center px-4">
          <div className="relative w-full max-w-sm lg:max-w-md">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for products, brands and more"
              className="w-full bg-gray-100 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300 transition"
            />
          </div>
        </div>

        {/* Desktop Icons - Navigation removed */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <div className="hover:text-pink-500 text-gray-800 text-sm lg:text-base flex flex-col items-center cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            <span className="mt-1">Profile</span>
          </div>
          <div className="hover:text-pink-500 text-gray-800 text-sm lg:text-base flex flex-col items-center cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
            <span className="mt-1">Wishlist</span>
          </div>
          <div className="hover:text-pink-500 text-gray-800 text-sm lg:text-base flex flex-col items-center cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            <span className="mt-1">Bag</span>
          </div>
        </div>

        {/* Mobile Icons & Menu Button - Visible on mobile only */}
        <div className="md:hidden flex items-center gap-2">
          <button onClick={toggleMobileSearch} className="text-gray-800 focus:outline-none">
            <MagnifyingGlassIcon className="h-8 w-8" />
          </button>
          <button onClick={toggleMobileMenu} className="text-gray-800 focus:outline-none">
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Search Overlay - Renders only on mobile when activated */}
      {isMobileSearchOpen && (
        <div className="md:hidden fixed inset-0 bg-white bg-opacity-95 z-40 flex flex-col items-center py-8 pt-20">
          <div className="relative w-full px-4 mb-8">
            <MagnifyingGlassIcon className="absolute left-8 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search for products, brands and more"
              className="w-full bg-gray-100 rounded-lg py-3 pl-12 pr-4 text-base focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>
          <div className="absolute top-4 right-4">
            <button onClick={toggleMobileSearch} className="text-gray-800 focus:outline-none">
              <XMarkIcon className="h-10 w-10" />
            </button>
          </div>
          {/* You could add popular searches or recent search history here */}
        </div>
      )}

      {/* Mobile Menu Overlay - Renders only on mobile when activated */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white bg-opacity-95 z-40 flex flex-col items-center py-8 pt-20">
          <div className="absolute top-4 right-4">
            <button onClick={toggleMobileMenu} className="text-gray-800 focus:outline-none">
              <XMarkIcon className="h-10 w-10" />
            </button>
          </div>
          {menuLabels.map(label => (
            <div
              key={label}
              className="py-3 text-xl font-semibold text-gray-800 hover:text-pink-500 transition cursor-pointer"
              onClick={toggleMobileMenu}
            >
              {label}
            </div>
          ))}
          <hr className="w-2/3 my-4 border-gray-200" />
          <div className="py-2 text-lg text-gray-800 hover:text-pink-500 cursor-pointer" onClick={toggleMobileMenu}>Profile</div>
          <div className="py-2 text-lg text-gray-800 hover:text-pink-500 cursor-pointer" onClick={toggleMobileMenu}>Wishlist</div>
          <div className="py-2 text-lg text-gray-800 hover:text-pink-500 cursor-pointer" onClick={toggleMobileMenu}>Bag</div>
        </div>
      )}
    </nav>
  );
}

export default MyntraNavbar;

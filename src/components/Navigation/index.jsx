/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

const MenuItem = ({ href, label, isActive, isMobile }) => {
  return (
    <a
      href={href}
      className={`relative ${
        isActive
          ? "text-white after:bg-[#4677f5] after:w-[90%] md:after:w-full"
          : "text-gray-400 hover:text-white after:bg-gray-400"
      } ${
        isMobile ? "block px-3 py-2 text-base" : "px-3 py-2 text-sm"
      } font-medium rounded-md after:content-[''] after:block after:w-0 after:h-[1px] after:absolute after:left-3 md:after:left-0 after:-bottom-0.5 md:after:-bottom-4 after:transition-all after:duration-300 hover:after:w-[90%] md:hover:after:w-full`}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
    </a>
  );
};

function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to toggle profile dropdown menu
  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuItems = [
    { href: "#", label: "Dashboard", isActive: false },
    { href: "#", label: "Team", isActive: true },
    { href: "#", label: "Company", isActive: false },
    { href: "#", label: "Tech", isActive: false },
    { href: "#", label: "Audits", isActive: false },
  ];

  return (
    <nav className="bg-[#0a090e] border border-[#222633]">
      <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-between">
            {/* Logo */}
            <div className="flex flex-shrink-0 gap-3 items-center">
              <img
                className="h-7 w-auto"
                src="/assets/logo.png"
                alt="Your Company"
              />
              <p className="font-extrabold text-4xl">Delve</p>
            </div>

            {/* Desktop Menu Links */}
            <div className="hidden md:ml-6 md:block">
              <div className="flex space-x-4">
                {menuItems.map((item) => (
                  <MenuItem
                    key={item.label}
                    href={item.href}
                    label={item.label}
                    isActive={item.isActive}
                    isMobile={false}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Profile Menu */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
            <div className="relative">
              <button
                type="button"
                className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                id="user-menu-button"
                aria-expanded={isProfileDropdownOpen ? "true" : "false"}
                aria-haspopup="true"
                onClick={toggleProfileDropdown}
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-8 w-8 rounded-full"
                  src="/assets/men-1.png"
                  alt=""
                />
              </button>

              {/* Dropdown */}
              {isProfileDropdownOpen && (
                <div
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                  >
                    Your Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                  >
                    Sign out
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {menuItems.map((item) => (
              <MenuItem
                key={item.label}
                href={item.href}
                label={item.label}
                isActive={item.isActive}
                isMobile={true}
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;

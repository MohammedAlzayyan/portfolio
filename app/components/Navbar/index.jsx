"use client";
// import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

const navigation = [
  { name: "Home", href: "hero" },
  { name: "About", href: "about" },
  { name: "Services", href: "our-services" },
  { name: "Portfolio", href: "portfolio" },
  { name: "Contact", href: "contact" },
];

const Navbar = () => {
  const [backgroundColor, setBackgroundColor] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 40) {
      setBackgroundColor(true);
    } else {
      setBackgroundColor(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-100 ${
        backgroundColor ? "bg-black-dark" : ""
      } `}
    >
      <nav
        className="flex items-center justify-between px-6 py-3 lg:px-32 mx-auto max-w-7xl"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            {/* <User /> */}
            <img
              className="h-12 w-auto"
              src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"
              alt=""
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            // onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            {/* <Bars3Icon className="h-6 w-6" aria-hidden="true" /> */}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 ">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="text-base cursor-pointer font-semibold leading-6 text-white hover:text-bright transition-all duration-100"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
      {/* <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog> */}
    </header>
  );
};

export default Navbar;

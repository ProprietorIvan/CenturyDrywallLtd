import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

const Navigation = ({
  currentPage,
  showActions = true,
  transparent = true,
}: any) => {
  const { push } = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const services = [
    { text: "Residential Drywall", url: "/residential" },
    { text: "Commercial Drywall", url: "/commercial" },
    { text: "New Construction", url: "/new-construction" },
    { text: "Specialty Finishes", url: "/specialty" },
  ];

  const navLinks = [
    {
      text: "Services",
      url: "#",
      hasDropdown: true,
    },
    { text: "Locations", url: "/locations" },
    { text: "About Us", url: "/about-us" },
    { text: "Contact", url: "/contact" },
    { text: "Privacy", url: "/privacy-page" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`absolute top-0 left-0 w-full z-50 ${
        transparent ? "bg-transparent" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-24">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div
              className="w-16 sm:w-24 relative cursor-pointer"
              onClick={() => push("/")}
            >
              <Image
                src="/logo.webp"
                alt="Company Logo"
                width={96}
                height={96}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex flex-1 items-center justify-end gap-8 w-100">
              {navLinks.map((link, index) => (
                <div
                  key={index}
                  className="relative"
                  ref={link.hasDropdown ? dropdownRef : null}
                >
                  {link.hasDropdown ? (
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className={`flex items-center gap-1 text-lg transition-colors ${
                        transparent
                          ? "text-white hover:text-yellow-400"
                          : "text-gray-500 hover:text-yellow-500"
                      }`}
                    >
                      {link.text}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          isServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        push(link.url);
                      }}
                      className={`text-lg transition-colors ${
                        transparent
                          ? "text-white hover:text-yellow-400"
                          : "text-gray-500 hover:text-yellow-500"
                      }`}
                    >
                      {link.text}
                    </a>
                  )}

                  {/* Services Dropdown */}
                  {link.hasDropdown && isServicesOpen && (
                    <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                      {services.map((service, serviceIndex) => (
                        <a
                          key={serviceIndex}
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            push(service.url);
                            setIsServicesOpen(false);
                          }}
                          className="block px-4 py-2 text-gray-800 hover:bg-yellow-50 hover:text-yellow-600 transition-colors"
                        >
                          {service.text}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100/10 transition-colors"
            >
              {isMenuOpen ? (
                <X
                  className={`h-6 w-6 ${
                    transparent ? "stroke-white" : "stroke-black"
                  }`}
                />
              ) : (
                <Menu
                  className={`h-6 w-6 ${
                    transparent ? "stroke-white" : "stroke-black"
                  }`}
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-black/80 backdrop-blur-sm border-b border-white/10 shadow-lg z-50">
            <div className="px-4 py-2 space-y-1">
              {/* Services Section in Mobile Menu */}
              <div className="py-2">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full px-4 py-2 text-white hover:text-yellow-400 transition-colors"
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isServicesOpen && (
                  <div className="pl-8 space-y-1 mt-2">
                    {services.map((service, index) => (
                      <a
                        key={index}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          push(service.url);
                          setIsMenuOpen(false);
                        }}
                        className="block py-2 text-white hover:text-yellow-400 transition-colors"
                      >
                        {service.text}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Other Navigation Links */}
              {navLinks
                .filter((link) => !link.hasDropdown)
                .map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      push(link.url);
                      setIsMenuOpen(false);
                    }}
                    className="block py-2 px-4 text-white hover:text-yellow-400 transition-colors"
                  >
                    {link.text}
                  </a>
                ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

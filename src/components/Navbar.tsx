import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id: string) => {
    setIsOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full h-20  backdrop-blur-md border-b border-white/5 flex justify-center items-center">
      <div className="flex justify-between items-center w-full max-w-7xl px-5 h-full">
        
        {/* Logo (ONLY route allowed) */}
        <button
          onClick={() => navigate("/")}
          className="text-3xl font-extrabold tracking-tight text-white"
        >
          OLY<span className="text-primary">GYM</span>
        </button>

        {/* Mobile toggle */}
        <div
          className="md:hidden text-2xl cursor-pointer text-white z-50"
          onClick={toggleMenu}
        >
          {isOpen ? "✕" : "☰"}
        </div>

        {/* Menu */}
        <ul
          className={`${
            isOpen ? "left-0 opacity-100" : "-left-full opacity-0"
          } md:flex md:static md:opacity-100 md:bg-transparent md:h-auto md:w-auto md:p-0 md:flex-row
          flex flex-col absolute top-20 w-full h-screen bg-dark-bg transition-all duration-300
          items-center justify-start pt-10 md:pt-0 gap-6 md:gap-8`}
        >
          <li>
            <button
              onClick={() => scrollToSection("home")}
              className="text-lg font-medium text-white"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="text-lg font-medium text-light-muted hover:text-white"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("services")}
              className="text-lg font-medium text-light-muted hover:text-white"
            >
              Services
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-lg font-medium text-light-muted hover:text-white"
            >
              Contact
            </button>
          </li>

          {/* Mobile CTA */}
          <li className="md:hidden">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-3 bg-primary text-white text-lg font-semibold rounded-lg"
            >
              Join Now
            </button>
          </li>
        </ul>

        {/* Desktop CTA */}
        <button
          onClick={() => scrollToSection("contact")}
          className="hidden md:block px-6 py-2.5 bg-primary hover:bg-primary-hover
          text-white font-semibold rounded-full shadow-lg shadow-primary/30
          transition-all duration-300 hover:-translate-y-0.5"
        >
          Join Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

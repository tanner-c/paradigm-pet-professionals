import logo from '../assets/logo.png';
import { useState } from 'react';
import './Header.css';
import Navbar from './Navbar';
import { Link } from 'react-router';


function SearchAndConsultButton() {
  return (
    <>
      <div
        className={`
          flex flex-col
          md:flex-row
          items-center
          w-full md:w-auto
          space-y-2 md:space-y-0 md:space-x-4
        `}
      >
        <input
          className={`
            bg-white
            rounded-2xl
            h-10
            px-4
            w-full md:w-64
          `}
          type="text"
          placeholder="Search..."
        />
        <Link
          to="/consultation"
          className={`
            bg-(--accent-color-blue-sky)
            hover:bg-(--accent-color-blue-sky-dark)
            text-white
            rounded-2xl
            h-10
            px-4
            py-2
            text-center
            w-full md:w-auto
            transition-colors
            duration-150
          `}
          type="button"
        >
          Request Consultation
        </Link>
      </div>
    </>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div>
      <header
        className={`
          h-20
          bg-(--primary-color-midnight-blue)
          flex items-center justify-between
          px-4
          w-full
        `}
      >
        <Link to="/">
          <img src={logo} className="h-12" alt="logo" />
        </Link>

        <div className="hidden md:flex">
          <div className="flex items-center">
            <SearchAndConsultButton />
          </div>
        </div>

        <button
          type="button"
          className={`
            md:hidden
            p-2
            rounded-md
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-(--primary-color-midnight-blue)
          `}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen(v => !v)}
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {mobileOpen ? (
              // X icon
              <g>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </g>
            ) : (
              // Hamburger icon
              <g>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </g>
            )}
          </svg>
        </button>

        {mobileOpen && (
          <div
            className={`
              md:hidden
              absolute
              top-20 left-0
              z-10
              w-full
              bg-(--primary-color-midnight-blue)
              shadow-md
              p-4
            `}
          >
            <SearchAndConsultButton />

            <div className="absolute w-full top-30 left-0">
              <Navbar />
            </div>
          </div>
        )}
      </header>

      <div className="hidden md:block">
        <Navbar />
      </div>
    </div>
  );
}
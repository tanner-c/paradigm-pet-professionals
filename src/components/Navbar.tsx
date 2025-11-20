import { NavLink } from "react-router";

const navLinkClass = (isActive: boolean) =>
  (isActive ? 'bg-(--accent-color-blue-sky) ' : '') +
  `block w-full text-center md:inline-block md:w-24
  px-3 py-2 text-white rounded
  hover:bg-(--accent-color-blue-sky) hover:text-white
  transition-colors duration-150
  focus:outline-none focus:ring-2 focus:ring-(--accent-color-blue-sky)`;

export default function Navbar() {
  return (
    <nav>
      <ul
        className={`bg-(--secondary-color-dim-gray)
          px-4 py-2
          space-y-2 md:space-y-0 md:flex md:space-x-4`}
      >
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => navLinkClass(isActive)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cats"
            className={({ isActive }) => navLinkClass(isActive)}
          >
            Cats
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dogs"
            className={({ isActive }) => navLinkClass(isActive)}
          >
            Dogs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/birds"
            className={({ isActive }) => navLinkClass(isActive)}
          >
            Birds
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/faq"
            className={({ isActive }) => navLinkClass(isActive)}
          >
            FAQs
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default function Navbar() {
  return (
    <nav>
      <ul
        className={`bg-(--secondary-color-dim-gray)
          px-4 py-2
          space-y-2 md:space-y-0 md:flex md:space-x-4`}
      >
        <li>
          <a
            href="#home"
            className={`block w-full text-center md:inline-block md:w-24
              px-3 py-2 text-white rounded
              hover:bg-(--accent-color-blue-sky) hover:text-white
              transition-colors duration-150
              focus:outline-none focus:ring-2 focus:ring-(--accent-color-blue-sky)`}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#cats"
            className={`block w-full text-center md:inline-block md:w-24
              px-3 py-2 text-white rounded
              hover:bg-(--accent-color-blue-sky) hover:text-white
              transition-colors duration-150
              focus:outline-none focus:ring-2 focus:ring-(--accent-color-blue-sky)`}
          >
            Cats
          </a>
        </li>
        <li>
          <a
            href="#dogs"
            className={`block w-full text-center md:inline-block md:w-24
              px-3 py-2 text-white rounded
              hover:bg-(--accent-color-blue-sky) hover:text-white
              transition-colors duration-150
              focus:outline-none focus:ring-2 focus:ring-(--accent-color-blue-sky)`}
          >
            Dogs
          </a>
        </li>
        <li>
          <a
            href="#birds"
            className={`block w-full text-center md:inline-block md:w-24
              px-3 py-2 text-white rounded
              hover:bg-(--accent-color-blue-sky) hover:text-white
              transition-colors duration-150
              focus:outline-none focus:ring-2 focus:ring-(--accent-color-blue-sky)`}
          >
            Birds
          </a>
        </li>
        <li>
          <a
            href="#faqs"
            className={`block w-full text-center md:inline-block md:w-24
              px-3 py-2 text-white rounded
              hover:bg-(--accent-color-blue-sky) hover:text-white
              transition-colors duration-150
              focus:outline-none focus:ring-2 focus:ring-(--accent-color-blue-sky)`}
          >
            FAQs
          </a>
        </li>
      </ul>
    </nav>
  );
}
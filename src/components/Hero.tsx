import { Link } from 'react-router';
import dogImage from '../assets/dog-hero.jpg';

export default function Hero() {
  return (
    <section
      style={{ backgroundImage: `url(${dogImage})` }}
      className={`
        z-0
        relative
        h-140
        bg-cover
        bg-center
        flex
        items-center
        justify-center
      `}
    >
      <div
        aria-hidden="true"
        className={`
          absolute
          inset-0
          bg-black/50
          pointer-events-none
        `}
      />

      <div
        className={`
          relative
          z-10
          max-w-3xl
          text-center
          px-6
        `}
      >
        <h1
          className={`
            text-4xl
            md:text-5xl
            font-extrabold
            text-white
            leading-tight
            mb-4
          `}
        >
          Evidence-based pet care advice for every pet lover
        </h1>

        <p
          className={`
            text-lg
            sm:text-xl
            text-white/85
            mb-20
          `}
        >
          Paradigm Pet Professionals has 12 years' experience working with pet owners, certifications in pet health and nutrition, and customer recognition for outstanding support
        </p>

        <Link
          to="/consultation"
          className={`
            bg-(--accent-color-blue-sky)
            hover:bg-(--accent-color-blue-sky-dark)
            text-white
            rounded-2xl
            h-12
            px-10
            py-3
            w-full
            md:w-auto
            transition-colors
            duration-150
            shadow-md
          `}
        >
          See What's Pawsible
        </Link>
      </div>
    </section>
  );
}
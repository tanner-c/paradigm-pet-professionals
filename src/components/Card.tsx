import { Link } from "react-router";

export default function Card({
  image,
  imageDescription,
  description,
  buttonText,
  buttonLink,
  numberOfCards,
}: {
  image: string;
  imageDescription: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  numberOfCards: number;
}) {
  return (
    // outer wrapper controls responsive width: full on mobile, 1/3 on md, 1/4 on lg
    <div className={`w-full md:w-1/${numberOfCards} p-4`}>
      <div className="
        bg-linear-to-br
        from-white
        to-slate-50
        md:rounded-2xl
        md:shadow-md
        lg:ring-1
        ring-slate-200 
        overflow-hidden 
        flex 
        flex-col 
        h-full">
        <img src={image} alt={imageDescription} className="w-full h-48 object-cover" />
        <div className="p-4 flex-1 flex flex-col">
          <p className="mb-4 text-gray-700 flex-1">{description}</p>
          <Link
            to={buttonLink}
            className="
              bg-(--accent-color-blue-sky)
              hover:bg-(--accent-color-blue-sky-dark)
              text-white
              rounded-2xl
              h-12
              px-10
              w-full
              md:w-auto
              transition-colors
              duration-150
              shadow-md
              flex
              items-center
              justify-center
              text-center
              no-underline
            "
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
}
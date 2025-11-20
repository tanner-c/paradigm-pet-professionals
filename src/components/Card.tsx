import { useNavigate } from "react-router";

export default function Card({ image, imageDescription, description, buttonText, buttonLink }: { image: string, imageDescription: string, description: string, buttonText: string, buttonLink: string }) {
  const navigate = useNavigate();

  return (
    <div className={`
      border
      rounded-lg
      shadow-md
      overflow-hidden
    `}>
      <img src={image} alt={imageDescription} className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="mb-4 text-gray-700">{description}</p>
        <button
          className={`
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
          `}
          onClick={() => navigate(buttonLink)}
        >{buttonText}</button>
      </div>
    </div>
  );
}
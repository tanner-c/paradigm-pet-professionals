import Hero from "../components/Hero";
import catCardImage from "../assets/cat-card.jpg";
import dogCardImage from "../assets/dog-card.jpg";
import birdCardImage from "../assets/bird-faq-card.jpg";
import Card from "../components/Card";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-wrap -m-4">
        <Card image={catCardImage}
          imageDescription="Cat"
          description="Learn how to care for cats at every stage of life—from newborn kittens to senior companions—with clear guidance on nutrition, growth, and healthy habits."
          buttonText="Pounce Into Cat Care"
          buttonLink="/cats"
          numberOfCards={3} />

        <Card image={dogCardImage}
          imageDescription="Dog"
          description="Discover essential guidance on feeding, training, grooming, and protecting dogs at every age—helping you support a healthy, happy life for your canine companion."
          buttonText="Unleash Dog Care"
          buttonLink="/dogs"
          numberOfCards={3} />

        <Card image={birdCardImage}
          imageDescription="Bird"
          description="Find quick, practical answers to common pet-care questions—from dealing with fleas to feeding schedules and lifespan expectations for a variety of animals."
          buttonText="Get the Scoop"
          buttonLink="/faq"
          numberOfCards={3} />
      </div>

      <footer className="bg-(--secondary-color-dim-gray) text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} Paradigm Pet Professionals. All rights reserved.</p>
      </footer>
    </>
  );
}
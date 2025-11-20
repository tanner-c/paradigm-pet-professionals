import BlogPost from "../components/BlogPost";
import PageContainer from "../components/PageContainer";
import birdImage from "../assets/bird-faq-card.jpg";

const h2Classes = "mt-8 mb-4 text-2xl font-bold text-(--primary-color-dark-blue)";

export default function Birds() {
  return (
    <PageContainer>
      <BlogPost
        author="Tanner Carter"
        title="The Bird’s Song: A Feathered Friend’s Guide to Growth & Care"
        date="2025-11-20T00:00:00.000Z"
        image={birdImage}
      >
        <p>Birds are very intriguing creatures as they can range from birds as small as a Cuban bee hummingbird (about two inches long and a little over 1/20 of an ounce) to as large as an ostrich. While most birds fly, there are some that don't.</p>
        <p className="mt-4" >Birds are amazing and each breed is unique in its own way, particularly when it comes to their relational needs and well-being. </p>

        <h2 className={h2Classes}>Signs to Watch For</h2>
        <p>Unfortunately, birds can experience sadness and depression just like humans. A number of root causes may be responsible for your bird's depression such as an illness (either physical or mental), losing its companion, or increasingly becoming bored. Some signs to help identify if your bird is experiencing depression may include the following:</p>
        <ul className="list-disc list-inside ml-4 mt-4">
          <li>reduced appetite</li>
          <li>becoming increasingly irritable</li>
          <li>aggressive behavior</li>
          <li>songs have a different, more solemn tone</li>
        </ul>

        <h2 className={h2Classes}>Conclusion</h2>
        <p>Be sure to tell your veterinarian if you see signs of any of these symptoms. Just like many illnesses, identifying and treating the symptoms earlier may drastically increase the lifespan of your birdie.</p>

      </BlogPost>
    </PageContainer>
  );
}
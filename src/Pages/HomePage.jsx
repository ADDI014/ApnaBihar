import React from 'react';
import Card from '../Components/Card'; // Corrected the folder case to 'components'
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";
import { 
  touristSpots, 
  cuisines, 
  festivals, 
  arts, 
  temples, 
  clothes, 
  history 
} from '../data/HomePageData'; // Corrected file name case

// Reusable component to display a category section with a title and item cards
const CategoryPreview = ({ title, items, link = "#" }) => (
  <section className="py-12 md:py-16">
    <div className="flex justify-between items-center mb-8">
      <h2 
        className="text-3xl md:text-4xl font-bold text-gray-800" 
        style={{ fontFamily: "'Laila', sans-serif" }}
      >
        {title}
      </h2>
      <Link 
        to={link} 
        className="text-orange-600 font-semibold hover:underline transition-colors"
      >
        View All &rarr;
      </Link>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* 👇 Use .slice(0, 4) to get only the first four items from the array */}
      {items.slice(0, 4).map((item) => (
        <Link to={`${link}/${item.id}`} key={item.id} className="block">
          <Card 
            name={item.name} 
            description={item.description} 
            image={item.image} 
          />
        </Link>
      ))}
    </div>
  </section>
);

function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <header 
        className="relative h-[60vh] md:h-[85vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/images/Background/Home1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center z-10 px-4">
          <h1 
            className="text-4xl md:text-6xl font-extrabold mb-4" 
            style={{ fontFamily: "'Laila', sans-serif" }}
          >
            The Heart of Incredible India
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Embark on a journey through a land of ancient wisdom, vibrant culture, and timeless traditions.
          </p>
          <ScrollLink
            to="explore"
            smooth={true}
            duration={800}
            offset={-70} // Adjust this offset to match your navbar's height
            className="cursor-pointer bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 transform hover:scale-105"
          >
            Start Exploring
          </ScrollLink>
        </div>
      </header>

      {/* Main Content Area */}
      <main 
        id="explore" 
        className="container mx-auto px-6 divide-y divide-stone-200"
      >
        <CategoryPreview title="Enchanting Destinations" items={touristSpots} link="/tourist-places" />
        <CategoryPreview title="Flavors of Bihar" items={cuisines} link="/cuisines" />
        <CategoryPreview title="Vibrant Festivals" items={festivals} link="/festivals" />
        <CategoryPreview title="Timeless Art & Craft" items={arts} link="/arts" />
        <CategoryPreview title="Sacred Temples" items={temples} link="/temples" />
        <CategoryPreview title="Traditional Attire" items={clothes} link="/clothes" />
        <CategoryPreview title="Glimpses of History" items={history} link="/history" />
      </main>
    </div>
  );
}

export default HomePage;
import React, { useState, useEffect } from 'react';
import Card from '../Components/Card';
import ShimmerCard from '../Components/ShimmerCard';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { 
  touristSpots, 
  cuisines, 
  festivals, 
  arts, 
  temples, 
  clothes, 
  history 
} from '../data/HomePageData';

const CategoryPreview = ({ title, items, link = "#" }) => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      ref={ref} 
      className={`py-12 md:py-16 transition-all duration-700 ease-in-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800" style={{ fontFamily: "'Laila', sans-serif" }}>
          {title}
        </h2>
        <Link to={link} className="text-orange-600 font-semibold hover:underline transition-colors">
          {t('view_all')} &rarr;
        </Link>
      </div>
      <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide sm:grid sm:grid-cols-2 sm:gap-8 sm:space-x-0 lg:grid-cols-4">
        {items.slice(0, 4).map((item) => (
          <div key={item.id} className="w-56 flex-shrink-0 sm:w-full">
            <Link to={`${link}/${item.id}`} className="block">
              <Card name={item.name} description={item.description} image={item.image} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

const ShimmerCategoryPreview = () => (
  <section className="py-12 md:py-16">
    <div className="h-10 w-1/2 bg-gray-300 rounded animate-pulse mb-8"></div>
    <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide sm:grid sm:grid-cols-2 sm:gap-8 sm:space-x-0 lg:grid-cols-4">
      {Array.from({ length: 4 }).map((_, index) => (
         <div key={index} className="w-5/6 flex-shrink-0 sm:w-full">
            <ShimmerCard />
         </div>
      ))}
    </div>
  </section>
);

function HomePage() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => { setIsLoading(false); }, 1500);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <header 
        className="relative h-[60vh] md:h-[85vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/images/Background/Home1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4" style={{ fontFamily: "'Laila', sans-serif" }}>
            {t('hero_title')}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            {t('hero_subtitle')}
          </p>
          <ScrollLink
            to="explore"
            smooth={true}
            duration={800}
            offset={-70}
            className="cursor-pointer bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 transform hover:scale-105"
          >
            {t('start_exploring')}
          </ScrollLink>
        </div>
      </header>

      {/* Main Content Area */}
      <main id="explore" className="container mx-auto px-6 divide-y divide-stone-200">
        {isLoading ? (
          <>
            <ShimmerCategoryPreview />
            <ShimmerCategoryPreview />
            <ShimmerCategoryPreview />
          </>
        ) : (
          <>
            <CategoryPreview title={t('enchanting_destinations')} items={touristSpots} link="/tourist-places" />
            <CategoryPreview title={t('flavors_of_bihar')} items={cuisines} link="/cuisines" />
            <CategoryPreview title={t('vibrant_festivals')} items={festivals} link="/festivals" />
            <CategoryPreview title={t('timeless_art_craft')} items={arts} link="/arts" />
            <CategoryPreview title={t('sacred_temples')} items={temples} link="/temples" />
            <CategoryPreview title={t('traditional_attire')} items={clothes} link="/clothes" />
            <CategoryPreview title={t('glimpses_of_history')} items={history} link="/history" />
          </>
        )}
      </main>
    </div>
  );
}

export default HomePage;
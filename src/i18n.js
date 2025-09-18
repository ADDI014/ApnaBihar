import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// The translations for all components
const resources = {
  en: {
    translation: {
      "nav_home": "Home",
      "nav_tourist_places": "Tourist Places",
      "nav_festivals": "Festivals",
      "nav_cuisines": "Cuisines",
      "nav_arts": "Art & Craft",
      "nav_temples": "Temples",
      "nav_clothes": "Attire",
      "nav_history": "History",
      "hero_title": "The Heart of Incredible India",
      "hero_subtitle": "Embark on a journey through a land of ancient wisdom, vibrant culture, and timeless traditions.",
      "start_exploring": "Start Exploring",
      "enchanting_destinations": "Enchanting Destinations",
      "flavors_of_bihar": "Flavors of Bihar",
      "vibrant_festivals": "Vibrant Festivals",
      "timeless_art_craft": "Timeless Art & Craft",
      "sacred_temples": "Sacred Temples",
      "traditional_attire": "Traditional Attire",
      "glimpses_of_history": "Glimpses of History",
      "view_all": "View All"
    }
  },
  hi: {
    translation: {
      "nav_home": "होम",
      "nav_tourist_places": "पर्यटन स्थल",
      "nav_festivals": "त्यौहार",
      "nav_cuisines": "व्यंजन",
      "nav_arts": "कला और शिल्प",
      "nav_temples": "मंदिर",
      "nav_clothes": "परिधान",
      "nav_history": "इतिहास",
      "hero_title": "अतुल्य भारत का हृदय",
      "hero_subtitle": "प्राचीन ज्ञान, जीवंत संस्कृति और कालातीत परंपराओं की भूमि के माध्यम से एक यात्रा पर निकलें।",
      "start_exploring": "अन्वेषण शुरू करें",
      "enchanting_destinations": "मनमोहक स्थल",
      "flavors_of_bihar": "बिहार के स्वाद",
      "vibrant_festivals": "जीवंत त्यौहार",
      "timeless_art_craft": "कालातीत कला और शिल्प",
      "sacred_temples": "पवित्र मंदिर",
      "traditional_attire": "पारंपरिक परिधान",
      "glimpses_of_history": "इतिहास की झलकियाँ",
      "view_all": "सभी देखें"
    }
  },
  bho: {
    translation: {
      "nav_home": "होम",
      "nav_tourist_places": "पर्यटन स्थल",
      "nav_festivals": "तिउहार",
      "nav_cuisines": "पकवान",
      "nav_arts": "कला आ शिल्प",
      "nav_temples": "मंदिर",
      "nav_clothes": "पहनावा",
      "nav_history": "इतिहास",
      "hero_title": "अतुल्य भारत के धइल हिया",
      "hero_subtitle": "पुरान ज्ञान, जीवंत संस्कृति आ कालातीत परंपरा के भूमि से होके यात्रा पर निकलीं।",
      "start_exploring": "खोज शुरू करीं",
      "enchanting_destinations": "मनमोहक जगह",
      "flavors_of_bihar": "बिहार के सवाद",
      "vibrant_festivals": "जीवंत तिउहार",
      "timeless_art_craft": "कालातीत कला आ शिल्प",
      "sacred_temples": "पवित्र मंदिर",
      "traditional_attire": "पारंपरिक पहिनावा",
      "glimpses_of_history": "इतिहास के झलक",
      "view_all": "सब देखीं"
    }
  },
  mai: {
    translation: {
      "nav_home": "घर",
      "nav_tourist_places": "पर्यटन स्थल",
      "nav_festivals": "पर्व-त्योहार",
      "nav_cuisines": "व्यंजन",
      "nav_arts": "कला आ शिल्प",
      "nav_temples": "मंदिर",
      "nav_clothes": "परिधान",
      "nav_history": "इतिहास",
      "hero_title": "अतुल्य भारतक हृदय",
      "hero_subtitle": "प्राचीन ज्ञान, जीवंत संस्कृति आ कालातीत परंपराक भूमि सं गुजरू.",
      "start_exploring": "अन्वेषण शुरू करू",
      "enchanting_destinations": "मनमोहक स्थल",
      "flavors_of_bihar": "बिहारक स्वाद",
      "vibrant_festivals": "जीवंत पर्व-त्योहार",
      "timeless_art_craft": "कालातीत कला आ शिल्प",
      "sacred_temples": "पवित्र मंदिर",
      "traditional_attire": "पारंपरिक परिधान",
      "glimpses_of_history": "इतिहासक झलक",
      "view_all": "सब देखू"
    }
  },
  mag: {
    translation: {
      "nav_home": "घर",
      "nav_tourist_places": "घूमे के जगह",
      "nav_festivals": "तिउहार",
      "nav_cuisines": "पकवान",
      "nav_arts": "कला-शिल्प",
      "nav_temples": "मंदिर",
      "nav_clothes": "पहनावा",
      "nav_history": "इतिहास",
      "hero_title": "अतुल्य भारत के हिरदय",
      "hero_subtitle": "पुरान ज्ञान, जीवंत संस्कृति और कालातीत परंपरा के धरती से होके एगो यात्रा पर निकलीं।",
      "start_exploring": "खोजल शुरू करीं",
      "enchanting_destinations": "मनमोहित करेवाला जगह",
      "flavors_of_bihar": "बिहार के सवाद",
      "vibrant_festivals": "जीवंत तिउहार",
      "timeless_art_craft": "कालातीत कला-शिल्प",
      "sacred_temples": "पवित्र मंदिर",
      "traditional_attire": "पारंपरिक पहिनावा",
      "glimpses_of_history": "इतिहास के झलक",
      "view_all": "सब देखीं"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
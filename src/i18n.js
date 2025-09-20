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
      "view_all": "View All",
      // Category Titles
      "cat_tourist_places": "Enchanting Destinations",
      "cat_cuisines": "Flavors of Bihar",
      "cat_festivals": "Vibrant Festivals",
      "cat_arts": "Timeless Art & Craft",
      "cat_temples": "Sacred Temples",
      "cat_clothes": "Traditional Attire",
      "cat_history": "Glimpses of History",
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
      "view_all": "सभी देखें",
      // Category Titles
      "cat_tourist_places": "मनमोहक स्थल",
      "cat_cuisines": "बिहार के स्वाद",
      "cat_festivals": "जीवंत त्यौहार",
      "cat_arts": "कालातीत कला और शिल्प",
      "cat_temples": "पवित्र मंदिर",
      "cat_clothes": "पारंपरिक परिधान",
      "cat_history": "इतिहास की झलकियाँ",
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
      "view_all": "सब देखीं",
      // Category Titles
      "cat_tourist_places": "मनमोहक जगह",
      "cat_cuisines": "बिहार के सवाद",
      "cat_festivals": "जीवंत तिउहार",
      "cat_arts": "कालातीत कला आ शिल्प",
      "cat_temples": "पवित्र मंदिर",
      "cat_clothes": "पारंपरिक पहिनावा",
      "cat_history": "इतिहास के झलक",
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
      "view_all": "सब देखू",
      // Category Titles
      "cat_tourist_places": "मनमोहक स्थल",
      "cat_cuisines": "बिहारक स्वाद",
      "cat_festivals": "जीवंत पर्व-त्योहार",
      "cat_arts": "कालातीत कला आ शिल्प",
      "cat_temples": "पवित्र मंदिर",
      "cat_clothes": "पारंपरिक परिधान",
      "cat_history": "इतिहासक झलक",
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
      "view_all": "सब देखीं",
      // Category Titles
      "cat_tourist_places": "मनमोहित करेवाला जगह",
      "cat_cuisines": "बिहार के सवाद",
      "cat_festivals": "जीवंत तिउहार",
      "cat_arts": "कालातीत कला-शिल्प",
      "cat_temples": "पवित्र मंदिर",
      "cat_clothes": "पारंपरिक पहिनावा",
      "cat_history": "इतिहास के झलक",
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
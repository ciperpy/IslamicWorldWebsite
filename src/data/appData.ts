export const GITHUB_CONFIG = {
  owner: "ciperpy",
  repo: "Islamic-World",
  repoUrl: "https://github.com/ciperpy/Islamic-World",
  releasesUrl: "https://github.com/ciperpy/Islamic-World/releases",
  latestReleasePageUrl: "https://github.com/ciperpy/Islamic-World/releases/latest",
  latestReleaseApiUrl: "https://api.github.com/repos/ciperpy/Islamic-World/releases/latest",
};

export interface AppRelease {
  version: string;
  versionCode: number;
  releaseDate: string;
  apkSize: string;
  apkSizeBytes: number;
  minAndroid: string;
  targetAndroid: string;
  sha256: string;
  downloadUrl: string;
  fallbackDownloadUrl?: string;
  fileName: string;
  packageName: string;
  highlights: string[];
}

export const APP_METADATA: AppRelease = {
  version: "v1.2.1",
  versionCode: 2,
  releaseDate: "October 24, 2026",
  apkSize: "5.89 MB",
  apkSizeBytes: 5892104,
  minAndroid: "Android 7.0 (Nougat, API 24)",
  targetAndroid: "Android 15 (Vanilla Ice Cream, API 35)",
  sha256: "89894A325A4843795548D267F53C6B07BC49AF02E294B3BC561F6D4778942965",
  downloadUrl: "https://github.com/ciperpy/Islamic-World/releases/download/v1.2.1/Islamic-World-v1.2.1.apk",
  fallbackDownloadUrl: "/downloads/Islamic-World-v1.2.1.apk",
  fileName: "Islamic-World-v1.2.1.apk",
  packageName: "com.ubaid.islamicworld",
  highlights: [
    "Traditional 604-page Madinah Mushaf Page View with ornate borders & continuous calligraphy",
    "Dual reading modes: Modern Ayah Cards View & Traditional Mushaf Page View",
    "Background audio playback service with lock screen media notification controls",
    "Real millisecond countdown to next Adhan & full 30-day monthly timetable",
    "High-relevance instant search across Quran, Duas, Hadith, and Islamic Stories",
    "Sensor-driven Qibla compass with calibration guidance & haptic alignment",
    "Daily Quran progress dashboard tracking reading count & audio listening minutes"
  ]
};

export const RELEASE_HISTORY = [
  {
    version: "v1.2.1",
    date: "October 24, 2026",
    tag: "Latest Release",
    notes: [
      "Authentic 604-page Madinah Mushaf Page View with traditional Islamic borders, Eastern Arabic page numbers, Juz & Manzil headers.",
      "Pure continuous Arabic calligraphy without translation cards in Mushaf mode.",
      "Tap-to-play audio recitation directly from Mushaf page with real-time verse highlighting.",
      "Horizontal swipe page-turning via ViewPager2 with direct 'Jump to Page' dialog.",
      "Preserved 100% of existing modern Ayah View with English translations, Tafsir, and Word-by-Word analysis."
    ]
  },
  {
    version: "v1.2.0",
    date: "October 24, 2026",
    tag: "Major Update",
    notes: [
      "Media3 background audio service for uninterrupted Quran listening.",
      "Global search across Surahs, Duas, Hadiths, and Stories with relevance ranking.",
      "Fixed prayer countdown to compute real millisecond delta until Adhan.",
      "Added 30-day monthly prayer timetable and compass calibration hints.",
      "Daily Quran progress dashboard and dedicated Ayah Bookmarks manager."
    ]
  },
  {
    version: "v1.1.0",
    date: "October 23, 2026",
    tag: "Content Expansion",
    notes: [
      "Complete Holy Quran text with all 6,236 Ayahs and English translations.",
      "Expanded Duas collection to 60+ authentic invocations across 18 categories.",
      "Word-by-word morphological breakdown and Tafsir Ibn Kathir / Jalalayn."
    ]
  },
  {
    version: "v1.0.0",
    date: "October 2026",
    tag: "Initial Release",
    notes: [
      "Core Islamic World Android application release.",
      "Prayer times calculation, Qibla compass, Ramadan tracker, and Zakat calculator."
    ]
  }
];

export interface AppFeature {
  id: string;
  title: string;
  category: "Quran" | "Worship" | "Tools" | "Knowledge";
  badge?: string;
  description: string;
  iconName: string;
}

export const APP_FEATURES: AppFeature[] = [
  {
    id: "quran-reading",
    title: "The Holy Quran",
    category: "Quran",
    badge: "114 Surahs",
    description: "Read all 6,236 verses in clear Uthmani script with right-to-left layout, comfortable typography, English translations, and adjustable font sizing.",
    iconName: "BookOpen"
  },
  {
    id: "mushaf-view",
    title: "Mushaf Page View",
    category: "Quran",
    badge: "604 Pages",
    description: "Experience the traditional printed Madinah Mushaf with ornate Islamic borders, continuous justified calligraphy, Eastern Arabic numbering, and Juz & Manzil indicators.",
    iconName: "BookMarked"
  },
  {
    id: "quran-audio",
    title: "Verse Audio & Reciters",
    category: "Quran",
    badge: "Background Play",
    description: "Listen to high-quality recitations by Mishary Alafasy, Abdul Basit, Saad Al-Ghamdi, and Abdur-Rahman As-Sudais with background service and lock screen controls.",
    iconName: "Headphones"
  },
  {
    id: "prayer-times",
    title: "Smarter Prayer Times",
    category: "Worship",
    badge: "Live Countdown",
    description: "Astronomical on-device calculations supporting 7 international methods (MWL, ISNA, Egypt, Makkah, etc.) and Shafi'i/Hanafi juristics with live Adhan countdown.",
    iconName: "Clock"
  },
  {
    id: "qibla-compass",
    title: "Qibla Direction",
    category: "Worship",
    badge: "Haptic Feedback",
    description: "Sensor-powered 3D rotation compass displaying precise bearing to the Holy Kaaba, distance in kilometers, sensor calibration guide, and alignment vibration.",
    iconName: "Compass"
  },
  {
    id: "monthly-timetable",
    title: "Monthly Prayer Timetable",
    category: "Worship",
    badge: "30-Day Grid",
    description: "Access an entire month's calculated prayer timings for your location with current day highlighted, ideal for travel and monthly planning.",
    iconName: "CalendarDays"
  },
  {
    id: "duas-adhkar",
    title: "Authentic Duas & Adhkar",
    category: "Knowledge",
    badge: "18 Categories",
    description: "Over 60 authentic supplications for morning, evening, protection, forgiveness, and daily life with Arabic text, transliteration, English translation, and references.",
    iconName: "Heart"
  },
  {
    id: "hadith-library",
    title: "Hadith Collections",
    category: "Knowledge",
    badge: "Classified",
    description: "Explore authentic Prophetic traditions categorized by core subjects of faith, character, worship, and daily conduct.",
    iconName: "Scroll"
  },
  {
    id: "tafsir-wbw",
    title: "Tafsir & Word-by-Word",
    category: "Quran",
    badge: "Exegesis",
    description: "Deepen understanding with verse-level commentary from Tafsir Ibn Kathir and Tafsir Al-Jalalayn, alongside word-by-word grammatical breakdowns.",
    iconName: "Layers"
  },
  {
    id: "ramadan-fasting",
    title: "Ramadan & Fasting Tracker",
    category: "Worship",
    badge: "Suhoor & Iftar",
    description: "Daily fasting tracking, Suhoor and Iftar time alerts, Ramadan progress counter, and fasting streaks.",
    iconName: "Moon"
  },
  {
    id: "zakat-calculator",
    title: "Zakat Calculator",
    category: "Tools",
    badge: "Nisab Sourcing",
    description: "Calculate obligatory Zakat on gold, silver, cash, bank savings, business inventory, and investments with deductible liabilities.",
    iconName: "Calculator"
  },
  {
    id: "global-search",
    title: "High-Relevance Search",
    category: "Tools",
    badge: "Universal",
    description: "Instant debounced search across all 114 Surahs, Duas, Hadith collections, and Islamic Stories with support for common transliterations.",
    iconName: "Search"
  },
  {
    id: "daily-progress",
    title: "Daily Progress & Streaks",
    category: "Tools",
    badge: "Local DB",
    description: "Track your daily listening minutes, Ayahs read, and prayers completed stored securely in an offline Room database on your device.",
    iconName: "TrendingUp"
  },
  {
    id: "bookmarks-system",
    title: "Bookmarks & Saved Verses",
    category: "Tools",
    badge: "Quick Access",
    description: "Save your favorite Ayahs with one tap. Access all bookmarked verses anytime with one-touch navigation directly to the Quran reader.",
    iconName: "Bookmark"
  }
];

export interface AppScreenshot {
  id: string;
  title: string;
  subtitle: string;
  category: "Home" | "Quran" | "Worship" | "Trackers" | "Tools";
  image: string;
}

export const APP_SCREENSHOTS: AppScreenshot[] = [
  {
    id: "home",
    title: "Home Dashboard",
    subtitle: "Real-time next prayer countdown, daily ayah inspiration, and fast access shortcuts",
    category: "Home",
    image: "/screenshots/home.jpg"
  },
  {
    id: "quran-card",
    title: "Quran Ayah View",
    subtitle: "Modern card-based recitation with translations, Word-by-Word, Tafsir, and audio controls",
    category: "Quran",
    image: "/screenshots/quran_ayah_view.jpg"
  },
  {
    id: "mushaf-page",
    title: "Traditional Mushaf View",
    subtitle: "604-page printed Madinah Mushaf experience with ornate borders, headers, and continuous script",
    category: "Quran",
    image: "/screenshots/mushaf_page_view.jpg"
  },
  {
    id: "prayer-qibla",
    title: "Prayer Times & Qibla",
    subtitle: "Astronomical Adhan timings, sensor-driven Kaaba compass, and calibration guidance",
    category: "Worship",
    image: "/screenshots/prayer_qibla.jpg"
  },
  {
    id: "worship-dashboard",
    title: "Worship & Habit Tracking",
    category: "Trackers",
    subtitle: "Monitor daily prayers prayed, fasting streaks, and Quran reading consistency",
    image: "/screenshots/worship.jpg"
  },
  {
    id: "ramadan",
    title: "Ramadan Tracker",
    category: "Trackers",
    subtitle: "Suhoor & Iftar countdowns, fasting logs, and special Ramadan invocations",
    image: "/screenshots/ramadan.jpg"
  },
  {
    id: "zakat",
    title: "Zakat Calculator",
    category: "Tools",
    subtitle: "Clear financial asset breakdowns and Nisab threshold calculations",
    image: "/screenshots/zakat.jpg"
  },
  {
    id: "hadith",
    title: "Hadith & Daily Sunnah",
    category: "Worship",
    subtitle: "Authentic Prophetic traditions with source references and categorized topics",
    image: "/screenshots/hadith.jpg"
  },
  {
    id: "ai-qa",
    title: "Islamic Knowledge Assistant",
    category: "Tools",
    subtitle: "Quick answers to foundational Islamic questions grounded in authentic sources",
    image: "/screenshots/ai_qa.jpg"
  },
  {
    id: "more-menu",
    title: "More Features & Customization",
    category: "Tools",
    subtitle: "Themes (Light, Dark, AMOLED, Reading), settings, and bookmarks management",
    image: "/screenshots/more_menu.jpg"
  }
];

export const FAQS = [
  {
    question: "How do I download and install Islamic World on my Android device?",
    answer: "Click the 'Download APK' button on this website to download the official signed APK file. Once downloaded, tap the file in your notification bar or Downloads folder. If Android displays an installation warning for outside-store apps, tap 'Settings' and enable 'Allow from this source', then tap 'Install'. The entire app will be installed in seconds."
  },
  {
    question: "Why does Android display a warning when installing the APK?",
    answer: "Android shows a standard security prompt whenever an application is installed directly from a web browser rather than through Google Play. This is normal Android behavior. Our APK is digitally signed by the developer using our official release key, contains zero malware or trackers, and is distributed directly to give you the fastest, ad-free experience."
  },
  {
    question: "Which Android versions are supported?",
    answer: "Islamic World requires Android 7.0 (Nougat, API 24) or newer, and is fully optimized for Android 14 and Android 15 (API 35). It works on smartphones and tablets from Samsung, Google Pixel, Xiaomi, OnePlus, Motorola, and other Android manufacturers."
  },
  {
    question: "How do I verify the APK file's authenticity and integrity?",
    answer: "You can verify the SHA-256 checksum of your downloaded APK against our official published hash: 89894A325A4843795548D267F53C6B07BC49AF02E294B3BC561F6D4778942965. On Windows, run: certutil -hashfile Islamic-World-v1.2.1.apk SHA256. On Mac/Linux, run: shasum -a 256 Islamic-World-v1.2.1.apk."
  },
  {
    question: "Is Islamic World completely free and ad-free?",
    answer: "Yes, Islamic World is 100% free with no subscription, no hidden fees, and zero intrusive advertisements. The application is built as a pure, distraction-free companion for daily worship."
  },
  {
    question: "Does the app work offline without internet?",
    answer: "Yes! All Quran Arabic text, English translations, authentic Duas, Hadith collections, offline astronomical prayer calculation formulas, and compass navigation work 100% offline. Internet is only required when streaming audio recitations for the first time."
  },
  {
    question: "What is the difference between Ayah View and Mushaf Page View?",
    answer: "Ayah View is a modern card-based interface displaying individual verses with English translation, Tafsir dialogs, Word-by-Word analysis, and bookmarks. Mushaf Page View is a traditional printed book layout matching the authentic 604-page Madinah Mushaf with classical borders, headers, continuous justified calligraphy, and swipe page navigation."
  },
  {
    question: "How are the prayer times calculated?",
    answer: "Prayer times are calculated on-device using trusted astronomical algorithms based on your GPS coordinates or chosen city. You can choose from 7 calculation authorities (Muslim World League, ISNA, Egyptian General Authority, Umm Al-Qura Makkah, University of Islamic Sciences Karachi, Tehran, and Jafari) and select Shafi'i/Standard or Hanafi Asr juristic timings."
  },
  {
    question: "How do I update to future versions of Islamic World?",
    answer: "Whenever a new version is released, simply download the latest APK from this official website and install it. Android will update the application smoothly while preserving all your bookmarks, settings, and daily progress records."
  },
  {
    question: "Where can I report feedback or suggestions?",
    answer: "You can reach out to the developer directly through the contact details listed in the app's About screen (Ubaid Bilal) or via the official developer repository."
  }
];

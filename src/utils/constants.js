// Application constants
export const APP_CONSTANTS = {
  // Map dimensions
  MAP_HEIGHT: "600px",

  // Colors using CSS custom properties (fallback to Tailwind config)
  COLORS: {
    RICH_BLACK: "var(--color-rich-black, #073b3a)",
    VIVID_BLUE: "var(--color-vivid-blue, #44ccff)",
    COMPLIMENT_VIVID_BLUE: "var(--color-compliment-vivid-blue, #6fa3c7)",
    MINION_YELLOW: "var(--color-minion-yellow, #ffe347)",
    COPYRIGHT_GRAY: "var(--color-copyright-gray, #888888)",
    SUBTEXT_GRAY: "var(--color-subtext-gray, #adadad)",
  },

  // Fallback hex values (matching Tailwind config)
  // COLORS_HEX: {
  //   RICH_BLACK: "#073b3a",
  //   VIVID_BLUE: "#44ccff",
  //   MINION_YELLOW: "#ffe347",
  //   COPYRIGHT_GRAY: "#888888",
  //   SUBTEXT_GRAY: "#adadad",
  // },

  // Months for date formatting
  MONTHS: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],

  // Category mappings for display
  CATEGORY_DISPLAY_NAMES: {
    "national park": "National Park",
    "natural wonders": "Natural Wonder",
    city: "City",
    entertainment: "Entertainment",
  },

  // Default values
  DEFAULTS: {
    FAR_FUTURE_DATE: new Date(9999, 11, 31),
    UNKNOWN_VISIT: "Not specified",
  },

  // Leaflet CDN URLs
  LEAFLET_CDN: {
    ICON_RETINA:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    ICON: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    SHADOW:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  },
}

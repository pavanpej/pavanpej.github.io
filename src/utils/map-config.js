// Map configuration for USA travel map
export const MAP_CONFIG = {
  // Center of USA
  center: [39.8283, -98.5795],

  // USA bounds to constrain the map with some padding
  bounds: {
    southwest: [22.396308, -127.0], // Southwest (slightly expanded)
    northeast: [51.384358, -64.93457], // Northeast (slightly expanded)
  },

  // Map zoom settings
  zoom: {
    default: 4,
    min: 3,
    max: 8,
  },

  // Tile layer configuration
  tileLayer: {
    url: "https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png",
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },

  // Marker configuration
  marker: {
    size: 16,
    borderWidth: 2,
    shadow: "0 2px 4px rgba(0,0,0,0.3)",
  },
}

// Helper function to create map bounds
export const createMapBounds = L => {
  return L.latLngBounds(
    MAP_CONFIG.bounds.southwest,
    MAP_CONFIG.bounds.northeast,
  )
}

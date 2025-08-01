// Visited places data (no need to add IDs manually)
export const visitedPlacesData = [
  {
    name: "Boston",
    state: "Massachusetts",
    coordinates: [42.3601, -71.0589],
    visits: [
      { year: "2023", month: "September" },
      { year: "2024" },
      { year: "2025" },
    ],
    description: "Studied at Northeastern University from 2023-2025",
    categories: ["city"],
  },
  {
    name: "Worcester",
    state: "Massachusetts",
    coordinates: [42.2626, -71.8023],
    visits: [{ year: "2024", month: "December" }],
    description: "Second largest city in New England",
    categories: ["city"],
  },
  {
    name: "New York City",
    state: "New York",
    coordinates: [40.7128, -74.006],
    visits: [
      { year: "2023", month: "December" },
      { year: "2024", month: "January" },
      { year: "2024", month: "November" },
      { year: "2025", month: "January" },
      { year: "2025", month: "May" },
    ],
    description: "The Big Apple - visited multiple times for various reasons",
    categories: ["city"],
  },
  {
    name: "Niagara Falls",
    state: "New York",
    coordinates: [43.0962, -79.0377],
    visits: [{ year: "2024", month: "March" }],
    description: "Famous waterfalls on the border with Canada",
    categories: ["natural wonders"],
  },
  {
    name: "Seattle",
    state: "Washington",
    coordinates: [47.6062, -122.3321],
    visits: [
      { year: "2024", month: "May" },
      { year: "2025", month: "May" },
    ],
    description: "Emerald City in the Pacific Northwest",
    categories: ["city"],
  },
  {
    name: "Chicago",
    state: "Illinois",
    coordinates: [41.8781, -87.6298],
    visits: [{ year: "2024", month: "September" }],
    description: "Windy City on Lake Michigan",
    categories: ["city"],
  },
  {
    name: "Stowe",
    state: "Vermont",
    coordinates: [44.4654, -72.6874],
    visits: [{ year: "2024", month: "October" }],
    description: "Charming ski town in Vermont",
    categories: ["city"],
  },
  {
    name: "Ludlow",
    state: "Vermont",
    coordinates: [43.3959, -72.7018],
    visits: [{ year: "2024", month: "October" }],
    description: "Small town in southern Vermont",
    categories: ["city"],
  },
  {
    name: "Kancamagus Pass",
    state: "New Hampshire",
    coordinates: [44.0334, -71.3865],
    visits: [
      { year: "2024", month: "October" },
      { year: "2024", month: "December" },
    ],
    description: "Scenic mountain pass in the White Mountains",
    categories: ["natural wonders"],
  },
  {
    name: "Acadia National Park",
    state: "Maine",
    coordinates: [44.3386, -68.2733],
    visits: [
      { year: "2024", month: "October" },
      { year: "2025", month: "May" },
    ],
    description: "Beautiful coastal national park",
    categories: ["national park"],
  },
  {
    name: "Portland",
    state: "Maine",
    coordinates: [43.6591, -70.2568],
    visits: [{ year: "2025", month: "May" }],
    description: "Largest city in Maine",
    categories: ["city"],
  },
  {
    name: "Cedar Rapids",
    state: "Iowa",
    coordinates: [41.9779, -91.6656],
    visits: [{ year: "2024", month: "December" }],
    description: "Second largest city in Iowa",
    categories: ["city"],
  },
  {
    name: "San Francisco",
    state: "California",
    coordinates: [37.7749, -122.4194],
    visits: [{ year: "2024", month: "July" }],
    description: "Golden Gate City in Northern California",
    categories: ["city"],
  },
  {
    name: "Los Angeles",
    state: "California",
    coordinates: [34.0522, -118.2437],
    visits: [{ year: "2024", month: "July" }],
    description: "City of Angels in Southern California",
    categories: ["city"],
  },
  {
    name: "San Jose",
    state: "California",
    coordinates: [37.3382, -121.8863],
    visits: [{ year: "2024", month: "July" }],
    description: "Heart of Silicon Valley",
    categories: ["city"],
  },
  {
    name: "Santa Clara",
    state: "California",
    coordinates: [37.3541, -121.9552],
    visits: [{ year: "2024", month: "July" }],
    description: "Home to many tech companies",
    categories: ["city"],
  },
  {
    name: "Leavenworth",
    state: "Washington",
    coordinates: [47.5962, -120.6615],
    visits: [{ year: "2024", month: "June" }],
    description: "Bavarian-themed town in the Cascade Mountains",
    categories: ["city"],
  },
  {
    name: "Tacoma",
    state: "Washington",
    coordinates: [47.2529, -122.4443],
    visits: [
      { year: "2024", month: "May" },
      { year: "2025", month: "May" },
    ],
    description: "City of Destiny in Washington",
    categories: ["city"],
  },
  {
    name: "New Haven",
    state: "Connecticut",
    coordinates: [41.3083, -72.9279],
    visits: [{ year: "2024", month: "November" }],
    description: "Home to Yale University",
    categories: ["city"],
  },
  {
    name: "Jersey City",
    state: "New Jersey",
    coordinates: [40.7178, -74.0431],
    visits: [{ year: "2025", month: "January" }],
    description: "Across the Hudson from Manhattan",
    categories: ["city"],
  },
  {
    name: "Farmington",
    state: "Connecticut",
    coordinates: [41.7195, -72.832],
    visits: [{ year: "2025", month: "May" }],
    description: "Suburban town in Connecticut",
    categories: ["city"],
  },
  {
    name: "Newport",
    state: "Rhode Island",
    coordinates: [41.4901, -71.3128],
    visits: [{ year: "2024", month: "December" }],
    description: "Historic seaside city with mansions",
    categories: ["city"],
  },
  {
    name: "Providence",
    state: "Rhode Island",
    coordinates: [41.824, -71.4128],
    visits: [{ year: "2024", month: "December" }],
    description: "Capital and largest city of Rhode Island",
    categories: ["city"],
  },
  {
    name: "Provincetown",
    state: "Massachusetts",
    coordinates: [42.0587, -70.1787],
    visits: [{ year: "2024", month: "October" }],
    description: "Artistic community at the tip of Cape Cod",
    categories: ["city"],
  },
  {
    name: "Miami",
    state: "Florida",
    coordinates: [25.7617, -80.1918],
    visits: [{ year: "2024", month: "December" }],
    description: "Magic City in South Florida",
    categories: ["city"],
  },
  {
    name: "Key West",
    state: "Florida",
    coordinates: [24.5551, -81.78],
    visits: [{ year: "2024", month: "December" }],
    description: "Southernmost point in the continental US",
    categories: ["city"],
  },
  {
    name: "Dallas",
    state: "Texas",
    coordinates: [32.7767, -96.797],
    visits: [{ year: "2024", month: "March" }],
    description: "Big D in North Texas",
    categories: ["city"],
  },
  {
    name: "Austin",
    state: "Texas",
    coordinates: [30.2672, -97.7431],
    visits: [{ year: "2024", month: "March" }],
    description: "Live Music Capital of the World",
    categories: ["city"],
  },
  {
    name: "San Antonio",
    state: "Texas",
    coordinates: [29.4241, -98.4936],
    visits: [{ year: "2024", month: "March" }],
    description: "Home of the Alamo",
    categories: ["city"],
  },
  {
    name: "Houston",
    state: "Texas",
    coordinates: [29.7604, -95.3698],
    visits: [{ year: "2024", month: "March" }],
    description: "Space City in Southeast Texas",
    categories: ["city"],
  },
  {
    name: "Indiana Dunes National Park",
    state: "Indiana",
    coordinates: [41.6533, -87.0528],
    visits: [{ year: "2024", month: "September" }],
    description: "Lake Michigan shoreline with sand dunes",
    categories: ["national park"],
  },
  {
    name: "Raleigh",
    state: "North Carolina",
    coordinates: [35.7796, -78.6382],
    visits: [{ year: "2025", month: "March" }],
    description: "Capital of North Carolina",
    categories: ["city"],
  },
  {
    name: "Asheville",
    state: "North Carolina",
    coordinates: [35.5951, -82.5515],
    visits: [{ year: "2025", month: "March" }],
    description: "Artistic mountain city in the Blue Ridge",
    categories: ["city"],
  },
  {
    name: "Washington DC",
    state: "District of Columbia",
    coordinates: [38.9072, -77.0369],
    visits: [{ year: "2025", month: "March" }],
    description: "Nation's capital",
    categories: ["city"],
  },
  {
    name: "Pigeon Forge",
    state: "Tennessee",
    coordinates: [35.7884, -83.5543],
    visits: [{ year: "2025", month: "March" }],
    description: "Gateway to the Great Smoky Mountains",
    categories: ["city"],
  },
  {
    name: "Buffalo",
    state: "New York",
    coordinates: [42.8864, -78.8784],
    visits: [{ year: "2024", month: "March" }],
    description: "City of Good Neighbors on Lake Erie",
    categories: ["city"],
  },
  {
    name: "Key Largo",
    state: "Florida",
    coordinates: [25.0865, -80.4473],
    visits: [{ year: "2024", month: "December" }],
    description: "First of the Florida Keys",
    categories: ["city"],
  },
  {
    name: "Olympic National Park",
    state: "Washington",
    coordinates: [47.8021, -123.6044],
    visits: [
      { year: "2024", month: "August" },
      { year: "2025", month: "June" },
    ],
    description: "Diverse ecosystems from mountains to rainforest to coast",
    categories: ["national park"],
  },
  {
    name: "Mount Rainier National Park",
    state: "Washington",
    coordinates: [46.8797, -121.7269],
    visits: [{ year: "2024", month: "August" }],
    description: "Iconic volcano and surrounding wilderness",
    categories: ["national park"],
  },
  {
    name: "Biscayne National Park",
    state: "Florida",
    coordinates: [25.4823, -80.2103],
    visits: [{ year: "2024", month: "December" }],
    description: "95% underwater park protecting coral reefs",
    categories: ["national park"],
  },
  {
    name: "Everglades National Park",
    state: "Florida",
    coordinates: [25.2866, -80.8987],
    visits: [{ year: "2024", month: "December" }],
    description: "River of Grass - unique wetland ecosystem",
    categories: ["national park"],
  },
  {
    name: "Great Smoky Mountains National Park",
    state: "Tennessee",
    coordinates: [35.6118, -83.5496],
    visits: [{ year: "2024", month: "March" }],
    description: "America's most visited national park",
    categories: ["national park"],
  },
  {
    name: "North Cascades National Park",
    state: "Washington",
    coordinates: [48.7716, -121.2985],
    visits: [{ year: "2025", month: "June" }],
    description: "Alpine wilderness with jagged peaks",
    categories: ["national park"],
  },
]

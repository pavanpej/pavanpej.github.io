import { APP_CONSTANTS } from "./constants"

// Helper function to convert month name to index
export const getMonthIndex = month => {
  return APP_CONSTANTS.MONTHS.indexOf(month)
}

// Helper function to get the earliest visit date for sorting
export const getEarliestVisit = visits => {
  if (!visits || visits.length === 0) {
    return APP_CONSTANTS.DEFAULTS.FAR_FUTURE_DATE
  }

  const earliestVisit = visits.reduce((earliest, visit) => {
    if (!visit.year) return earliest

    const visitDate = new Date(
      parseInt(visit.year),
      visit.month ? getMonthIndex(visit.month) : 0,
      1,
    )
    const earliestDate = new Date(
      parseInt(earliest.year),
      earliest.month ? getMonthIndex(earliest.month) : 0,
      1,
    )
    return visitDate < earliestDate ? visit : earliest
  })

  return new Date(
    parseInt(earliestVisit.year),
    earliestVisit.month ? getMonthIndex(earliestVisit.month) : 0,
    1,
  )
}

// Helper function to format visits for display
export const formatVisits = visits => {
  if (!visits || visits.length === 0) {
    return APP_CONSTANTS.DEFAULTS.UNKNOWN_VISIT
  }

  if (visits.length === 1) {
    const [visit] = visits
    return visit.month ? `${visit.month} ${visit.year}` : visit.year
  }

  return visits
    .map(visit => (visit.month ? `${visit.month} ${visit.year}` : visit.year))
    .join(", ")
}

// Process the data: add IDs and sort chronologically
export const processTravelData = placesData => {
  if (!Array.isArray(placesData)) return []

  return placesData
    .map(place => ({
      ...place,
      id: `${place.name.toLowerCase().replace(/\s+/g, "-")}-${place.state.toLowerCase().replace(/\s+/g, "-")}`,
    }))
    .sort((a, b) => {
      const dateA = getEarliestVisit(a.visits)
      const dateB = getEarliestVisit(b.visits)
      return dateA.getTime() - dateB.getTime() // Sort from earliest to latest
    })
}

// Get unique states from visited places
export const getUniqueStates = places => {
  if (!Array.isArray(places)) return []
  return [...new Set(places.map(place => place.state).filter(Boolean))]
}

// Get all unique years from visits
export const getUniqueYears = places => {
  if (!Array.isArray(places)) return []
  return [
    ...new Set(
      places.flatMap(place =>
        place.visits
          ? place.visits.map(visit => visit.year).filter(Boolean)
          : [],
      ),
    ),
  ]
}

// Count national parks
export const countNationalParks = places => {
  if (!Array.isArray(places)) return 0
  return places.filter(
    place =>
      Array.isArray(place.categories) &&
      place.categories.includes("national park"),
  ).length
}

// Group places by category for better organization
export const groupPlacesByCategory = places => {
  if (!Array.isArray(places)) return {}

  return places.reduce((acc, place) => {
    const categories = Array.isArray(place.categories) ? place.categories : []
    categories.forEach(category => {
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push(place)
    })
    return acc
  }, {})
}

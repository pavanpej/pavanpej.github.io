import { useState, useMemo, useRef, useEffect } from "react"
import {
  MAP_CONFIG,
  createMapBounds,
  getUniqueStates,
  countNationalParks,
  APP_CONSTANTS,
  useMapLoader,
} from "../../utils"
import InfoPanel from "./InfoPanel"

// Loading state component
const LoadingState = () => (
  <div
    className="w-full rounded-lg overflow-hidden relative bg-rich-black flex items-center justify-center"
    style={{ height: APP_CONSTANTS.MAP_HEIGHT }}
  >
    <div className="text-minion-yellow">Loading the map...</div>
  </div>
)

// Error state component
const ErrorState = ({ error }) => (
  <div
    className="w-full rounded-lg overflow-hidden relative bg-rich-black flex items-center justify-center"
    style={{ height: APP_CONSTANTS.MAP_HEIGHT }}
  >
    <div className="text-center w-full max-w-md px-4 sm:px-6">
      <div className="mb-4">
        <i className="fas fa-exclamation-triangle text-xl text-red-400"></i>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-minion-yellow mb-2">
          The map failed to load.
        </h3>
        <p className="text-gray-400 text-sm">
          {error || "An error occurred while loading the map. You can try again or refresh the page."}
        </p>
      </div>
      <div className="mb-4">
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-vivid-blue text-rich-black rounded hover:bg-blue-500 transition-colors text-sm font-medium"
        >
          Try Again
        </button>
      </div>
    </div>
  </div>
)



/**
 * Interactive USA travel map component
 * Displays visited places as markers on a map with popup information
 *
 * @param {Object} props - Component props
 * @param {Array<Object>} props.places - Array of place objects with coordinates, visits, and metadata
 * @param {string} props.places[].name - Name of the place
 * @param {string} props.places[].state - State where the place is located
 * @param {[number, number]} props.places[].coordinates - Latitude and longitude coordinates
 * @param {Array<Object>} props.places[].visits - Array of visit objects
 * @param {string} props.places[].visits[].year - Year of visit
 * @param {string} [props.places[].visits[].month] - Month of visit (optional)
 * @param {string} props.places[].description - Description of the place
 * @param {Array<string>} props.places[].categories - Array of categories
 * @returns {JSX.Element} The map component
 */
const USAMap = ({ places }) => {
  const [selectedPlace, setSelectedPlace] = useState(null)
  const [visibleMarkers, setVisibleMarkers] = useState(places)
  const [mapZoom, setMapZoom] = useState(MAP_CONFIG.zoom.default)
  const mapRef = useRef(null)
  const { isClient, mapComponents, error } = useMapLoader()

  // Memoize expensive calculations to prevent unnecessary recalculations
  const mapStats = useMemo(() => {
    if (!mapComponents?.L) {
      return {
        bounds: null,
        visitedStates: getUniqueStates(places),
        nationalParks: countNationalParks(places)
      }
    }
    return {
      bounds: createMapBounds(mapComponents.L),
      visitedStates: getUniqueStates(places),
      nationalParks: countNationalParks(places)
    }
  }, [mapComponents?.L, places])

  const { bounds: usaBounds, visitedStates, nationalParks } = mapStats

  // Helper function to create marker icons
  const createMarkerIcon = (L, backgroundColor, borderColor, className = "custom-marker") => {
    return L.divIcon({
      className,
      html: `<div style="
        width: ${MAP_CONFIG.marker.size}px; 
        height: ${MAP_CONFIG.marker.size}px; 
        background-color: ${backgroundColor}; 
        border: ${MAP_CONFIG.marker.borderWidth}px solid ${borderColor}; 
        border-radius: 50%; 
        display: flex; 
        align-items: center; 
        justify-content: center;
        box-shadow: ${MAP_CONFIG.marker.shadow};
        cursor: pointer;
      "></div>`,
      iconSize: [MAP_CONFIG.marker.size, MAP_CONFIG.marker.size],
      iconAnchor: [MAP_CONFIG.marker.size / 2, MAP_CONFIG.marker.size / 2],
      popupAnchor: [0, -MAP_CONFIG.marker.size / 2],
    })
  }

  // Memoize the custom marker icons
  const markerIcons = useMemo(() => {
    if (!mapComponents?.L) return { default: null, selected: null }
    
    return {
      default: createMarkerIcon(
        mapComponents.L,
        APP_CONSTANTS.COLORS.VIVID_BLUE,
        APP_CONSTANTS.COLORS.COMPLIMENT_VIVID_BLUE,
        "custom-marker"
      ),
      selected: createMarkerIcon(
        mapComponents.L,
        APP_CONSTANTS.COLORS.MINION_YELLOW,
        APP_CONSTANTS.COLORS.VIVID_BLUE,
        "custom-marker selected"
      )
    }
  }, [mapComponents?.L])

  // Helper to filter visible markers based on map bounds
  const filterVisibleMarkers = (map, allPlaces) => {
    if (!map) return allPlaces
    const bounds = map.getBounds()
    return allPlaces.filter(place => {
      const [lat, lng] = place.coordinates
      return bounds.contains([lat, lng])
    })
  }

  // Update visible markers on map move/zoom
  useEffect(() => {
    if (!mapRef.current) return
    const map = mapRef.current
    const updateMarkers = () => {
      setVisibleMarkers(filterVisibleMarkers(map, places))
      setMapZoom(map.getZoom())
    }
    map.on('moveend', updateMarkers)
    map.on('zoomend', updateMarkers)
    // Initial update
    updateMarkers()
    return () => {
      map.off('moveend', updateMarkers)
      map.off('zoomend', updateMarkers)
    }
  }, [places, filterVisibleMarkers, mapComponents])

  // Cleanup logic for map instance (if needed)
  useEffect(() => {
    return () => {
      if (mapRef.current && mapRef.current.remove) {
        mapRef.current.remove()
      }
    }
  }, [])

  // Don't render anything on server-side
  if (!isClient) {
    return <LoadingState />
  }

  // Show error state
  if (error) {
    return <ErrorState error={error} />
  }

  // Show loading state while map components are loading
  if (!mapComponents) {
    return <LoadingState />
  }

  const { L, MapContainer, TileLayer, Marker } = mapComponents

  return (
    <div
      className="w-full rounded-lg overflow-hidden relative"
      style={{ height: APP_CONSTANTS.MAP_HEIGHT }}
    >
      {/* Progressive enhancement - fallback for users with JavaScript disabled */}
      <noscript>
        <div className="w-full h-full bg-rich-black border border-vivid-blue rounded-lg p-6 flex items-center justify-center">
          <div className="text-center max-w-md">
            <div className="text-minion-yellow mb-4">
              <i className="fas fa-map text-2xl mb-2" aria-hidden="true"></i>
              <p className="text-sm font-medium">Interactive map requires JavaScript</p>
            </div>
            <p className="text-xs text-gray-400 mb-4">
              Here's a summary of visited places:
            </p>
            <div className="text-xs text-gray-300 space-y-1">
              <p><strong>States visited:</strong> {visitedStates.length}</p>
              <p><strong>Places visited:</strong> {places.length}</p>
              <p><strong>National parks:</strong> {nationalParks}</p>
            </div>
          </div>
        </div>
      </noscript>

      <MapContainer
        center={MAP_CONFIG.center}
        zoom={MAP_CONFIG.zoom.default}
        style={{ height: "100%", width: "100%" }}
        bounds={usaBounds || undefined}
        className="z-0"
        minZoom={MAP_CONFIG.zoom.min}
        maxZoom={MAP_CONFIG.zoom.max}
        maxBounds={usaBounds || undefined}
        maxBoundsViscosity={1.0}
        aria-label="Interactive map of visited places in the United States"
        role="application"
        tabIndex={0}
        whenCreated={mapInstance => { mapRef.current = mapInstance }}
      >
        {/* Base map tiles */}
        <TileLayer
          attribution={MAP_CONFIG.tileLayer.attribution}
          url={MAP_CONFIG.tileLayer.url}
        />

        {/* Marker rendering */}
        {visibleMarkers.map(place => {
          const isSelected = selectedPlace?.id === place.id
          const icon = isSelected ? markerIcons.selected : markerIcons.default
          return (
            <Marker
              key={place.id}
              position={place.coordinates}
              icon={icon}
              eventHandlers={{
                click: () => {
                  setSelectedPlace(selectedPlace?.id === place.id ? null : place)
                },
              }}
              aria-label={`${place.name}, ${place.state} - Click to view details`}
            />
          )
        })}
      </MapContainer>
      
      {/* Fixed Info Panel */}
      <InfoPanel 
        place={selectedPlace} 
        onClose={() => setSelectedPlace(null)} 
      />
    </div>
  )
}

export default USAMap

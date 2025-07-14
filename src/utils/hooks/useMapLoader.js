import { useEffect, useState } from "react"
import { APP_CONSTANTS } from "../constants"

export const useMapLoader = () => {
  const [isClient, setIsClient] = useState(false)
  const [mapComponents, setMapComponents] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsClient(true)

    const loadMapComponents = async () => {
      try {
        const L = await import("leaflet")
        const { MapContainer, TileLayer, Marker, Popup } = await import(
          "react-leaflet"
        )

        // Fix for default markers in react-leaflet
        delete L.default.Icon.Default.prototype._getIconUrl
        L.default.Icon.Default.mergeOptions({
          iconRetinaUrl: APP_CONSTANTS.LEAFLET_CDN.ICON_RETINA,
          iconUrl: APP_CONSTANTS.LEAFLET_CDN.ICON,
          shadowUrl: APP_CONSTANTS.LEAFLET_CDN.SHADOW,
        })

        setMapComponents({
          L: L.default,
          MapContainer,
          TileLayer,
          Marker,
          Popup,
        })
      } catch (err) {
        // Log the actual error for debugging
        console.error("Map loading error:", err)
        
        // Provide more specific error messages
        let errorMessage = "Failed to load map. Please refresh the page."
        
        if (err.message?.includes("leaflet")) {
          errorMessage = "Failed to load map library. Please check your internet connection and refresh."
        } else if (err.message?.includes("react-leaflet")) {
          errorMessage = "Failed to load map components. Please refresh the page."
        } else if (err.message?.includes("network") || err.message?.includes("fetch")) {
          errorMessage = "Network error loading map. Please check your internet connection."
        }
        
        setError(errorMessage)
      }
    }

    loadMapComponents()
  }, [])

  return { isClient, mapComponents, error }
}

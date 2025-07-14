import { APP_CONSTANTS, formatVisits } from "../../utils"

// Format categories for display
const formatCategories = place => {
  const categories = Array.isArray(place.categories)
    ? place.categories
    : [place.category]
  return categories
    .map(cat => APP_CONSTANTS.CATEGORY_DISPLAY_NAMES[cat] || cat)
    .join(", ")
}

const InfoPanel = ({ place, onClose }) => {
  if (!place) return null

  return (
    <div className="info-panel">
      <div
        className="info-panel-content"
        role="dialog"
        aria-label={`Information about ${place.name}`}
      >
        <div className="info-panel-header">
          <h3
            className="text-lg font-bold text-minion-yellow"
            id={`panel-title-${place.id}`}
          >
            {place.name}
          </h3>
          <button
            onClick={onClose}
            className="info-panel-close"
            aria-label="Close information panel"
          >
            <i className="fas fa-times text-sm" aria-hidden="true"></i>
            {/* The following is a hardcoded unicode close button */}
            {/* × */}
          </button>
        </div>

        <div
          className="flex flex-col space-y-1 text-xs"
          role="region"
          aria-labelledby={`panel-title-${place.id}`}
        >
          <span className="text-gray-300">
            <span className="text-gray-400">State:</span> {place.state}
          </span>
          <span className="text-gray-300">
            <span className="text-gray-400">Type:</span>{" "}
            {formatCategories(place)}
          </span>
          <span className="text-gray-300">
            <span className="text-gray-400">Visited:</span>{" "}
            {formatVisits(place.visits)}
          </span>
          {/* TODO: Add description when the descriptions make more sense */}
          {/* <span className="text-gray-300 mt-2 text-xs leading-relaxed">
            {place.description}
          </span> */}
        </div>
      </div>
    </div>
  )
}

export default InfoPanel

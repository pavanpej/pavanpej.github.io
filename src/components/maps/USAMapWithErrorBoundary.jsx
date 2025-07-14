import ErrorBoundary from "../errors/ErrorBoundary.jsx"
import USAMap from "./USAMap.jsx"

// This wrapper component combines ErrorBoundary and USAMap
// into a single client component to avoid Astro hydration issues
const USAMapWithErrorBoundary = props => {
  return (
    <ErrorBoundary>
      <USAMap {...props} />
    </ErrorBoundary>
  )
}

export default USAMapWithErrorBoundary

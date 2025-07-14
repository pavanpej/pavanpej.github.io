import { Component } from "react"
import { APP_CONSTANTS } from "../../utils"

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    // Log error to console for debugging
    console.error("ErrorBoundary caught an error:", error, errorInfo)

    // Could also log to an error reporting service here
    // Example: logErrorToService(error, errorInfo)

    this.setState({
      error,
      errorInfo
    })
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null, errorInfo: null })
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      return (
        <div className="w-full rounded-lg overflow-hidden relative bg-rich-black flex items-center justify-center border border-vivid-blue/20"
          style={{ height: this.props.height || APP_CONSTANTS.MAP_HEIGHT }}>
          <div className="text-center w-full max-w-md px-4 sm:px-6">
            <div className="mb-4">
              <i className="fas fa-exclamation-triangle text-xl text-red-400"></i>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold text-minion-yellow mb-2">
                Something went wrong
              </h3>
              <p className="text-gray-400 text-sm">
                The component encountered an error. You can try again or refresh the page.
              </p>
            </div>

            <div className="mb-4">
              <button
                onClick={this.handleRetry}
                className="px-4 py-2 bg-vivid-blue text-rich-black rounded hover:bg-blue-500 transition-colors text-sm font-medium"
              >
                Try Again
              </button>
            </div>

            {/* Development error details */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="text-xs">
                <summary className="cursor-pointer hover:text-gray-300 text-gray-500 mt-3">
                  Error Details
                </summary>
                <pre className="mt-2 px-3 py-3 bg-gray-900 rounded text-left overflow-auto max-h-32 text-gray-300 break-words whitespace-pre-wrap w-full">
                  {this.state.error.toString()}
                  {this.state.errorInfo && this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary 
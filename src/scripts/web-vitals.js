/* eslint-disable no-console -- Console used only in DEV for debugging */
/**
 * Web Vitals tracking (production only).
 */
;(async function () {
  if (typeof window === "undefined") return

  const isProduction =
    window.location.hostname !== "localhost" &&
    window.location.hostname !== "127.0.0.1" &&
    !window.location.hostname.includes("dev") &&
    !window.location.hostname.includes(".local")

  if (!isProduction) return

  try {
    const { onCLS, onFID, onFCP, onLCP, onTTFB } = await import("web-vitals")

    onCLS(metric => {
      if (import.meta.env.DEV) console.log("CLS:", metric.value)
    })
    onFID(metric => {
      if (import.meta.env.DEV) console.log("FID:", metric.value)
    })
    onFCP(metric => {
      if (import.meta.env.DEV) console.log("FCP:", metric.value)
    })
    onLCP(metric => {
      if (import.meta.env.DEV) console.log("LCP:", metric.value)
    })
    onTTFB(metric => {
      if (import.meta.env.DEV) console.log("TTFB:", metric.value)
    })
  } catch (error) {
    if (import.meta.env.DEV) {
      console.warn("Web Vitals tracking not available:", error)
    }
  }
})()

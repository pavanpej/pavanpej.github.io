/**
 * Career page filters. Uses event delegation on document.
 * Must run in layout so listener persists across ClientRouter navigations.
 */
;(function () {
  function handleCareerFilterClick(e) {
    const pill = e.target?.closest?.(".career-filter-pill")
    if (!pill) return
    const pills = document.querySelectorAll(".career-filter-pill")
    const items = document.querySelectorAll(".career-timeline-item")
    if (!pills.length || !items.length) return

    const filter = pill.getAttribute("data-filter")
    pills.forEach(p => {
      const f = p.getAttribute("data-filter")
      if (f === filter) {
        p.classList.remove("border-subtext-gray/50", "text-subtext-gray")
        p.classList.add("border-minion-yellow", "text-minion-yellow")
      } else {
        p.classList.remove("border-minion-yellow", "text-minion-yellow")
        p.classList.add("border-subtext-gray/50", "text-subtext-gray")
      }
    })
    items.forEach(item => {
      const type = item.getAttribute("data-filter-type")
      const show = filter === "all" || type === filter
      item.classList.toggle("hidden", !show)
    })
  }

  document.addEventListener("click", handleCareerFilterClick)
})()

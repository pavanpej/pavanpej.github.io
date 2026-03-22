/**
 * ImageViewer: modal for viewing full-size images. Uses event delegation.
 * Must run in layout so it works across ClientRouter content swaps.
 */
;(function () {
  let currentImageIndex = 0
  let allImages = []

  function getElements() {
    return {
      modal: document.getElementById("image-modal"),
      modalImage: document.getElementById("modal-image"),
      modalCaption: document.getElementById("modal-caption"),
      closeButton: document.querySelector(".image-modal-close"),
      prevButton: document.getElementById("prev-button"),
      nextButton: document.getElementById("next-button"),
    }
  }

  function updateImageList() {
    allImages = Array.from(document.querySelectorAll(".image-viewer-trigger"))
  }

  function updateNavButtons(prevBtn, nextBtn) {
    if (allImages.length > 1) {
      if (prevBtn) {
        prevBtn.classList.remove("opacity-0", "pointer-events-none")
        prevBtn.classList.add("opacity-100", "pointer-events-auto")
      }
      if (nextBtn) {
        nextBtn.classList.remove("opacity-0", "pointer-events-none")
        nextBtn.classList.add("opacity-100", "pointer-events-auto")
      }
    } else {
      if (prevBtn) {
        prevBtn.classList.add("opacity-0", "pointer-events-none")
        prevBtn.classList.remove("opacity-100", "pointer-events-auto")
      }
      if (nextBtn) {
        nextBtn.classList.add("opacity-0", "pointer-events-none")
        nextBtn.classList.remove("opacity-100", "pointer-events-auto")
      }
    }
  }

  function loadImageByIndex(index, el) {
    if (
      index < 0 ||
      index >= allImages.length ||
      !el.modalImage ||
      !el.modalCaption
    )
      return
    const img = allImages[index]
    const src = img.getAttribute("data-src")
    const alt = img.getAttribute("data-alt")
    if (src && alt) {
      el.modalImage.src = src
      el.modalImage.alt = alt
      el.modalCaption.textContent = alt
      currentImageIndex = index
    }
  }

  function showPrevImage() {
    const el = getElements()
    const newIndex =
      currentImageIndex > 0 ? currentImageIndex - 1 : allImages.length - 1
    loadImageByIndex(newIndex, el)
  }

  function showNextImage() {
    const el = getElements()
    const newIndex =
      currentImageIndex < allImages.length - 1 ? currentImageIndex + 1 : 0
    loadImageByIndex(newIndex, el)
  }

  function closeModal() {
    const el = getElements()
    if (el.modal) {
      el.modal.classList.add("hidden")
      el.modal.classList.remove("flex")
      document.body.style.overflow = ""
      if (
        allImages[currentImageIndex] &&
        typeof allImages[currentImageIndex].focus === "function"
      ) {
        allImages[currentImageIndex].focus()
      }
    }
  }

  function handleDocumentClick(e) {
    const { target } = e
    const el = getElements()
    if (
      target &&
      target.classList &&
      target.classList.contains("image-viewer-trigger")
    ) {
      e.preventDefault()
      updateImageList()
      currentImageIndex = allImages.findIndex(img => img === target)
      const src = target.getAttribute("data-src")
      const alt = target.getAttribute("data-alt")
      if (src && alt && el.modal && el.modalImage && el.modalCaption) {
        el.modalImage.src = src
        el.modalImage.alt = alt
        el.modalCaption.textContent = alt
        el.modal.classList.remove("hidden")
        el.modal.classList.add("flex")
        updateNavButtons(el.prevButton, el.nextButton)
        if (el.closeButton && typeof el.closeButton.focus === "function") {
          el.closeButton.focus()
        }
        document.body.style.overflow = "hidden"
      }
      return
    }
    if (target && target.closest && target.closest(".image-modal-close")) {
      e.preventDefault()
      closeModal()
      return
    }
    if (target && target.closest && target.closest("#prev-button")) {
      e.preventDefault()
      showPrevImage()
      return
    }
    if (target && target.closest && target.closest("#next-button")) {
      e.preventDefault()
      showNextImage()
      return
    }
    if (el.modal && target === el.modal) {
      closeModal()
    }
  }

  function handleKeydown(e) {
    const el = getElements()
    if (el.modal && !el.modal.classList.contains("hidden")) {
      if (e.key === "Escape") closeModal()
      else if (e.key === "ArrowLeft") {
        e.preventDefault()
        showPrevImage()
      } else if (e.key === "ArrowRight") {
        e.preventDefault()
        showNextImage()
      }
    }
  }

  document.addEventListener("click", handleDocumentClick, true)
  document.addEventListener("keydown", handleKeydown)
})()

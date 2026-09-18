document.addEventListener("DOMContentLoaded", () => {
  
  // --- MODAL LAYER MANAGEMENT ---
  const cards = document.querySelectorAll(".card");
  const modals = document.querySelectorAll(".modal-overlay");

  // Open corresponding targeted modal dynamically
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const targetModalId = card.getAttribute("data-modal-target");
      const targetModal = document.getElementById(targetModalId);
      
      if (targetModal) {
        targetModal.classList.add("active");
        document.body.style.overflow = "hidden"; // Prevent background body scroll
      }
    });
  });

  // Close modals when hitting close crossbars or outer overlay layout
  modals.forEach(modal => {
    const closeBtn = modal.querySelector(".close-btn");
    
    // Close on cross mark click
    if (closeBtn) {
      closeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        closeModal(modal);
      });
    }

    // Close when outer blurred background frame container area is tapped
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  function closeModal(modalElement) {
    modalElement.classList.remove("active");
    document.body.style.overflow = ""; // Re-enable window scrolling
  }

  // --- SCROLL TO TOP MANAGEMENT ---
  const scrollTopBtn = document.getElementById("scroll-top");

  if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add("active");
      } else {
        scrollTopBtn.classList.remove("active");
      }
    });

    scrollTopBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});
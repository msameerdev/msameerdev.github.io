// Button ko target karein
const backToTopButton = document.getElementById("backToTop");

// Button pe click event add karein
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scroll effect
  });
});

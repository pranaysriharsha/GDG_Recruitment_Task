document.addEventListener("DOMContentLoaded", function () {
    const countdownTimer = document.getElementById("timer");
    const heading = document.querySelector(".top h1");
    const previewBtn = document.getElementById("preview-btn");
  
    // Countdown Timer Logic
    function updateTimer() {
      const now = new Date();
      const nextYear = new Date(now.getFullYear() + 1, 0, 1);
      const timeDifference = nextYear - now;
  
      if (timeDifference <= 0) {
        countdownTimer.textContent = "Happy New Year!";
        countdownTimer.style.fontFamily ="Libre Baskerville", serif;
        heading.textContent = "Welcome 2025!";
        previewBtn.style.display = "none";
        return;
      }
  
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
      const seconds = Math.floor((timeDifference / 1000) % 60);
  
      countdownTimer.textContent = `${days}:${hours}:${minutes}:${seconds}`;
    }
  
    setInterval(updateTimer, 1000);
  
    // Preview Button Logic
    previewBtn.addEventListener("click", () => {
        const buttonText = previewBtn.textContent.trim(); // Get the text inside the button and trim extra spaces
        if (buttonText === "Preview") {
            window.location.href = "index1.html"; // Navigate to index1.html
        } else {
            window.location.href = "index.html"; // Navigate to index.html
        }
    });
  });

  let currentIndex = 0;  // Start at the first image
  const images = document.querySelectorAll('.image-slider img');
  const totalImages = images.length;
  
  function nextImage() {
      currentIndex = (currentIndex + 1) % totalImages;
      updateSlider();
  }
  
  function updateSlider() {
      const slider = document.querySelector('.image-slider');
      const offset = -currentIndex * 100;  // Move by 100% of image width
      slider.style.transform = `translateX(${offset}%)`;
  }
  
  // Set interval for automatic slide change (every 3 seconds)
  setInterval(nextImage, 2000);
  
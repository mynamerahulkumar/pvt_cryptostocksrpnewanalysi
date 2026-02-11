const revealElements = document.querySelectorAll("[data-reveal]");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.2 }
);

revealElements.forEach((element) => observer.observe(element));

const tickerTrack = document.querySelector(".ticker-track");

if (tickerTrack) {
  const items = Array.from(tickerTrack.children);
  items.forEach((item) => {
    tickerTrack.appendChild(item.cloneNode(true));
  });

  const updateTickerDuration = () => {
    const totalWidth = tickerTrack.scrollWidth / 2;
    const pixelsPerSecond = 80;
    const duration = totalWidth / pixelsPerSecond;
    tickerTrack.style.setProperty("--ticker-duration", `${duration}s`);
  };

  updateTickerDuration();
  window.addEventListener("resize", updateTickerDuration);
}

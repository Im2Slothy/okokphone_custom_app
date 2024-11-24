// Example interaction with the NUI
function dogged() {
  fetchNui("jump", { force: 1000 });
  notifyIsland({
    title: "Prepare to be dogged!",
    text: "You have ben dogged!",
    duration: 3000,
  });
}

function playVideo() {
  const videoSection = document.getElementById('videoSection');
  const youtubePlayer = document.getElementById('youtubePlayer');
  const videoURL = "https://www.youtube.com/embed/6WC_m70Wazw?autoplay=1"; 

  youtubePlayer.src = videoURL;

  videoSection.classList.remove('hidden');
}


// Handle Dark Mode Toggle
document.addEventListener("darkMode", (e) => {
  const isDark = e.detail;
  if (isDark) {
    console.log("Dark Mode is enabled");
  } else {
    console.log("Dark Mode is disabled");
  }
});

document.addEventListener("loadedPhoneFunctions", () => {
  console.log("props", document.okokPhone);
});

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});

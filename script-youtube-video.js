window.addEventListener("DOMContentLoaded", (event) => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());

  const videoPlayer = document.querySelector("#yt-video");

  videoPlayer.innerHTML = `<div class="video-responsive"><iframe width="560" height="315" src="https://www.youtube.com/embed/${params.yt}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;

  const programButton = document.querySelector("#programme-button");
  const flutterStarterForm = document.querySelector("#flutter-starter-form");

  if (params.subscriber) {
    if (flutterStarterForm) {
      flutterStarterForm.classList.remove("nd-cta-hidden");
    }
  } else {
    if (programButton) {
      programButton.classList.remove("nd-cta-hidden");
    }
  }
});

window.addEventListener("DOMContentLoaded", (event) => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());

  const videoPlayer = document.querySelector("#yt-video");

  videoPlayer.innerHTML = `<div class="video-responsive"><iframe width="100%" src="https://www.youtube.com/embed/${params.yt}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
});

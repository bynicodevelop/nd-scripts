window.addEventListener("DOMContentLoaded", (event) => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());

  const videoPlayer = document.querySelector("#yt-video");

  videoPlayer.setAttribute("data-url", `https://youtu.be/${params.yt}`);
});

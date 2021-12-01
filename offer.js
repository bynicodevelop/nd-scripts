window.addEventListener("DOMContentLoaded", (event) => {
  const cookieBdOffer = Cookies.get("nd-offer");

  const podiaButton = document.querySelector("#podia");

  let podiaScript =
    '<a href="https://formations.nico-develop.com/flutter-ultimate" data-podia-embed="button" data-text="ACCÉDER À LA FORMATION">ACCÉDER À LA FORMATION</a>';

  if (cookieBdOffer != undefined) {
    const data = JSON.parse(cookieBdOffer);
    const id = `#nd-${data.id.toLowerCase()}-pricing`;

    document.querySelector(id).style.display = "none";

    const extratedDate = new Date(Date.parse(data.date));

    var todayDate = extratedDate.toISOString().slice(0, 10);

    var diff =
      Math.abs(extratedDate.getTime() - new Date().getTime()) / 3600000;

    if (diff < 0) {
      document.querySelector("#nd-main-pricing").style.display = "block";
    } else if (diff < 48) {
      const counterId = "#nd-counter-pricing";

      const counter = document.querySelector(counterId);
      console.log(counter);

      counter.classList.remove("nd-offer-hidden");
      counter.setAttribute("data-date", todayDate);
      counter.setAttribute("data-hour", extratedDate.getHours());
      counter.setAttribute("data-min", extratedDate.getMinutes());
    }

    if (Date.parse(data.date) > new Date().getTime()) {
      document.querySelector(id).style.display = "block";

      podiaScript = `<a href="https://formations.nico-develop.com/flutter-ultimate" data-podia-embed="button" data-coupon="${data.id}" data-text="ACCÉDER À LA FORMATION">ACCÉDER À LA FORMATION</a>`;
    }
  } else {
    document.querySelector("#nd-main-pricing").style.display = "block";
  }

  podiaButton.innerHTML = podiaScript;
});

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

const cookieBdOffer = Cookies.get("nd-offer");

Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

const setCookieWithParams = function (offer, offerdays) {
  const date = new Date();

  Cookies.set(
    "nd-offer",
    {
      id: offer,
      date: date.addDays(parseInt(offerdays)),
    },
    { expires: 365 }
  );
};

if (params.offer && params.offerdays) {
  if (cookieBdOffer == undefined) {
    setCookieWithParams(params.offer, params.offerdays);
  } else {
    const data = JSON.parse(cookieBdOffer);

    if (
      Date.parse(data.date) < new Date().getTime() &&
      data.id != params.offer
    ) {
      setCookieWithParams(params.offer, params.offerdays);
    }

    const query = `offer=${params.offer}&offerdays=${params.offerdays}`;
    const url = window.location.href.replace(query, "");

    history.pushState({}, null, url);
  }
}

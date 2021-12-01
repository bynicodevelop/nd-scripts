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

if (cookieBdOffer == undefined) {
  setCookieWithParams(params.offer, params.offerdays);

  const query = `offer=${params.offer}&offerdays=${params.offerdays}`;
  const url = window.location.href.replace(query, "");

  history.pushState({}, null, url);
} else {
  const data = JSON.parse(cookieBdOffer);

  const extratedDate = new Date(Date.parse(data.date));

  var todayDate = extratedDate.toISOString().slice(0, 10);

  var diff = Math.abs(extratedDate.getTime() - new Date().getTime());

  if (diff < 0) {
    setCookieWithParams(params.offer, params.offerdays);
  }
}

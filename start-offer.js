const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

const cookieBdOffer = Cookies.get("nd-offer");

Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

if (cookieBdOffer == undefined) {
  const date = new Date();

  Cookies.set(
    "nd-offer",
    {
      id: params.offer,
      date: date.addDays(params.offerdays),
    },
    { expires: 365 }
  );

  history.pushState({}, null, window.location.href.split("?")[0]);
}

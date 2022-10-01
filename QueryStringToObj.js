// Query String To Object
function QueryStringToObj(str) {
  let query = str.split("?").at(-1);
  let obj = query.split("&");
  let b = {};
  obj = obj.map((e) => {
    a = e.split("=");
    a[1] = !isNaN(Number(a[1])) ? Number(a[1]) : a[1];
    b[a[0]] = a[1];
  });
  return b;
}

QueryStringToObj("https://hatatori.github.io/market/market-cdn.json?category=alimentos&qt=10");

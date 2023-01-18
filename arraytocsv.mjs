function arraytocsv(arr) {
  let colunas = Object.keys(arr[0]);
  let text = colunas.join(",");
  arr.map((e) => {
    text += "\n" + Object.values(e);
  });
  return text;
}

export default arraytocsv;

// let obj = [
//   { id: 434795, name: "Massa Para Pizza QUALITÁ Pacote 300g", price: 7.39, img: "https://hatatori.github.io/market/imgs/23549902.png", brand: "Qualitá", category: "alimentos", },
//   { id: 434818, name: "Massa Para Pastel De Rolo QUALITÁ Pacote 350g", price: 6.39, img: "https://hatatori.github.io/market/imgs/23549912.png", brand: "Qualitá", category: "alimentos", },
// ];

// arraytocsv(obj)
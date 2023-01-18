import arraytocsv from "./arraytocsv.mjs";
import csvtoarray from "./csvtoarray.mjs";
import querystrintoobj from "./querystrintoobj.mjs";

// csvtoarray
let csv = `location,date,variant,num_sequences,perc_sequences,num_sequences_total
Angola,2020-07-06,Alpha,0,0.0,3
Angola,2020-07-06,B.1.1.277,0,0.0,3`;
console.log("\n\nTEST: csvtoarray");
console.log(csvtoarray(csv));

// querystrintoobj
console.log("\n\nTEST: querystrintoobj");
let str =
  "q=earthbound&tbm=isch&ved=12312331dasdasd6EQ2-cCegQIABAA&oq=earth&gs_l=CgNpAYUBUBiAGFAAuUBiAGFAd3cy13aXotaW1nwAEB&sclient=img&ei=j1DIY8F20fbWxA_i2IyICg&bih=697&biw=1304";
console.log(querystrintoobj(str));

// arraytocsv
console.log("\n\nTEST: arraytocsv")
let arr = [
  {
    id: 434795,
    name: "Massa Para Pizza QUALITÁ Pacote 300g",
    price: 7.39,
    img: "https://hatatori.github.io/market/imgs/23549902.png",
    brand: "Qualitá",
    category: "alimentos",
  },
  {
    id: 434818,
    name: "Massa Para Pastel De Rolo QUALITÁ Pacote 350g",
    price: 6.39,
    img: "https://hatatori.github.io/market/imgs/23549912.png",
    brand: "Qualitá",
    category: "alimentos",
  },
  {
    id: 403287,
    name: "Biscoito PASSATEMPO Recheado Doce de Leite 130g",
    price: 3.19,
    img: "https://hatatori.github.io/market/imgs/21225148.jpg",
    brand: "Passatempo",
    category: "alimentos",
  },
];
console.log(arraytocsv(arr))
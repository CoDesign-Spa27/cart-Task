const express = require('express');
const cors=require('cors');
const app = express();
const port=3000;


app.use(cors())
app.use(express.json());
const products=[
      { id: 1, name: 'Amazon Bedsheets', price:400, image: 'https://m.media-amazon.com/images/I/51-hN-OdvLL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 2, name: 'Peanut Butter', price:300, image: 'https://m.media-amazon.com/images/I/51pANABiiJL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 3, name: 'Almond Butter', price: 500, image: 'https://m.media-amazon.com/images/I/61yhg3sDkcL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 4, name: 'Healty Drink', price: 350, image: 'https://m.media-amazon.com/images/I/51YaUISOuOL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 5, name: 'PanCake Mix', price: 100, image: 'https://m.media-amazon.com/images/I/81rf866YQYL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 6, name: 'SunSweet Juice', price: 299, image: 'https://m.media-amazon.com/images/I/61TCZnU6N2L._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 7, name: 'Curtains', price:1599, image: 'https://m.media-amazon.com/images/I/51qAg0XBMkL._AC_UL480_FMwebp_QL65_.jpg' },
    { id: 8, name: 'Echo Dot', price: 6990, image: 'https://m.media-amazon.com/images/I/81lGxS2ZisL._AC_UL480_FMwebp_QL65_.jpg' },
]

app.get('/api/products', (req, res) => {
  console.log("Data is fetched from here")
    res.json(products);
  });
  
  app.listen(port);
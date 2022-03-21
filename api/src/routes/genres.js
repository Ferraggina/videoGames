const { Router } = require("express");
const router = Router();
const axios = require("axios");
const { API_KEY } = process.env;
const { Genre } = require("../db.js");

router.get("/", async (req, res) => {
  let genresDb = await Genre.findAll();
  if (genresDb.length) {
    console.log("Generos enviados desde DB");
    res.status(200).json(genresDb);
  }
  let { data } = await axios.get(
    `https://api.rawg.io/api/genres?key=${API_KEY}`
  );
  let genresApi = [];
  data.results.map((genre) => {
    genresApi.push({ id: genre.id, name: genre.name });
  });
  await Genre.bulkCreate(genresApi, {
    ignoreDuplicates: true,
  });
  genresDb = await Genre.findAll();
  console.log("ingresados a Db");
  res.status(200).json(genresDb);
});
module.exports = router;

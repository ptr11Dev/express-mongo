const express = require("express");
const router = express.Router();
const News = require("../models/news");

/* GET home page. */
router.get("/", (req, res) => {
  const search = req.query.search;

  const allNews = News.find({ title: new RegExp(search, "i") }).sort({
    date: -1
  });

  allNews.exec((err, data) => {
    res.render("news", { title: "News", data, search });
  });
});

module.exports = router;

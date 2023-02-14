const { Router } = require("express");
const config = require("../controllers/contact.controller");

const {
  findAll,
  create,
  deleteAll,
  findAllFavorite,
  findOne,
  update,
  delete: deleteOne,
} = config;

const router = Router();

router.route("/").get(findAll).post(create).delete(deleteAll);

router.route("/favorite").get(findAllFavorite);

router.route("/:id").get(findOne).put(update).delete(deleteOne);

module.exports = router;

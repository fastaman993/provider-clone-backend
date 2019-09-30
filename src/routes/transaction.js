const express = require("express");
const router = express.Router();
const {
  getAllTransaction,
  getTransaction,
  createTransaction,
  patchTransaction,
  deleteTransaction
} = require("../controllers/transaction");
const { isAuth, isAdmin, isUser } = require("../middlewares/auth");

// router
//   .get("/", getAllTransaction)
//   .post("/", isAuth, isUser, createTransaction)
//   .get("/:id", getTransaction)
//   .patch("/:id", isAuth, isAdmin, patchTransaction)
//   .delete("/:id", isAuth, isAdmin, deleteTransaction);

router
  .get("/", getAllTransaction)
  .post("/", createTransaction)
  .get("/:id", getTransaction)
  .patch("/:id", patchTransaction)
  .delete("/:id", deleteTransaction);

module.exports = router;

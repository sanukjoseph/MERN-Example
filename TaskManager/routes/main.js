const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  CreateTask,
  GetSingleTask,
  updateTask,
  DeleteTask,
} = require("../controllers/index");

router.route("/").get(getAllTasks).post(CreateTask);
router.route("/:id").get(GetSingleTask).put(updateTask).delete(DeleteTask);

module.exports = router;

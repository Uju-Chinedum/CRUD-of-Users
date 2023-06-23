const express = require("express")

const {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
} = require("../controllers/tasks");

const router = express.Router();

router.route("/").get().post();
router.route("/:id").get().patch().delete();

module.exports = router;

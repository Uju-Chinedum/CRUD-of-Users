const express = require("express");

const {
    getAllUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser,
} = require("../controllers/users");

const router = express.Router();

router.route("/").get().post();
router.route("/:id").get().patch().delete();

module.exports = router;

const router = require("express").Router();
const { getUser, getUserById, createUser, updateUser, deleteUser } = require("../controller/users")

router.get("/", getUser);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
const express = require("express");
const router = express.Router();
const { authCheck } = require("../middleware");
const controller = require("../controllers/task.controller");

//check login and use authentication
router.get("/getTasks", [authCheck.verifyToken], controller.getTasks);
router.get("/getTasks1", [authCheck.verifyToken], controller.getTasks);

router.post("/markDone", [authCheck.verifyToken], controller.markDone);

router.post("/markUnDone", [authCheck.verifyToken], controller.markUnDone);

router.post(
  "/deActivateTask",
  [authCheck.verifyToken],
  controller.deActivateTask
);

router.post("/activateTask", [authCheck.verifyToken], controller.activateTask);

router.post("/createTask", [authCheck.verifyToken], controller.createTask);

module.exports = router;


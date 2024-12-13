import express from "express";
import itemActions from "./modules/item/itemActions";
import programAction from "./modules/program/programAction";
import sayActions from "./modules/say/sayActions";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

router.get("/", sayActions.sayWelcome);
router.get("/api/programs", programAction.browse);

/* ************************************************************************* */

export default router;

import { Router } from "express";
import { createContact, deleteContact, getContact, getIndividualContact, updateContact } from "../controller/contactController.js";
import { validateToken } from "../middleware/validateToken.js";

const router = Router();

router.use(validateToken);
router.route("/").get(getContact).post(createContact);
router.route("/:id").get(getIndividualContact).put(updateContact).delete(deleteContact);

export default router;

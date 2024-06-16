import { Router } from "express";
import { createContact, deleteContact, getContact, getIndividualContact, updateContact } from "../controller/contactController.js";

const router = Router();

router.route("/").get(getContact).post(createContact);
router.route("/:id").get(getIndividualContact).put(updateContact).delete(deleteContact);

export default router;

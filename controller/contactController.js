import asyncHandler from 'express-async-handler';
import Contact from '../models/contactModel.js';


/* 
    @Description : To get all contacts
    @Route : GET /api/contacts
    @Access : public
*/
export const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.find()
  res.status(200).send({isSuccess:true, contact});
});

/* 
    @Description : To createContact
    @Route : POST /api/contacts
    @Access : public
*/
export const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are required");
  }
  const contact = await Contact.create({
    name,email,phone
  })

  res.status(201).send({isSuccess:true, contact});
});

/* 
    @Description : To getIndividualContact
    @Route : GET /api/contacts/:id
    @Access : public
*/
export const getIndividualContact = asyncHandler(async (req, res, next) => {
  const userID = req.params.id;
  const contact = await Contact.findById(userID);
  if (!contact) {
    res.status(404);
    throw new Error(`Contact not found with id ${userID}`);
  }
  res.status(200).send({ isSuccess: true, contact });
});
/* 
    @Description : To updateContact
    @Route : PUT /api/contacts/:id
    @Access : public
*/
export const updateContact = asyncHandler(async (req, res) => {
  const userID = req.params.id;
  const contact = await Contact.findById(userID);
  if (!contact)
  {
    res.status(404);
    throw new Error("No contact found with id " + userID)
  }
  const updatedContact = await Contact.findByIdAndUpdate(userID, req.body, { new: true });
  res.status(200).send({isSuccess: true,message: `Contact updated for ID : ${userID}`, updatedContact });
});

/* 
    @Description : To deleteContact
    @Route : DELETE /api/contacts/:id
    @Access : public
*/
export const deleteContact = asyncHandler(async (req, res) => {
  const userID = req.params.id;
  const contact = await Contact.findById(userID);
  console.log("🚀 ~ deleteContact ~ contact:", contact._id)
  if (!contact)
  {
    res.status(404);
    throw new Error(`Contact not found`)
  }
  const deletedContact = await Contact.findByIdAndDelete(userID);

  res.status(200).send({isSuccess: true, message: `Contact Deleted with ID: ${userID}`, contact});
});

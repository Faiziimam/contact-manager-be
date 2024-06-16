import asyncHandler from 'express-async-handler';
import Contact from '../models/contactModel.js';


/* 
    @Description : To get all contacts
    @Route : GET /api/contacts
    @Access : PRIVATE
*/
export const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.find({user_id:req.user.id})
  res.status(200).send({isSuccess:true, contact});
});

/* 
    @Description : To createContact
    @Route : POST /api/contacts
    @Access : PRIVATE
*/
export const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  const userID = req.user.id;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are required");
  }
  const contact = await Contact.create({
    user_id:userID,name,email,phone
  })

  res.status(201).send({isSuccess:true, contact});
});

/* 
    @Description : To getIndividualContact
    @Route : GET /api/contacts/:id
    @Access : PRIVATE
*/
export const getIndividualContact = asyncHandler(async (req, res, next) => {
  const userID = req.params.id;
  const contact = await Contact.findById(userID);
  console.log("🚀 ~ getIndividualContact ~ contact:", contact)
  if (!contact) {
    res.status(404);
    throw new Error(`Contact not found with id ${userID}`);
  }
  res.status(200).send({ isSuccess: true, contact });
});
/* 
    @Description : To updateContact
    @Route : PUT /api/contacts/:id
    @Access : PRIVATE
*/
export const updateContact = asyncHandler(async (req, res) => {
  const ID = req.params.id;
  const contact = await Contact.findById(ID);
  const user_id = req.user.id; 
  if (!contact)
  {
    res.status(404);
    throw new Error("No contact found with id " + ID)
  }
  console.log("CHECK",contact._id.toString(), user_id)
  if (contact.user_id.toString() !== user_id)
  {
    res.status(403);
    throw new Error("not AUTHORIZED to perform this action ")
  }
    
  const updatedContact = await Contact.findByIdAndUpdate(ID, req.body, { new: true });
  res.status(200).send({isSuccess: true,message: `Contact updated for ID : ${ID}`, updatedContact });
});

/* 
    @Description : To deleteContact
    @Route : DELETE /api/contacts/:id
    @Access : PRIVATE
*/
export const deleteContact = asyncHandler(async (req, res) => {
  const userID = req.params.id;
  const contact = await Contact.findById(userID);
  if (!contact)
  {
    res.status(404);
    throw new Error(`Contact not found`)
  }

  if (contact.user_id.toString() !== req.user.id)
    {
      res.status(403);
      throw new Error("Not AUTHORIZED to perform this action ")
  }
  
  const deletedContact = await Contact.findByIdAndDelete(userID);

  res.status(200).send({isSuccess: true, message: `Contact Deleted with ID: ${userID}`, deletedContact});
});

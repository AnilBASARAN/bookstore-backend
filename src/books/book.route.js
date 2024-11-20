const express = require('express');
const Book = require('./book.model');
const { postABook,getAllBooks, getSingleBook, updateBook, deleteBook } = require('./book.controller');
const verifyAdminToken = require('../../middleware/verifyAdminToken');
const router = express.Router();


// post a book
//post = when submit something from frontend to database
//get = when get something from back from database
//put/patch = when edit or update something 
//delete = when delete smth from database


router.post("/create-book", verifyAdminToken ,postABook)

// get all books

router.get("/",getAllBooks)

// get single book


router.get("id/:id",getSingleBook)

// updage a book endpoint

router.put("/edit-id/:id",verifyAdminToken ,updateBook)


router.delete("/delete-id/:id",verifyAdminToken ,deleteBook)

module.exports = router;
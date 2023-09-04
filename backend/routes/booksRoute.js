// import express from "express";
// import { Book } from "../models/bookModel.js";

// const router = express.Router();

// router.post("/", async (request, response) => {
//   try {
//     if (
//       !request.body.title ||
//       !request.body.author ||
//       !request.body.publishYear
//     ) {
//       return response.status(400).send({
//         message: "Send all required fields: title, author, publishYear",
//       });
//     }

//     const { title, author, publishYear } = request.body;

//     const book = await Book.create({
//       title: title,
//       author: author,
//       publishYear: publishYear,
//     });

//     response.status(201).json({
//       success: true,
//       message: "Book created successfully",
//       book,
//     });
//   } catch (error) {
//     console.log(error.message);
//     response.status(500).send({ message: error.message });
//   }
// });

// router.get("/", async (req, res) => {
//   try {
//     const books = await Book.find({});
//     return res.status(200).json({
//       books,
//       count: books.length,
//       success: true,
//       message: "Book's found successfully",
//     });
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).send({ message: error.message });
//   }
// });

// router.get("/:id", async (request, res) => {
//   try {
//     const { id } = request.params;
//     const book = await Book.findById(id);
//     return res.status(200).json(book);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).send({ message: error.message });
//   }
// });

// router.put("/:id", async (req, res, next) => {
//   try {
//     const { id } = req.params;

//     const { title, description, publishYear } = req.body;

//     const UpdatedBook = await Book.findByIdAndUpdate(id, {
//       title,
//       description,
//       publishYear,
//     });

//     await UpdatedBook.save();

//     res.status(200).send({
//       success: true,
//       message: "Book updated successfully",
//       book: UpdatedBook,
//     });
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).send({ message: error.message });
//   }
// });

// router.delete("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const result = await Book.findByIdAndDelete(id);
//     if (!result) {
//       return res.status(404).json({ message: "Book not found" });
//     }
//     return res.status(200).send({ message: "Book deleted successfully" });
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).send({ message: error.message });
//   }
// });

// export default router;
import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();

// Route for Save a new Book
router.post("/", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message: "Send all required fields: title, author, publishYear",
      });
    }
    const newBook = {
      title: request.body.title,
      author: request.body.author,
      publishYear: request.body.publishYear,
    };

    const book = await Book.create(newBook);

    return response.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get All Books from database
router.get("/", async (request, response) => {
  try {
    const books = await Book.find({});

    return response.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get One Book from database by id
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const book = await Book.findById(id);

    return response.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Update a Book
router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message: "Send all required fields: title, author, publishYear",
      });
    }

    const { id } = request.params;

    const result = await Book.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: "Book not found" });
    }

    return response.status(200).send({ message: "Book updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Delete a book
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Book.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: "Book not found" });
    }

    return response.status(200).send({ message: "Book deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;

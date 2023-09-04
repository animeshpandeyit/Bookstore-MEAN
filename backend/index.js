// import mongoose from "mongoose";
// import express from "express";
// import { PORT, mongoDBURL } from "./config.js";
// import { booksRoute } from "./routes/booksRoute.js";
// export const app = express();
// app.use(express.json());

// app.get("/", (request, response) => {
//   console.log(request);
//   return response.status(234).send("Welcome To MEAN Stack Tutorial");
// });
// app.use("/books", booksRoute);

// mongoose
//   .connect(mongoDBURL, {
//     dbName: "bookstore",
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Application is connected to MongoDB");
//     app.listen(PORT, () => {
//       console.log(`App is listening to port: ${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from 'cors';

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome To MERN Stack Tutorial");
});

app.use("/books", booksRoute);

app.use(cors());


mongoose
  .connect(mongoDBURL, {
    dbName: "bookstore",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

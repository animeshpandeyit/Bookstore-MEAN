import express from "express";

import { PORT } from "./config.js";

export const app = express();

app.listen(5000, () => {
  console.log(`Server listening on ${PORT}`);
});

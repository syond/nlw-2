import express from "express";

const app = express();

app.get("/", (request, response) => {
  response.send("E ai :)");
});

app.listen(process.env.PORT || 3000);

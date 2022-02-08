import express from "express";
import sendRouter from "./routes/sendRouter";

const app = express();
const PORT = 8090;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/send", sendRouter);

app.listen(PORT, () => {
  console.log("8090 PORT");
});

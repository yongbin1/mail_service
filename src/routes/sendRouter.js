import { Router } from "express";
import mailer from "./mail";

const sendRouter = Router();

sendRouter.get("/mail", (req, res) => {
  const { email, subject, text } = req.body;

  let emailParam = {
    toEmail: email, // 수신할 이메일

    subject: subject, // 메일 제목

    text: text, // 메일 내용
  };

  mailer.sendGmail(emailParam);

  console.log(emailParam);
});

export default sendRouter;

import nodemailer from "nodemailer";
import senderInfo from "../config/senderInfo.json";
// 메일발송 객체
const mailSender = {
  // 메일발송 함수
  sendGmail: (param) => {
    let transporter = nodemailer.createTransport({
      service: "gmail", // 메일 보내는 곳
      prot: 587,
      host: "smtp.gmlail.com",
      secure: false,
      requireTLS: true,
      auth: {
        user: senderInfo.user, // 보내는 메일의 주소
        pass: senderInfo.pass, // 보내는 메일의 비밀번호
      },
    });
    // 메일 옵션
    let mailOptions = {
      from: senderInfo.user, // 보내는 메일의 주소
      to: param.toEmail, // 수신할 이메일
      subject: param.subject, // 메일 제목
      text: param.text, // 메일 내용
    };

    // 메일 발송
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  },
};

module.exports = mailSender;

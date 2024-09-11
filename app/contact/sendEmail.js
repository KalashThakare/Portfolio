'use server';

import nodemailer from 'nodemailer';

const CONTACT_MESSAGE_FIELDS = {
  name: "Name",
  email: "Email",
  subject: "Subject",
  message: "Message",
};

export const sendEmail=async(email,message)=>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp",
        port: 587,
        secure: true,
        auth: {
          user: "kalashthakare898@gmail.com",
          pass: "zxya hyyt mbku ockv",
        },
      });

      const info = await transporter.sendMail({
        from: email,
        to: "kalashthakare898@gmail.com",
        subject: email,
        text:message,
      });

      console.log("Message sent: %s", info.messageId);
}
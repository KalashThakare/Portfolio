'use server';
import nodemailer from 'nodemailer';

export const sendEmail=async(email, message,firstname)=>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp",
        port: 587,
        secure: true,
        auth: {
          user: "kalashthakare898@gmail.com",
          pass: "//app password",
        },
      });

      const info = await transporter.sendMail({
        from: email,
        to: "kalashthakare898@gmail.com",
        subject: "Contact form submission",
        text: message,
        
      });

      console.log("Message sent: %s", info.messageId);
}
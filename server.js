const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running On Port 5000"));
// console.log(process.env.EMAIL_USER);
// console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: `${name} <${email}>`,
    to: process.env.EMAIL_USER,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});



// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'process.env.EMAIL_USER', // Your Gmail email address
//         pass: 'process.env.EMAIL_PASS'    // Your Gmail password or App-Specific Password
//     }
// });

// // Setup email data with unicode symbols
// let mailOptions = {
//     from: '"Your Name" <your@gmail.com>', // Sender name and address
//     to: 'recipient@example.com',          // List of recipients
//     subject: 'Hello',                     // Subject line
//     text: 'Hello world?',                 // Plain text body
//     html: '<b>Hello world?</b>'           // HTML body
// };

// // Send mail with defined transport object
// transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//         return console.log(error);
//     }
//     console.log('Message sent: %s', info.messageId);
// });


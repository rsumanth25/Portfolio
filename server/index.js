const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send', async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
  from: process.env.MAIL_USER,          // ✅ must be your Gmail
  to: process.env.MAIL_USER,            // you receive the email
  replyTo: email,                       // ✅ reply goes to visitor
  subject: `New message from ${name}`,
  text: `
You have received a new message from your portfolio contact form:

Name: ${name}
Email: ${email}

Message:
${message}
  `,
};

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Email not sent' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

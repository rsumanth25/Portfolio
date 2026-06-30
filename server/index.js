const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ================= Middleware =================

app.use(cors());
app.use(express.json());

// ================= Mail Transporter =================

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

// Verify transporter when server starts

transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Mail Transport Error");
    console.error(error);
  } else {
    console.log("✅ Mail Server Ready");
  }
});

// ================= Home Route =================

app.get("/", (req, res) => {
  res.send("Portfolio Backend Running 🚀");
});

// ================= Contact Route =================

app.post("/send", async (req, res) => {
  console.log("====================================");
  console.log("📩 /send endpoint called");
  console.log(req.body);
  console.log("====================================");

  try {
    const { name, email, subject, message } = req.body;

    // Validation

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields.",
      });
    }

    const mailOptions = {
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,

      replyTo: email,

      subject: subject,

      text: `
New Portfolio Contact Message

-----------------------------------

Name : ${name}

Email : ${email}

Subject : ${subject}

Message :

${message}

-----------------------------------
      `,
    };

    console.log("📤 Sending Email...");

    const info = await transporter.sendMail(mailOptions);

    console.log("✅ Email Sent Successfully");
    console.log(info.response);

    return res.status(200).json({
      success: true,
      message: "Message sent successfully.",
    });

  } catch (error) {

    console.error("❌ Email Sending Failed");
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
});

// ================= Server =================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
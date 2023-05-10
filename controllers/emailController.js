const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  const { title, message, name, email } = req.body;
  var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.email,
      pass: process.env.password,
    },
  });

  try {
    let info = await transporter.sendMail({
      from: `${name} ${email}`,
      to: "sancontributions@gmail.com",
      subject: title,
      replyTo: email,
      text: `From : ${name} ::\t${email}\n\n${message}`,
      // html:
    });

    console.log(info);
    res.status(200).json("Email sent successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = { sendMail };

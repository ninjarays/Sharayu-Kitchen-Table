const nodemailer = require('nodemailer');

exports.quoteMail = async (data) => {
    const transporter = nodemailer.createTransport({
      service: 'outlook',
      auth: {
        user: `${process.env.Email_From}`,
        pass: `${process.env.Email_Pass}`
      }
    });

    const productsString = JSON.stringify(data.products, null, 2);

    const options = {
      from: `${process.env.Email_From}`,
      to: `${process.env.Email_From}`,
      subject: 'New Quote Required',
      html: `${data.customer_name}<br>${data.customer_phone}<br>${productsString}<br>`,
    };

    await transporter.sendMail(options);
  }
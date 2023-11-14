const fs = require('fs');
const json2xls = require('json2xls');
const nodemailer = require('nodemailer');

exports.customerMail = async (data) => {

    //Current time of request
    let date = new Date().toDateString();

    const xls = json2xls(data);
    fs.writeFileSync('data.xlsx', xls, 'binary');
      
    const transporter = nodemailer.createTransport({
      service: 'outlook',
      auth: {
        user: `${process.env.Email_From}`,
        pass: `${process.env.Email_Pass}`
      }
    });

    const options = {
      from: `${process.env.Email_From}`,
      to: `${process.env.Email_From}`,
      subject: `Customers in 24 Hour ${date}`,
      html: `Data collected on ${date}`,
      attachments: [
        {
           filename: `${date}.xlsx`,
           path: './data.xlsx', // Path to the Excel file
        },
     ],
    };

    await transporter.sendMail(options);
    
    fs.unlinkSync('./data.xlsx'); // Delete the Excel file

}
import nodemailer from 'nodemailer'
import express from 'express'


const app = express();
let transporter = nodemailer.createTransport({
    // service: 'gmail',
    // auth: {
    //     user: 'infatorkeh@gmail.com',
    //     pass: 'gnpkwnylosymtlmc'
    // },
    // tls: {
    //     rejectUnauthorized: false
    // }

    // host: "172.25.161.3",
    // port: 25,
    // user: "orange.sl\dx.technical",
    // email: "dx.technical@orange.sl",
    // pass: "Orange@2021",

    // tls: {
    //     rejectUnauthorized: false
    // }






    host: "172.25.161.3",
    port: 25,

    user: "orange.sl\dx.technical",
    user: "dx.technical@orange.sl",
    pass: "Orange@ 2021",

});

export const SendEmail = app.post('/mail', (req, res, next) => {
    var complainerName = req.body.complainerName
    var complainerPhoneNumber = req.body.complainerPhoneNumber
    var complainerAddress = req.body.complainerAddress
    var dateOfComplain = req.body.dateOfComplain
    var sendTo = req.body.sendTo
    var mail = req.body.mail
    var senderPhone = req.body.senderPhone
    var complainTypes = req.body.complainTypes
    var expectToCompletes = req.body.expectToCompletes
    var message = req.body.message
    var subject = req.body.subject
    var senderName = req.body.senderName
    var senderEmail = req.body.senderEmail
    var customerDetails = req.body.customerDetails

    const mailOptions = {
        from: senderEmail,
        to: sendTo,
        cc: mail,
        // bcc: copy,
        subject: subject,
        html: `from ${senderEmail} <noreply@orange-sonatel.com> | | <b>${senderName}</b>
        <h4>Dear Sir;</h4> </b>
        Please login to you account using the link below this message in order to fix the given problem.
       <strong> <h3> http://172.25.164.15:3000 </h3> <strong />
        <p style="font-size: 12px; color: rgb(0, 0, 0); width: 680px;"> ${`Complain Type: ${complainTypes}`}</p>  
        <p style="font-size: 12px; color: rgb(0, 0, 0); width: 680px;">${`Complain Time: ${expectToCompletes}`}</p>  
        <p style="font-size: 12px; color: rgb(0, 0, 0); width: 680px;">${message} </p>  
         <p style="color:black; font-size:14pt"> Below is the details for the customer </p>
    <table style="width: 780px; font-size:10pt; font-family:Arial,sans-serif; line-height:normal; margin-left: 25px" cellpadding="0" cellspacing="0">
    <tbody>     
    <p style="color:black; > <p> </p>   <span style=" color:#FF7000;">${`Complainer Name: ${complainerName}`}</span></p>
     <p style="color:black; ><p>   </p><span style=" color:#FF7000;">${`Complainer Phone Number: ${complainerPhoneNumber}`}</span> </p>
     <p style="color:black; ><p>  </p> <span style=" color:#FF7000;">${`Complainer Address/Location: ${complainerAddress}`}</span></p>
     <p style="color:black; ><p>  </p> <span style="color:#FF7000;">${`Date of Complain: ${dateOfComplain}`}</span></p>
     <br/>
        </tbody>
        </table>
        <table style="width: 480px; font-size:8pt; font-family:Arial,sans-serif; line-height:normal;" cellpadding="0" cellspacing="0">
        <tbody>   
 <tr>
  <td colspan="2"style="width: 480px; padding-bottom:5px; color: #3c3c3b; font-size:11pt; font-family:Arial,sans-serif; font-weight: bold;">${senderName}</td>
 </tr>
 <tr>
  <td colspan="2"style="width: 480px; font-family:Arial,sans-serif; font-size:11pt; color:#1793d2; padding-bottom:5px"></td>
 </tr>
 <tr>
  <td colspan="2"style="width: 480px; padding-bottom:3px; border-top:3px dotted; border-top-color:#FF7000; ">&nbsp;</td>
 </tr>
 <tr>	
  <td style="width:120px; vertical-align: middle;"valign="middle">
   <a href="logo link URL"target="_blank"><img border="0"alt="Logo"width="88"height="88"style="width:88px; height:88px; border:0;"src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Orange_logo.svg/2048px-Orange_logo.svg.png"></a>   
  </td>  
  <td style="width:360px; color: #131313; font-family:Arial,sans-serif; vertical-align: middle"valign="middle">
   <table cellpadding="0" cellspacing="0" style="line-height:14px;">
   <tbody>
    <tr><td style="font-family:Arial,sans-serif; font-size:10pt; color:#131313; padding:1px;">Phone Number: ${senderPhone}</td></tr>
    <tr>
     <td style="font-family:Arial,sans-serif; font-size:8pt; color:#131313; padding:1px;">					
      <a href="https://orange.sl"target="_blank"style="font-family:Arial,sans-serif; font-size:8pt; text-decoration:none; color:#131313;">Email: ${senderEmail}</a>					
     </td>
    <tr>
     <td style="font-family:Arial,sans-serif; font-size:8pt; color:#131313; padding:1px;">					
      <a href="https://orange.sl"target="_blank"style="font-family:Arial,sans-serif; font-size:8pt; text-decoration:none; color:#131313;">Orange</a>					
     </td>
    </tr>
    <tr>
     <td style="color: #131313; font-family:Arial,sans-serif; font-size:10pt; padding:1px;">Orange Sierra Leone</td>
    </tr>
    <tr>
     <td style="color: #131313; font-family:Arial,sans-serif; font-size:10pt; padding:1px;">25 Regent Road Freetown</td>
    </tr>
    </tbody>
   </table>
  </td>
 </tr>
 <tr>
  <td colspan="2"style="width: 480px; padding-top:2px; border-bottom:3px dotted; border-bottom-color:#FF7000; ">&nbsp;</td>
 </tr>
</tbody>
</table>
`,
    }

    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            res.json({
                status: "err"
            })
            console.log(err)
        }
        else {
            res.json({
                status: "success",

            })
            console.log("Email Sent" + data.response)
            console.log('Successfully');
        }
    })
})

transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to Escalate our messages!");
    }
});

export default SendEmail;
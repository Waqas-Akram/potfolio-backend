const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

//use body parser to parse fields


// 


//Post a email message using nodemailer

router.post('/send',async(req,res) => {
    const {name , email ,message} = req.body;
    try {
        const transporter = nodemailer.createTransport({
            service:'Outlook',
            auth:{
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD,
            }
        })
        const mailOptions = {
            form: `Waqas Akram ${process.env.EMAIL}`,
            to:process.env.EMAIL,
            subject:"Message From your Portfolio Website",
            text:"You have the submission with the following details...Name :"+ name+'Email :'+email+' Message :'+message,
            html: 'You have the submission with the following details...<p><ul><li>Name :'+name+'</li><li>Email : '+email+'</li><li>Message : '+message+'</li></ul> </p>'
        }
        await transporter.sendMail(mailOptions,(error,info)=>{
            if(error){
                console.log(error)
            }
            else{
                res.status(200).json({msg:"Message Sent Successfully"})
            }
        })
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send(error.message);
        
    }
})

module.exports = router
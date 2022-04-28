let mail = require("nodemailer");
let transport = mail.createTransport({service:"gmail",auth:{user:"example@gmail.com",pass:"example"}});
let Data={from:"example@gmail.com" , to:"example@gmail.com" , subject:"Test" ,text:"test" };
transport.sendMail(Data,(err,info)=>{if(err) console.log(err);else console.log("done"+info);})

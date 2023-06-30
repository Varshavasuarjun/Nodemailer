var nodemailer=require('nodemailer');


 var transport = nodemailer.createTransport(
    {
        service:'gmail',
        auth:{
            user: ' ',
            // enter your mail id in the above ''
            pass:'  '
            // enter your password in the above ''(password should be generetd  app password for email by two step verification)
            // app password generation:
            // go to gmail->  security ->  2 step verification-> app password -> select email from dropdwn box of app and in the device field type nodemailer -> genertae -> will get a 12 letter password-> enter that paword in the above field
        }
    }
 )

  var mailOption={
    from:'',
     to:'',
     subject:'Nodemailer',
      text:' heiii. helloo,   app password generation,go to gmail->  security ->  2 step verification-> app password -> select email from dropdwn box of app and in the device field type nodemailer -> genertae -> will get a 12 letter password.thats how you need to generete the app password'
  
                
    // enter your mail id , receiver mail id , subject and massage in the above ""
  }
transport.sendMail(mailOption,function(error,info){
    if(error){
        console.log(error);
    }
    else {
        console.log( `email send succesully to ${mailOption.to}`); 

    }
})

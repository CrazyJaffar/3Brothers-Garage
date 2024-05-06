function sendMail(){
     let parms ={
        message : document.getElementById("message").value,
      };
    console.log(parms); 
    emailjs.send("service_mzdery5","template_0140pu5",parms).then(alert("Email sent!")); 
    
}

function sendMail(){

    //var leads = document.getElementById('message').value;
     let params ={
        message : document.getElementById("message").val,
      
    } 
    console.log(params); 

    emailjs.send("service_mzdery5","template_0140pu5",{message: "test",}).then(alert("Email sent!"));
    
    
}

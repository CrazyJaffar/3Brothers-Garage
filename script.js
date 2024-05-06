function sendMail(){
    let params ={
        message : document.getElementById("message").val,
      
    }
    console.log(message);

    emailjs.send("service_mzdery5", "template_0140pu5", params).then(alert("Email sent!"));
    console.log(params);
}
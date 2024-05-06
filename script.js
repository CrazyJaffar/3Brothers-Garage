function sendMail(){
    var leads = document.getElementById('message').value;
    console.log(leads);

    emailjs.send("service_mzdery5", "template_0140pu5", leads).then(alert("Email sent!"));
    console.log(params);
}

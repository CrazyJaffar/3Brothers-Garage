function emailSend(){

    var Name = document.getElementById('name').value;
    var Email = document.getElementById('email').value;
    var Phone = document.getElementById('phone').value;

    var info = "PersonName" + Name + "</br>"
                "PersonEmail" + Email + "</br>"
                 "PersonPhone" + Phone + "</br>"

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "campaignleads62@gmail.com",
        Password : "6EBB89F49D89F6CF7D48742A0865352BA966",
        To : 'campaignleads62@gmail.com',
        From : "campaignleads62@gmail.com",
        Subject : "Leads",
        Body : info
    }).then(
      message => {
        if(message=='OK'){
            swal("Success", "Thanks for Contacting Us! We will get back to you Shortly", "success");
        }else{
            swal("Error!", "SOmething went wrong!", "error");
        }
      }
    );
}
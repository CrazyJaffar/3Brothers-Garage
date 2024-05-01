function emailSend(){

    var leads = document.getElementById('info').value;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "campaignleads62@gmail.com",
        Password : "6EBB89F49D89F6CF7D48742A0865352BA966",
        To : 'campaignleads62@gmail.com',
        From : "campaignleads62@gmail.com",
        Subject : "Leads",
        Body : leads
    }).then(
      message => {
        if(message=='OK'){
            swal("Success", "Leads has been Generated!", "success");
        }else{
            swal("Error!", "Error in generating Leads!", "error");
        }
      }
    );
}

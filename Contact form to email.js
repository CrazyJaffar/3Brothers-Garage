const leads = document.getElementById('Leads');
const submit = document.getElementById('submit');

const leads = document.getElementByClassName('form-contact')[0];

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("clicked");
})

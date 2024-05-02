const leads = document.getElementById('Leads');
console.log("leads");
const submit = document.getElementsByClassName('form-contact')[0];

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("clicked");
})

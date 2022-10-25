btn_with_handler.onclick = function (){
    document.getElementById('hello').innerHTML = 'Hello from event handler';
};
// REGION for functions
function helloFromEventListener (){
    document.getElementById('hello').innerHTML = 'Hello from event LISTENER';
}

function nameToUpperCase() {
    const fld = document.getElementById('fld_name');
    fld.value = fld.value.toUpperCase();
}

const onMouseOverLastName = () => {
    const fld = document.getElementById('fld_lastname');
    fld.style.backgroundColor = 'blue';
}
const validateAge = (e) => {
 const fld = e.target;
 if(isNaN(fld.value)){
    fld.style.backgroundColor = 'red';
 }
 else{
    fld.style.backgroundColor = 'white';
 }
}
const tellNumber = (e) => {
    const fld = e.target;
    if(!isNaN(fld.value) && fld.value.length > 0){
lbl_number.innerHTML = `as zinau jusu ivesta skaiciu - ${fld.value}`;
    }
    else
    {lbl_number.innerHTML = `as nezinau skaiciaus`}
}

const onRegistrationSubmit = (e) => {
e.preventDefault();
console.log(e);
const formElem = e.target;
const formData = new FormData(formElem);
//console.log(formData.get('user_name'));
//console.log([...formData]);
const data = Object.fromEntries(formData);
console.log(data);
}
// REGION for event listner registrations
btn_with_listener.addEventListener('click', helloFromEventListener)

fld_name.addEventListener('change', nameToUpperCase);
fld_lastname.addEventListener('mouseover', onMouseOverLastName)
fld_lastname.addEventListener('mouseout', () => {fld_lastname.style.backgroundColor = 'white' })

fld_age.addEventListener('keyup', validateAge)
fld_number.addEventListener('keyup', validateAge)
fld_number.addEventListener('keyup', tellNumber)
frm_registration.addEventListener('submit', onRegistrationSubmit)

const registrationForm = document.querySelector('#registration-form');
const registrationFormSbmBtn = document.querySelector('#registration-form-submit');

function sendData() {
    let data = new FormData(registrationForm);
    let obj = {};

    console.log(data);

    data.forEach((value, key) => {
        
        obj[key] = value
    });

    fetch('https://testapi.io/api/partiz/resource/Users', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },        
        body: JSON.stringify(obj) 
    })
    .then(obj => console.log(obj.json()))
    .catch((klaida) => console.log(klaida));
}

registrationFormSbmBtn.addEventListener('click', (e) => {
    e.preventDefault();
    sendData();
    setTimeout(() => {
        window.location.href = "../to-do-app/index.html";
    }, 2000); 
})
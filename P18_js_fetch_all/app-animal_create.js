const animalForm = document.querySelector('#animal-form');
const animalFormSbmBtn = document.querySelector('#animal-form-submit');

function sendData() {
    let data = new FormData(animalForm);
    let obj = {};

    obj['15612'] = 'timeValue';

    console.log(data);

    // #1 iteracija -> obj {name: 'asd'}
    // #2 iteracija -> obj {type: 'asd'}
    data.forEach((value, key) => {
        // console.log(`${key}(Key): ${value}(Value)`);
        obj[key] = value
    });

    fetch('https://testapi.io/api/lipfter/resource/Animals', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        // Naudojame JSON.stringify, nes objekte neturim .json() metodo
        body: JSON.stringify(obj) 
    })
    .then(obj => console.log(obj.json()))
    .catch((klaida) => console.log(klaida));
}

animalFormSbmBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Breaks manual refresh after submit
    sendData();
})
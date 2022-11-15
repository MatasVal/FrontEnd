const url = 'https://testapi.io/api/partiz/resource/Users';
const options = {
    method: 'get',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}

const response = {};

function loadData() {
    if (options !== '') {
        fetch(url, options)
            .then((response) => response.json())
            .then((a) => {
                console.log(a);
                const userEle = document.getElementById('user-text');
                let htmlUser = '';

                a.data.forEach(element => {
                    console.log(element);
                    let htmlElement = `<p>${element.fname}</p>
                <p>${element.lname}</p>`;

                    htmlUser += htmlElement;
                });

                userEle.innerHTML = htmlUser;
            })
    }
}

const signUpBtn = document.getElementById('sign-up-button');

signUpBtn.addEventListener('click', (e) => {
    e.preventDefault();
    loadData();
    setTimeout(() => {
        window.location.href = "../to-do-app/index.html";
    }, 2000);
})
console.log(loadData());



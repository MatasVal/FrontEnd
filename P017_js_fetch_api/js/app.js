const url = 'https://swapi.dev/api/species'

//const url = 'https://api.meteo.lt/v1/places/vilnius'

const options = {}

const result = {};

const loadDataSimple = () => {
    fetch(url)
        //.then( response => response.json() )
        .then(res => {
            if (res.ok) {
                console.log(res);
                return res.json();
            }
            else {
                console.log("Got error.Status : " + res.status);
            }

        })
        .then(data => console.log(data.results[2]));
}



const loadDataAsync = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

loadDataAsync();
console.log("Mes dabar esam cia");

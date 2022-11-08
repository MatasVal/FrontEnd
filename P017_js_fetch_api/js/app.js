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
        showData(data);
    } catch (error) {
        console.error(error);
    }
}

const loadMultiData = async() => {
    const url1 = 'https://swapi.dev/api/species'
    const url2 = 'https://swapi.dev/api/species'
    const url3 = 'https://swapi.dev/api/species'

    const responses = await Promise.all([
        fetch(url1),
        fetch(url2),
        fetch(url3)
        ]);

    const multiPromises = responses.map( r => r.json());
    const finalData = await Promise.all( multiPromises);
    processData(finalData);
}

const processData = (arr) => {
    //processing arr as data
}

loadDataAsync();
console.log("Mes dabar esam cia");


const showData = data => {
console.log(data);
}
const url = 'https://swapi.dev/api/species'

//const url = 'https://api.meteo.lt/v1/places/vilnius'
const options = {}

const result = {};

fetch(url, options)
//.then( response => response.json() )
.then( res => {
if(res.ok)
{
    console.log( res );
    return res.json();
}
else{
    console.log("Got error.Status : " + res.status);
}

    
}).then(data => console.log(data.results[2]));





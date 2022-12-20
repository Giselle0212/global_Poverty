const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c9c7e17bdcmshf50c7817141dd28p1b69e8jsn02ee9a2cf585',
        'X-RapidAPI-Host': 'community-worldbank.p.rapidapi.com'
    }
};
fetch('https://community-worldbank.p.rapidapi.com/datacatalog?format=json', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

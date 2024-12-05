var maxComic 
var currentComic

window.onload = function() {
    // hämta senaste comic
    getComic('latest');
    // sätter funkonalitet för nav knappar
}

function getComic(which) {
    //hämta (fetch) data från xkcd api
    fetch('https://xkcd.vercel.app/?comic='+ which);
        .then(function(response){
            //kolla att ok 200
            if (response.status === 200) {
                return response.json();
            } else {
                // throw error
                throw new Error;
            }
        })
        .then(function(data){
            
        })
}
//Definierar globala variabler för nuvarande och största comic nummer
var maxComic = -1;
var currentComic = -1;


window.onload = function(){
    //hämta senaste comic
    getComic('latest');
    //sätter funktionalitet för nav knappar
    document.getElementById('first').addEventListener('click',function(){
        if(currentComic!=1){
            getComic(1);
        }
    })
}

function getComic(which){
    //Hämta(fetch) data från xkcd api
    fetch('https://xkcd.vercel.app/?comic='+which)
        .then(function(response){
            //Kolla om svaret är ok(200)
            if(response.status === 200){
                return response.json();
            } else {
                //Kastar ett felmeddelande om status inte är ok
                throw new Error('Failed to load comic');
            }
        })
        .then(function(data){
            //Uppdatera maxComic värde
            if(maxComic < data.num){
                maxComic=data.num;
            }
            //Skicka json data för behandling till DOM
            console.log(data);
            appendComic(data);
        })
        .catch(function(error){
            //logga eventuella errors
            console.log('Error: ', error);
        })
}

function appendComic(data){
    let img = document.getElementById(theComic);
    img.alt = data.title;
    console.log(data.img);
    img.src = data.img;
    document.getElementById("linkTo").innerHTML = data.img;
}
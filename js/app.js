
// Create an array of your team members. It should be an array of objects having their names, 
// image (should be a link to the person's image in your image folder) you can get it from slack 
// or anywhere track, best food, complexion, things learnt (an array of HTML, CSS …), best movie, age. 
// Ensure you indent properly and use the proper folder structure:

let teamHercules = [  
      {
        name: "Ikpa Precious",
        image: "img/Precious.jpg",
        track: "Front End Developer",
        bestFood: "Rice and Beans",       
        bestMovie: "3 Idiots",
        complexion: "Fair",
        learnt: "HTML, CSS, Bootstrap",
        age: "25",   
    },
    {
        name: "Alao Martha",
        image: "img/Martha.jpg",
        track: "Front End Developer",
        bestFood: "Rice and Beans",       
        bestMovie: "3 Idiots",
        complexion: "Dark",
        learnt: "HTML, CSS, Bootstrap",
        age: "25",   
    },
    {
        name: "Fred",
        image: "img/aSafesquare.jpg",
        track: "Front End Developer",
        bestFood: "Rice and Beans",       
        bestMovie: "3 Idiots",
        complexion: "Dark",
        learnt: "HTML, CSS, Bootstrap",
        age: "25",   
    },
    {
        name: "Edward",
        image: "img/Edward.jpg",
        track: "Front End Developer",
        bestFood: "Rice and Beans",       
        bestMovie: "3 Idiots",
        complexion: "Dark",
        learnt: "HTML, CSS, Bootstrap",
        age: "25",   
    },
    {
        name: "Micheal",
        image: "img/Micheal.jpg",
        track: "Front End Developer",
        bestFood: "Rice and Beans",       
        bestMovie: "3 Idiots",
        complexion: "Dark",
        learnt: "HTML, CSS, Bootstrap",
        age: "25",   
    },
    {
        name: "Victor",
        image: "img/Victor.jpg",
        track: "Front End Developer",
        bestFood: "Rice and Beans",       
        bestMovie: "3 Idiots",
        complexion: "Dark",
        learnt: "HTML, CSS, Bootstrap",
        age: "25",   
    },
    {
        name: "Ugochukwu Nwoko",
        image: "img/Ugochukwu.png",
        track: "Front End Developer",
        bestFood: "Rice and Beans",       
        bestMovie: "3 Idiots",
        complexion: "Dark",
        learnt: "HTML, CSS, Bootstrap",
        age: "25",   
    },
]


// Using the for each or for loop, display the names of everyone.
// You can use Bootstrap or plain HTML and CSS but it should be responsive 
// and beautiful, showing their images and their details. Add a button on the card 
// that when clicked can alert the name of each person clicked. You can beautify it how best you can

let row = document.querySelector(".row");

for (let i = 0; i < teamHercules.length; i++) {
    let card =   '<div class="col-lg-4 col-md-6 col-sm-12">' +
                    '<div class="card">' +
                        '<div class="text-center pt-3">'+
                            '<img src=" ' + teamHercules[i].image + ' " class="w-25">'+
                        '</div>'+                    
                        '<div class="card-body">'+
                            '<h5 class="card-title text-dark">' + '<strong> Name:</strong>' + teamHercules[i].name + '</h5>' +
                            '<p class="card-info text-dark">' +  '<strong> Track:</strong>'  + teamHercules[i].track + '</p>'+
                            '<p class="card-info text-dark">'  + '<strong> Best Food:</strong>' +  teamHercules[i].bestFood + '</p>'+
                            '<p class="card-info text-dark">' +  '<strong> Complexion:</strong>' +  teamHercules[i].complexion + '</p>'+
                            '<p class="card-info text-dark">' +  '<strong> Learnt:</strong>' +  teamHercules[i].learnt + '</p>'+
                            '<p class="card-info text-dark">' +  '<strong> Best Movie:</strong>'+  teamHercules[i].bestMovie + '</</p>'+
                            '<p class="card-info text-dark">'  + '<strong> Age:</strong>' + teamHercules[i].age + '</p>'+
                            ' <button class="btn btn-outline-primary pt-1" onClick="clickMe('+ i + ')">Click Me</button>'
                            
                        '</div>'+
                    '</div>'+
                '</div>';

    row.innerHTML += card;                                   
};

let onClick = "Hi... I am ";

function clickMe(i) {
    
    alert( onClick + " " + teamHercules[i].name + " " + "Welcome to my team");

};

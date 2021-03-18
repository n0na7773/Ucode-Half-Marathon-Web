let movie1 = document.getElementById("movie1");
let movie2 = document.getElementById("movie2");
let movie3 = document.getElementById("movie3");
let title = document.getElementById("title");
let actor1 = document.getElementById("actor1");
let actor2 = document.getElementById("actor2");
let actor3 = document.getElementById("actor3");
let actor4 = document.getElementById("actor4");
let actor5 = document.getElementById("actor5");
let desc = document.getElementById("desc");
let image = document.getElementById("source");

var status = 0;

function web() {
    status = 0;
    update(status);
}
function days() {
    status = 1;
    update(status);
}
function padre() {
    status = 2;
    update(status);
}

function update() {
    switch (status) {
    case '0':
        movie1.style.borderLeft = "2px solid blue"
        movie2.style.borderLeft = "none"
        movie3.style.borderLeft = "none"
        title.innerText = "Dark Web: Cicada 3301"
        date.innerHTML = "2021,&nbsp;&nbsp;USA,&nbsp;&nbsp;Mystery And Thriller, &nbsp;Comedy, &nbsp;Action,&nbsp;&nbsp;&nbsp;&nbsp;100min";
        actor1.innerText = "Jack Kesy";
        actor2.innerText = "Ron Funches";
        actor3.innerText = "Alan Ritchson";
        actor4.innerText = "Conor Leslie";
        actor5.innerText = "Kris Holden-Ried";
        desc.innerText = "This intense, high-speed cyber-thriller is based on a series of mysterious, unsolved real-life events. It starts as genius hacker Connor discovers Cicada 3301, an online treasure hunt that could be a recruiting tool for a secret society. Soon Connor, art-expert friend Avi, and secretive librarian Gwen are dashing from graffiti sites to ancient libraries to uncover real-world clues. But they must outrun aggressive NSA agents, also hot on the trail of Cicada, who want the glory for themselves.";
        image.src = "https://cdn.flickeringmyth.com/wp-content/uploads/2021/01/Cicada-3301-1-600x858.jpg";
        break;
    case '1':
        movie1.style.borderLeft = "none"
        movie2.style.borderLeft = "2px solid blue"
        movie3.style.borderLeft = "none"
        title.innerText = "Last Three Days"
        date.innerHTML = "2020, &nbsp;&nbsp;USA, &nbsp;&nbsp;Action, &nbsp;Crime, &nbsp;Mystery, &nbsp;&nbsp;&nbsp;&nbsp;86min";
        actor1.innerText = "Robert Palmer Watkins";
        actor2.innerText = "Thomas Wilson Brown";
        actor3.innerText = "Roy Huang";
        actor4.innerText = "Gina Hiraizumi";
        actor5.innerText = "Clint Jung";
        desc.innerText = "After getting mixed up with a dangerous crime syndicate, an undercover cop wakes up to discover he is missing his partner, his wife, and three days of his life.";
        image.src = "https://i.ytimg.com/vi/w9WhCnLKCO0/mqdefault.jpg";
        break;
    case '2':
        movie1.style.borderLeft = "none"
        movie2.style.borderLeft = "none"
        movie3.style.borderLeft = "2px solid blue"
        title.innerText = "Padrenostro"
        date.innerHTML = "2021,&nbsp;&nbsp;Russia, &nbsp;&nbsp;Drama, &nbsp;&nbsp;120min";
        actor1.innerText = "Pierfrancesco Favino";
        actor2.innerText = "Barbara Ronchi";
        actor3.innerText = "Mattia Garaci";
        actor4.innerText = "Francesco Gheghi";
        actor5.innerText = "Lea Favino";
        desc.innerText = "Two young boys, Valerio and Christian, form a powerful friendship over the summer.";
        image.src ="https://media.kg-portal.ru/movies/p/padrenostro/posters/padrenostro_1.jpg";
        break;
    }
}
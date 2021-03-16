const skelbimai = [
    {
        img1 : "img/1.jpg",
        img2 : "img/1_2.jpg",
        kaina : "640",
        miestas : "Vilnius",
        mikrorajonas : "Šeškinė",
        adresas : "Buivydiškių g. 14",
        plotas : "230",
        kambariuSk : "2",
        aukstas: "0",
        aukstuSk : "3",
        paskirtis : "sandelyiavimo",
        statybosM : "1987",
        tipas : "sandelys",
        sildymas : "nėra",
    },
    {
        img1 : "img/2.jpg",
        img2 : "img/2_2.jpg",
        kaina : "280",
        miestas : "Vilnius",
        mikrorajonas : "Šiaurės miestelis",
        adresas : "Lukšio g. 34",
        plotas : "60",
        kambariuSk : "3",
        aukstas: "4",
        aukstuSk : "4",
        paskirtis : "Administracinės",
        statybosM : "1976",
        tipas : "komercinis",
        sildymas : "elektra",
    },
    {
        img1 : "img/3.jpg",
        img2 : "img/3_2.jpg",
        kaina : "1000",
        miestas : "Vilnius",
        mikrorajonas : "Senamiestis",
        adresas : "Arsenalo g. 5",
        plotas : "100",
        kambariuSk : "3",
        aukstas: "",
        aukstuSk : "3",
        paskirtis : "ginybinė",
        statybosM : "13a pabaigoje",
        tipas : "pilis",
        sildymas : "malkomis",
    },
    {
        img1 : "img/4.jpg",
        img2 : "img/4_2.jpg",
        kaina : "5000",
        miestas : "Jakų k.",
        mikrorajonas : "",
        adresas : "Jakų g. 1",
        plotas : "950",
        kambariuSk : "35",
        aukstas: "1",
        aukstuSk : "1",
        paskirtis : "komercinė",
        statybosM : "2018",
        tipas : "",
        sildymas : "dujinis",
    },
    {
        img1 : "img/5.jpg",
        img2 : "img/5_2.jpg",
        kaina : "420",
        miestas : "Bikinibotomas",
        mikrorajonas : "Užumiestis",
        adresas : "Kriauklės g. 124",
        plotas : "69",
        kambariuSk : "3",
        aukstas: "1",
        aukstuSk : "1",
        paskirtis : "Gyvenamoji",
        statybosM : "1999",
        tipas : "Ananasas",
        sildymas : "dujinis",
    },
    {
        img1 : "img/6.jpg",
        img2 : "img/6_2.jpg",
        kaina : "700",
        miestas : "Bikinibotomas",
        mikrorajonas : "Užumiestis",
        adresas : "Kriauklės g. 118",
        plotas : "42",
        kambariuSk : "1",
        aukstas: "0",
        aukstuSk : "1",
        paskirtis : "Gyvenamoji",
        statybosM : "1999",
        tipas : "Akmuo",
        sildymas : "elektrinis",
    }


];

const main = document.querySelector('main');

skelbimai.forEach((skelbimas) => {

    const card = document.createElement('div');
    card.classList = 'card';

    const structure = `<div class="pic"><img src="${skelbimas.img1}" </div>
    <div class="text">
        <h3 class="name">${skelbimas.miestas}</h3>
        <p class="adress"><i class="fas fa-map-pin"></i> ${skelbimas.adresas}</p>
        <p class="about">${skelbimas.kaina}</p>

    </div>
 `

    card.innerHTML = structure;
    main.appendChild(card);
    
});
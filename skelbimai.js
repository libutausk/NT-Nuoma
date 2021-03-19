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
        paskirtis : "sandeliavimo",
        statybosM : "1987",
        tipas : "mūrinis",
        sildymas : "nėra",
        // link : "detaliau/1.html"
    },
    {
        img1 : "img/2.jpg",
        img2 : "img/2_2.jpg",
        kaina : "180",
        miestas : "Kaunas",
        mikrorajonas : "Centras",
        adresas : "centro g. 26",
        plotas : "40",
        kambariuSk : "2",
        aukstas: "1",
        aukstuSk : "1",
        paskirtis : "administracinės",
        statybosM : "1978",
        tipas : "mūrinis",
        sildymas : "dujinis",
        // link : "detaliau/2.html"
    },
    

];

const main = document.querySelector('main');

skelbimai.forEach((skelbimas) => {

    const card = document.createElement('div');
    card.classList = 'card';

    const structure = `
    <div class="stats">
        <img src="${skelbimas.img1}" alt="${skelbimas.paskirtis}">
        <div class="midle">
            <h4>${skelbimas.kambariuSk} kambarių, ${skelbimas.paskirtis} paskirties NT nuoma</h4>
            <div class="detales"><div><p>miestas: ${skelbimas.miestas}</p>
                <p>rajonas: ${skelbimas.mikrorajonas}</p>
                </div>
                <div><p>paskirtis: ${skelbimas.paskirtis}</p>
                    <p>kaina: ${skelbimas.kaina} &euro;</p></div></div>
        </div>
    </div>
    <a href="#">detaliau</a>

 `

    card.innerHTML = structure;
    main.appendChild(card);
    
});
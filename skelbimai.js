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
        paskirtis : "sandėliavimo",
        statybosM : "1987",
        tipas : "mūrinis",
        sildymas : "nėra",
        link : "detaliau/1.html"
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
        link : "detaliau/2.html"
    },
    {
        img1 : "img/3.jpeg",
        img2 : "img/3_2.jpeg",
        kaina : "2000",
        miestas : "Vilnius",
        mikrorajonas : "Dvarčionys",
        adresas : "Keramikų g. 15",
        plotas : "1600",
        kambariuSk : "1",
        aukstas: "1",
        aukstuSk : "1",
        paskirtis : "sandėliavimo",
        statybosM : "1994",
        tipas : "mūrinis",
        sildymas : "nėra",
        link : "detaliau/3.html"
    },
    {
        img1 : "img/4.jpg",
        img2 : "img/4_2.jpg",
        kaina : "1200",
        miestas : "Vilnius",
        mikrorajonas : "Žemieji Paneriai",
        adresas : "Savanorių pr. 36",
        plotas : "800",
        kambariuSk : "2",
        aukstas: "1",
        aukstuSk : "3",
        paskirtis : "gamybinės",
        statybosM : "2001",
        tipas : "mūrinis",
        sildymas : "dujinis",
        link : "detaliau/4.html"
    },
    {
        img1 : "img/5.jpeg",
        img2 : "img/5_2.jpeg",
        kaina : "213",
        miestas : "Vilnius",
        mikrorajonas : "Vilkpėdė",
        adresas : "Vilkpėdės g. 41",
        plotas : "71",
        kambariuSk : "3",
        aukstas: "2",
        aukstuSk : "2",
        paskirtis : "admistracinės",
        statybosM : "2004",
        tipas : "mūrinis",
        sildymas : "elektrinis",
        link : "detaliau/5.html"
    },
    {
        img1 : "img/6.jpeg",
        img2 : "img/6_2.jpeg",
        kaina : "350",
        miestas : "Vilnius",
        mikrorajonas : "Senamiestis",
        adresas : "Pylimo g. 14",
        plotas : "20",
        kambariuSk : "1",
        aukstas: "1",
        aukstuSk : "2",
        paskirtis : "prekybinės",
        statybosM : "1906",
        tipas : "mūrinis",
        sildymas : "dujinis",
        link : "detaliau/6.html"
    },
    {
        img1 : "img/7.jpeg",
        img2 : "img/7_2.jpeg",
        kaina : "300",
        miestas : "Vilnius",
        mikrorajonas : "Antakalnis",
        adresas : "Olandų g. 35",
        plotas : "200",
        kambariuSk : "1",
        aukstas: "0",
        aukstuSk : "2",
        paskirtis : "gamybinės",
        statybosM : "1983",
        tipas : "mūrinis",
        sildymas : "nėra",
        link : "detaliau/7.html"
    },
    {
        img1 : "img/8.jpg",
        img2 : "img/8_2.jpg",
        kaina : "600",
        miestas : "Vilnius",
        mikrorajonas : "Senamiestis",
        adresas : "Odminių g. 64",
        plotas : "60",
        kambariuSk : "1",
        aukstas: "0",
        aukstuSk : "2",
        paskirtis : "administracinės",
        statybosM : "1998",
        tipas : "mūrinis",
        sildymas : "elektrinis",
        link : "detaliau/8.html"
    },
    {
        img1 : "img/9.jpg",
        img2 : "img/9_2.jpg",
        kaina : "300",
        miestas : "Vilnius",
        mikrorajonas : "Jeruzalė",
        adresas : "Ateities g. 5",
        plotas : "45",
        kambariuSk : "1",
        aukstas: "3",
        aukstuSk : "3",
        paskirtis : "admistracinės",
        statybosM : "2000",
        tipas : "mūrinis",
        sildymas : "dujinis",
        link : "detaliau/9.html"
    },
    {
        img1 : "img/10.jpg",
        img2 : "img/10_2.jpg",
        kaina : "945",
        miestas : "Vilnius",
        mikrorajonas : "Šnipiškės",
        adresas : "Slucko g. 13",
        plotas : "105",
        kambariuSk : "3",
        aukstas: "1",
        aukstuSk : "2",
        paskirtis : "prakybinės",
        statybosM : "1984",
        tipas : "mūrinis",
        sildymas : "elektrinis",
        link : "detaliau/10.html"
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
    <a href="${skelbimas.link}">detaliau</a>

 `

    card.innerHTML = structure;
    main.appendChild(card);
    
});
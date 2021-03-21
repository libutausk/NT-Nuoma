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
        <img class="homepage_img" src="${skelbimas.img1}" alt="${skelbimas.paskirtis}">
        <div class="middle">
            <h4>${skelbimas.kambariuSk} kambario/ų, ${skelbimas.paskirtis} paskirties nekilnojamo turto nuoma</h4>
            <div class="info"><div><p>miestas: ${skelbimas.miestas}</p>
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
//--------------------------------------------------------------
const miestai=[
  {
    miestas: 'Miestas',
    mikrorajonai: ['Mikrorajonas']
  },
  {
    miestas: 'Alytus',
    mikrorajonai: ['Vidzgiris', 'Putinai', 'Dainava', 'Senamiestis', 'Centras', 'Pirmas Alytus']
  },
  {
    miestas: 'Kaunas',
    mikrorajonai: ['Žaliakalnis', 'Šilainiai', 'Senamiestis', 'Centras', 'Kalniečiai', 'Aukštieji Šančiai', 'Žemieji Šančiai', 'Aleksotas']
  },
  {
    miestas: 'Vilnius',
    mikrorajonai: ['Šeškinė', 'Senamiestis', 'Antakalnis', 'Baltupiai', 'Jeruzalė', 'Paneriai', 'Vilkpėdė', 'Dvarčionys', 'Centras']
  }
];
for(var i=1; i<miestai.length; i++){
  miestai[i].mikrorajonai.sort();
}

const selectCity=document.getElementById('selectCity');
miestai.forEach((miestas) => {
  const option=document.createElement('option');
  selectCity.appendChild(option);
  option.innerText=miestas.miestas;
  option.value=miestas.miestas;
});

function ChangeDistrictList(){
  var cityList=document.getElementById('selectCity');
  var districtList=document.getElementById('selectDistrict');
  var index=cityList.selectedIndex;   // pasirinkto miesto indeksas

  while(districtList.options.length){  // isvalo mikrorajonu pasirinkimus
    districtList.remove(0);
  }

  if(index!=0){   // kad nepridetu 'mikrorajonas' pasirinkimui 'miestas', nes jis ir tai jau pridetas
    var option=document.createElement('option');
    districtList.appendChild(option).innerText="Mikrorajonas";
    option.value="Mikrorajonas";
    districtList.appendChild(option);
  }

  for(var i=0; i<miestai[index].mikrorajonai.length; i++){  // prideda pasirinkto miesto mikrorajonys
    var option=document.createElement('option');
    districtList.appendChild(option).innerText=miestai[index].mikrorajonai[i];
    option.value=miestai[index].mikrorajonai[i];
    districtList.appendChild(option);
  }
}

const paskirtys=['administracinės', 'sandėliavimo', 'prekybinės', 'gamybinės'];
paskirtys.sort();
const selectPurpose=document.getElementById('selectPurpose');
for(i in paskirtys){
    const option=document.createElement('option');
    selectPurpose.appendChild(option);
    option.innerText=paskirtys[i];
    option.value=paskirtys[i];
}

function displayCard(skelbimai, i){  // atspausdina skelbima
  const card = document.createElement('div');
  card.classList = 'card';
  const structure = `
  <div class="stats">
      <img src="${skelbimai[i].img1}" alt="${skelbimai[i].paskirtis}">
      <div class="midle">
          <h4>${skelbimai[i].kambariuSk} kambarių, ${skelbimai[i].paskirtis} paskirties NT nuoma</h4>
          <div class="detales"><div><p>miestas: ${skelbimai[i].miestas}</p>
              <p>rajonas: ${skelbimai[i].mikrorajonas}</p>
              </div>
              <div><p>paskirtis: ${skelbimai[i].paskirtis}</p>
                  <p>kaina: ${skelbimai[i].kaina} &euro;</p></div></div>
      </div>
  </div>
  <a href="${skelbimai[i].link}">detaliau</a>`
  card.innerHTML = structure;
  main.appendChild(card);
}

function searchFunction(){  // paspaudus mygtuka "ieskoti" suveikia sita funkcija
  var word=document.getElementById('byWord').value.toUpperCase();
  var ilgis=word.length;

  var cityList=document.getElementById('selectCity');
  var indexCity=cityList.selectedIndex;
  var choiceCity=miestai[indexCity].miestas;

  var districtList=document.getElementById('selectDistrict');
  var indexDistrict=districtList.selectedIndex;
  if(indexDistrict==0) var choiceDistrict='Mikrorajonas';  // reikia taip, nes objekto miestai masyve mikrorajonai nera 'mikrorajonas'
  else var choiceDistrict=miestai[indexCity].mikrorajonai[indexDistrict-1];

  var purposeList=document.getElementById('selectPurpose');
   var indexPurpose=purposeList.selectedIndex;
  if(indexPurpose==0) var choicePurpose='Paskirtis';
  else var choicePurpose=paskirtys[indexPurpose-1];

  var price1=document.getElementById('inputPrice1').value;
  var price2=document.getElementById('inputPrice2').value;

  var card=document.getElementsByClassName('card');
  while(card.length>0) card[0].remove();

  var notFound=document.getElementsByClassName('notFound');
  while(notFound.length>0) notFound[0].remove();

  var count=0;

  for(var i=0; i<skelbimai.length; i++){
    var space=0;
    var countWords=0;
    var countSpaces=0;
    for(var j=space; j<=ilgis; j++){

      if(word[j]==' ' || j==ilgis){
        if(word.slice(space, j)==skelbimai[i].kambariuSk.slice(0, j-space) || word.slice(space, j)==skelbimai[i].paskirtis.toUpperCase().slice(0, j-space) || word.slice(space, j)==skelbimai[i].miestas.toUpperCase().slice(0, j-space) || word.slice(space, j)==skelbimai[i].mikrorajonas.toUpperCase().slice(0, j-space) || word.slice(space, j)==skelbimai[i].kaina.slice(0, j-space)){
          countWords++;
        }
        space=j+1;
        countSpaces++;
      }
    }

    if(choiceCity==skelbimai[i].miestas || choiceCity=='Miestas'){

      if(choiceDistrict==skelbimai[i].mikrorajonas || choiceDistrict=='Mikrorajonas'){

        if(choicePurpose==skelbimai[i].paskirtis || choicePurpose=='Paskirtis'){

          if(price1!='' && price2!=''){
            if(skelbimai[i].kaina>=parseFloat(price1) && skelbimai[i].kaina<=parseFloat(price2)){
              if(countWords==countSpaces){
                displayCard(skelbimai, i);
                count++;
              }
            }
          } else if(price1!=''){
            if(skelbimai[i].kaina>=parseFloat(price1)){
              if(countWords==countSpaces){
                displayCard(skelbimai, i);
                count++;
              }
            }
          } else if(price2!=''){
            if(skelbimai[i].kaina<=parseFloat(price2)){
              if(countWords==countSpaces){
                displayCard(skelbimai, i);
                count++;
              }
            }
          } else{
            if(countWords==countSpaces){
              displayCard(skelbimai, i);
              count++;
            }
          }
        }
      }
    }
  }
  if(count==0){
    const notFound=document.createElement('p');
    main.appendChild(notFound);
    notFound.classList='notFound';
    notFound.innerText='rezultatų nerasta'
  }
}

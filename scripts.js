const chinaInfo = document.querySelector('.china');
const usaInfo = document.querySelector('.unitedStates');
const ukInfo = document.querySelector('.unitedKingdom');
const russiaInfo = document.querySelector('.russia');
const franceInfo = document.querySelector('.france');

let revealChina = document.getElementById('chinaList');
let revealUsa = document.getElementById('usList');
let revealUk = document.getElementById('ukList');
let revealRussia = document.getElementById('russiaList');
let revealFrance = document.getElementById('franceList');

chinaInfo.addEventListener('click', displayChinaStats);
usaInfo.addEventListener('click', displayUsaStats);
ukInfo.addEventListener('click', displayUkStats);
russiaInfo.addEventListener('click', displayRussiaStats);
franceInfo.addEventListener('click', displayFranceStats);


let dataArray = [];
async function covidInfo( ){
   let response = await fetch('https://api.covid19api.com/summary');
//    console.log(response);
   let covidData = await response.json()
   console.log(covidData); 
   dataArray.push(covidData.Countries[35]);
   dataArray.push(covidData.Countries[59]);
   dataArray.push(covidData.Countries[180]);
   dataArray.push(covidData.Countries[181]);
   dataArray.push(covidData.Countries[140]);

console.log(dataArray); 
}

covidInfo();


//! CHINA DISPLAY      
function displayChinaStats(e){
    e.preventDefault();
    while (revealChina.firstChild) {
        revealChina.removeChild(revealChina.firstChild);
    };
    console.log('China was clicked');
    document.getElementById('chinaImg').style.display = 'none';
    
    let chinaTC = dataArray[0].TotalConfirmed;
    console.log('ChinaTC:' + chinaTC);
    let chinaTD = dataArray[0].TotalDeaths;
    let chinaTR = dataArray[0].TotalRecovered;

    let chinaStatOne = document.createElement('li');
    let chinaStatTwo = document.createElement('li');
    let chinaStatThree = document.createElement('li');
    console.log(chinaStatOne);

    chinaStatOne.innerText = `Total Confirmed: ${chinaTC}`;
    chinaStatTwo.innerText = `Total Deaths: ${chinaTD}`;
    chinaStatThree.innerText = `Total Recovered: ${chinaTR}`;
    
    revealChina.appendChild(chinaStatOne);
    revealChina.appendChild(chinaStatTwo);
    revealChina.appendChild(chinaStatThree);

};

//! USA DISPLAY  
function displayUsaStats(e) {
    e.preventDefault();

    while (revealUsa.firstChild) {
        revealUsa.removeChild(revealUsa.firstChild);
    };

    console.log("USA was clicked");
    document.getElementById('usaImg').style.display = 'none';

    let usaTC = dataArray[3].TotalConfirmed;
    console.log('USATC: ' + usaTC);
    let usaTD = dataArray[3].TotalDeaths;
    let usaTR = dataArray[3].TotalRecovered;
 
    let usaStatOne = document.createElement('li');
    let usaStatTwo = document.createElement('li');
    let usaStatThree = document.createElement('li');
    console.log(usaStatOne);

    usaStatOne.innerText = `Total Confirmed: ${usaTC}`;
    usaStatTwo.innerText = `Total Deaths: ${usaTD}`;
    usaStatThree.innerText = `Total Recovered: ${usaTR}`;
    
    revealUsa.appendChild(usaStatOne);
    revealUsa.appendChild(usaStatTwo);
    revealUsa.appendChild(usaStatThree);

};

//! UK DISPLAY   
function displayUkStats(e) {
    e.preventDefault();

    while (revealUk.firstChild) {
        revealUk.removeChild(revealUk.firstChild);
    };

    console.log('UK was clicked');
    document.getElementById('ukImg').style.display = 'none';
    
    let ukTC = dataArray[2].TotalConfirmed;
    console.log('UKTC: ' + ukTC);
    let ukTD = dataArray[2].TotalDeaths;
    let ukTR = dataArray[2].TotalRecovered;

    let ukStatOne = document.createElement('li');
    let ukStatTwo = document.createElement('li');
    let ukStatThree = document.createElement('li');
    console.log(ukStatOne);

    ukStatOne.innerText = `Total Confirmed: ${ukTC}`;
    ukStatTwo.innerText = `Total Deaths: ${ukTD}`;
    ukStatThree.innerText = `Total Recovered: ${ukTR}`;

    revealUk.appendChild(ukStatOne);
    revealUk.appendChild(ukStatTwo);
    revealUk.appendChild(ukStatThree);
};

//! RUSSIA DISPLAY  
function displayRussiaStats(e) {
    e.preventDefault();

    while (revealRussia.firstChild) {
        revealRussia.removeChild(revealRussia.firstChild);
    };

    console.log('Russia was clicked');
    document.getElementById('russiaImg').style.display = 'none';

    let russiaTC = dataArray[4].TotalConfirmed;
    console.log('RussiaTC:' + russiaTC);
    let russiaTD = dataArray[4].TotalDeaths;
    let russiaTR = dataArray[4].TotalRecovered;
 
    let russiaStatOne = document.createElement('li');
    let russiaStatTwo = document.createElement('li');
    let russiaStatThree = document.createElement('li');
    console.log(russiaStatOne);

    russiaStatOne.innerText = `Total Confirmed: ${russiaTC}`;
    russiaStatTwo.innerText = `Total Deaths: ${russiaTD}`;
    russiaStatThree.innerText = `Total Recovered: ${russiaTR}`;
    
    revealRussia.appendChild(russiaStatOne);
    revealRussia.appendChild(russiaStatTwo);
    revealRussia.appendChild(russiaStatThree);
};

//! FRANCE DISPLAY  
function displayFranceStats(e) {
    e.preventDefault();

    while (revealFrance.firstChild) {
        revealFrance.removeChild(revealFrance.firstChild);
    };
    console.log('France was clicked');
    document.getElementById('franceImg').style.display = 'none';

    let franceTC = dataArray[1].TotalConfirmed;
    console.log('FranceTC: ' + franceTC);
    let franceTD = dataArray[1].TotalDeaths;
    let franceTR = dataArray[1].TotalRecovered;

    let franceStatOne = document.createElement('li');
    let franceStatTwo = document.createElement('li');
    let franceStatThree = document.createElement('li');
    console.log(franceStatOne);

    franceStatOne.innerText = `Total Confirmed: ${franceTC}`;
    franceStatTwo.innerText = `Total Deaths: ${franceTD}`;
    franceStatThree.innerText = `Total Recovered: ${franceTR}`;

    revealFrance.appendChild(franceStatOne);
    revealFrance.appendChild(franceStatTwo);
    revealFrance.appendChild(franceStatThree);
};
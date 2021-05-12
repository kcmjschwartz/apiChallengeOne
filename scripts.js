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

chinaInfo.addEventListener('click', fetchData);
usaInfo.addEventListener('click', fetchData2);
ukInfo.addEventListener('click', fetchData3);
russiaInfo.addEventListener('click', fetchData4);
franceInfo.addEventListener('click', fetchData5);

//! CHINA FETCH
function fetchData(e){
    e.preventDefault();
    fetch('https://api.covid19api.com/summary')
.then(results => {
    // console.log(results);
    return results.json();
})
.then(json => {
    // console.log(json);
    displayChinaStats(json);
        })
    }       
//! USA FETCH
function fetchData2(e){
            e.preventDefault();
            fetch('https://api.covid19api.com/summary')        
.then(results => {
    // console.log(results);
    return results.json();
})
.then(json => {
    // console.log(json);
    displayUsaStats(json);
        });        
    }
 //! UK FETCH   
function fetchData3(e){
            e.preventDefault();
            fetch('https://api.covid19api.com/summary')        
.then(results => {
    // console.log(results);
    return results.json();
})
.then(json => {
    // console.log(json);
    displayUkStats(json);
        });        
    }
 //! RUSSIA FETCH   
function fetchData4(e){
            e.preventDefault();
            fetch('https://api.covid19api.com/summary')        
.then(results => {
    // console.log(results);
    return results.json();
})
.then(json => {
    // console.log(json);
    displayRussiaStats(json);
        });        
    }
 //! FRANCE FETCH      
function fetchData5(e){
            e.preventDefault();
            fetch('https://api.covid19api.com/summary')        
.then(results => {
    // console.log(results);
    return results.json();
})
.then(json => {
    // console.log(json);
    displayFranceStats(json);
        });        
    }

//! CHINA DISPLAY      
function displayChinaStats(json) {
    while (revealChina.firstChild) {
        revealChina.removeChild(revealChina.firstChild);
    };
    console.log('China was clicked');
    document.getElementById('chinaImg').style.display = 'none';
    
    let chinaTC = json.Countries[35].TotalConfirmed;
    console.log('ChinaTC:' + chinaTC);
    let chinaTD = json.Countries[35].TotalDeaths;
    let chinaTR = json.Countries[35].TotalRecovered;

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
function displayUsaStats(json) {
    while (revealUsa.firstChild) {
        revealUsa.removeChild(revealUsa.firstChild);
    };

    console.log("USA was clicked");
    document.getElementById('usaImg').style.display = 'none';

    let usaTC = json.Countries[181].TotalConfirmed;
    console.log('USATC: ' + usaTC);
    let usaTD = json.Countries[181].TotalDeaths;
    let usaTR = json.Countries[181].TotalRecovered;
 
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
function displayUkStats(json) {
    while (revealUk.firstChild) {
        revealUk.removeChild(revealUk.firstChild);
    };

    console.log('UK was clicked');
    document.getElementById('ukImg').style.display = 'none';
    
    let ukTC = json.Countries[180].TotalConfirmed;
    console.log('UKTC: ' + ukTC);
    let ukTD = json.Countries[180].TotalDeaths;
    let ukTR = json.Countries[180].TotalRecovered;

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
function displayRussiaStats(json) {
    while (revealRussia.firstChild) {
        revealRussia.removeChild(revealRussia.firstChild);
    };

    console.log('Russia was clicked');
    document.getElementById('russiaImg').style.display = 'none';

    let russiaTC = json.Countries[140].TotalConfirmed;
    console.log('RussiaTC:' + russiaTC);
    let russiaTD = json.Countries[140].TotalDeaths;
    let russiaTR = json.Countries[140].TotalRecovered;
 
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
function displayFranceStats(json) {
    while (revealFrance.firstChild) {
        revealFrance.removeChild(revealFrance.firstChild);
    };
    console.log('France was clicked');
    document.getElementById('franceImg').style.display = 'none';

    let franceTC = json.Countries[59].TotalConfirmed;
    console.log('FranceTC: ' + franceTC);
    let franceTD = json.Countries[59].TotalDeaths;
    let franceTR = json.Countries[59].TotalRecovered;

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
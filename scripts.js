
const chinaInfo = document.querySelector('.china');
const usaInfo = document.querySelector('.unitedStates');
const ukInfo = document.querySelector('.unitedKingdom');
const russiaInfo = document.querySelector('.russia');
const franceInfo = document.querySelector('.france');

chinaInfo.addEventListener('click', displayChinaStats);
usaInfo.addEventListener('click', displayUsaStats);
ukInfo.addEventListener('click', displayUkStats);
russiaInfo.addEventListener('click', displayRussiaStats);
franceInfo.addEventListener('click', displayFranceStats);

fetch('https://api.covid19api.com/summary')
.then(results => {
    console.log(results);
    return results.json();
})
.then(json => {
    console.log(json);
    
    })

function displayChinaStats(e) {
    e.preventDefault();
   console.log('China was clicked');
   document.getElementById('chinaImg').style.visibility = 'hidden';
   

};
function displayUsaStats(e) {
    e.preventDefault();
    console.log("USA was clicked");
    document.getElementById('usaImg').style.display = 'none';
};
function displayUkStats(e) {
    e.preventDefault();
    console.log('UK was clicked');
    document.getElementById('ukImg').style.display = 'none';
};
function displayRussiaStats(e) {
    e.preventDefault();
    console.log('Russia was clicked');
    document.getElementById('russiaImg').style.display = 'none';
};
function displayFranceStats(e) {
    e.preventDefault();
    console.log('France was clicked');
    document.getElementById('franceImg').style.display = 'none';
};
var url = 'https://restcountries.eu/rest/v1/name/';
var list = document.querySelector('.container__list');

document.addEventListener('DOMContentLoaded', function() { 
  document.querySelector('.container__button')
  .addEventListener('click', function() {
    search();
  });
});

var search = function() {
  var input = document.querySelector('.container__input').value;
  if (!input.length) { input = 'Poland'; }
  fetch(url + input)
  .then(function(response) {
    return response.json();
  })
  .then(showResults);
}

var showResults = function(response) {
  list.innerHTML = '';
  response.forEach(function(item) {
    var li = document.createElement('li');
    
    if (!item.name.length) { item.name = 'no data'; }
    if (!item.subregion.length) { item.subregion = 'no data'; }
    if (!item.capital.length) { item.capital = 'no data'; }

    li.innerHTML = '<b>country</b>: '+ item.name +' <b>region</b>: '+
    item.subregion+' <b>capital</b>: '+ item.capital;
    list.appendChild(li);
  })
}
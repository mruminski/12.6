var url = 'https://restcountries.eu/rest/v1/name/';
var list = document.querySelector('.container__list');

document.querySelector('.container__button').addEventListener('click', function() {
  search();
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
  Array.prototype.forEach.call(response, function(item) {
    var li = document.createElement('li');
    li.innerText = item.name + ' Capital: '  + item.capital;
    list.appendChild(li);
  })
}
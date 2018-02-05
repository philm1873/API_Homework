const CountryList = function() {
  this.url = 'https://restcountries.eu/rest/v2/';
  this.regionalList = [];
}

CountryList.prototype.getCountries = function() {
  var request = new XMLHttpRequest();
  request.open('GET', this.url);

  request.addEventListener('load', function () {
      if (request.status !== 200) return;
        var jsonString = request.responseText;
        localStorage.setItem('countries', jsonString);
    });

    request.send();
};

CountryList.prototype.setRegionalList = function(region) {
  var jsonString = localStorage.getItem('countries');
  storedCountries = JSON.parse(jsonString);
  this.regionalList = storedCountries.filter(country => country.region === region);
};

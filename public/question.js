const Question = function(countryList) {
  this.country_list = countryList;
  this.country = null;
  this.questionText = '';
};

Question.prototype.selectCountry = function() {
  var randomIndex = Math.floor(Math.random() * this.country_list.regionalList.length);
  this.country = this.country_list.regionalList[randomIndex];
};

Question.prototype.createQuestionText = function() {
  this.selectCountry();
  this.questionText = 'Name the Capital City of: ' + this.country.name;
};

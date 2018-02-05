var setQuestion = function() {
  countryList.setRegionalList(this.value);

  var question = new Question(countryList);
  question.createQuestionText();

  var questionContainer = document.querySelector('#question-container');
  var questionView = new QuestionView(question, questionContainer);
  questionView.createView();

  var answerBox = questionContainer.querySelector('#answer-box');
  answerBox.addEventListener('change', function() {
    if (question.country.capital === this.value) {
      
    }
  });
};

var app = function() {
  countryList = new CountryList();
  countryList.getCountries();
  var regionSelected = document.querySelector('#region-list');
  regionSelected.addEventListener('change', setQuestion);
};

window.addEventListener('load', app);

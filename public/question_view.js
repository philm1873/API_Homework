const QuestionView = function(question, container) {
  this.question = question;
  this.container = container;
};

QuestionView.prototype.createView = function() {
  this.container.style.visibility = 'visible'

  var q = this.container.querySelector('h3');
  q.innerText = this.question.questionText;

  var buttons = this.container.querySelectorAll('button'); 

};

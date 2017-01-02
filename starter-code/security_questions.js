
securityQuestions = [
  {question: "How do you take your coffee?", expectedAnswer: "latte"},
  {question: "What type of car do you own?", expectedAnswer: "crv"},
  {question: "What is your \"other\" car?", expectedAnswer: "scooter"}
];

//program that asks the user for 3 security questions from data above, if correct then next question, otherwise "wrong answer" alert
var questions = function(){
  for (var i = 0; i < securityQuestions.length; i++) {
    var answer = prompt(securityQuestions[i].question);
    if(answer !== securityQuestions[i].expectedAnswer){
      alert("Sorry wrong answer.");
      return;
    }
  }
};
// questions();

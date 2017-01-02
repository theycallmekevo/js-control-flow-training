
//Program that continuously asks the user for their passwork till entered corrently
userLogin = [{ userName: "Kevin", passWord: "Donuts123"}]
var authentication = function(){
  while(answer !== userLogin[0].passWord){
    var answer = prompt("Hi " + userLogin[0].userName + ", please enter your password ");
    if (answer !== userLogin[0].passWord) {
      alert("Sorry your password doesn't match. Please try again");
    }
  }
};
// authentication();


//Bonus!
userLogin = [{ userName: "Kevin", passWord: "Donuts123"}]
var authenticationBonus = function(){
  for(var i = 1; i <= 3; i++){
    var answer = prompt("Hi " + userLogin[0].userName + ", please enter your password ");
    if (answer !== userLogin[0].passWord) {
      alert("Sorry your password doesn't match. Please try again");
    }
  }
};
// authenticationBonus();

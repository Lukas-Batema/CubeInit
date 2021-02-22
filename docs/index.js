function welcomeToSite() {
  var usersName = prompt("Enter your name!");
  var welcomeUsersName = "Welcome, " + usersName;
  
  document.getElementById("greetings").innerHTML += welcomeUsersName + "!";
}

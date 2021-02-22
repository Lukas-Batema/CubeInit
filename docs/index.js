function welcomeToSite() {
  var usersName = prompt("Enter your name!");
  var welcomeUsersName = "Welcome, " + usersName;
  
  document.getElementById("greetings").innerHTML += welcomeUsersName + "!";
}

function chooseTheme() {
  var currentTheme = "rel=\"stylesheet\" type=\"type/css\" href=\" \"";
  
  // Avaliable Themes
  var darkTheme = "dark";
  var lightTheme = "light";
  
  // Prompt for the user to choose a theme
  var askTheme = prompt("Type either, \"light\" for the light theme, or \"dark\" for the dark theme!");
  
  document.getElementById("theme").innerText += currentTheme;
}

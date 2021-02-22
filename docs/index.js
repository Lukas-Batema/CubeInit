function welcomeToSite() {
  var usersName = prompt("Enter your name!");
  var welcomeUsersName = "Welcome, " + usersName;
  
  document.getElementById("greetings").innerHTML += welcomeUsersName + "!";
}

function chooseTheme() {
  var currentTheme = "rel=\n"stylesheet\n" type=\n"type/css\n" href=\n" \n"";
  
  // Avaliable Themes
  var darkTheme = "dark";
  var lightTheme = "light";
  
  // Prompt for the user to choose a theme
  var askTheme = prompt("Type either, \n"light\n" for the light theme, or \n"dark\n" for the dark theme!");
  
  document.getElementById("theme").innerText += currentTheme;
}

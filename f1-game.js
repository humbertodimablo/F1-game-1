let choice = prompt("Choose your favorite F1 team\n Ferrari, Mercedes, Redbull or McLaren");
    
if (choice === "Mercedes".toLowerCase()) {
    alert("You loose this season")
}else if (choice === "McLaren".toLowerCase()) {
          alert("You won constructors!")
         }else if (choice === "Ferrari".toLowerCase()){
    alert("Hamilton Champion!")
}else if (choice === "Redbull".toLowerCase()){
    alert("Max is the Champ!")
} else {
    alert("Invalid game. Please choose a valid F1 team.");
}


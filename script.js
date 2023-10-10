function Game(){
    // Generate two random numbers in the range of 1 - 3
    let random1 = Math.floor(Math.random() * 3) + 1; // 1-3
    let random2 = Math.floor(Math.random() * 3) + 1; // 1-3
  
    // Assign the appropriate image
    let randomImageName1 = ""
    let randomImageName2 = ""
    if(random1 === 1){
      randomImageName1 = "img/rock.png"
    } else if (random1 === 2){
      randomImageName1 = "img/scissor.png"
    } else {
      randomImageName1 = "img/hand.png"
    }
  
    if(random2 === 1){
      randomImageName2 = "img/rock.png"
    } else if (random2 === 2){
      randomImageName2 = "img/scissor.png"
    } else {
      randomImageName2 = "img/hand.png"
    }
  
    let ImageSource1 =  randomImageName1; 
    let ImageSource2 =  randomImageName2; 
  
  
  
    // Update images
    document.querySelectorAll("img")[0].setAttribute("src", ImageSource1);
    document.querySelectorAll("img")[1].setAttribute("src", ImageSource2);
  
    // Print the winner. Use if statement or other appropriate logic.
    if (random1 === random2) {
      document.querySelector("h1").innerHTML = "Draw!";
    } else if (random1 === 1 && random2 === 2) {
      document.querySelector("h1").innerHTML = "Player 1 Wins!";
    } else if (random1 === 1 && random2 === 3) {
      document.querySelector("h1").innerHTML = "Player 2 Wins!";
    } else if (random1 === 2 && random2 === 1) {
      document.querySelector("h1").innerHTML = "Player 2 Wins!";
    } else if (random1 === 2 && random2 === 3) {
      document.querySelector("h1").innerHTML = "Player 1 Wins!";
    } else if (random1 === 3 && random2 === 1) {
      document.querySelector("h1").innerHTML = "Player 1 Wins!";
    } else {
      document.querySelector("h1").innerHTML = "Player 2 Wins!";
    }
  }
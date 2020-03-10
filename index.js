

var x = document.querySelectorAll("button");

for(var i = 0; i<7 ; i++)
{
    x[i].addEventListener("click",function(){

      var name = this.innerHTML;
      adio(name);
      animation(name);
  });
}

document.addEventListener("keypress",function(event){adio(event.key);animation(event.key);});

function adio(name)
{
  switch(name)
  {
      case "w":
        var audio = new Audio("sounds/crash.mp3");
        audio.play();

      case "a":
          var audio = new Audio("sounds/kick-bass.mp3");
          audio.play();

      case "s":
          var audio = new Audio("sounds/snare.mp3");
          audio.play();

      case "d":
          var audio = new Audio("sounds/tom-1.mp3");
          audio.play();

      case "j":
          var audio = new Audio("sounds/tom-2.mp3");
          audio.play();

      case "k":
          var audio = new Audio("sounds/tom-3.mp3");
          audio.play();

      case "l":
          var audio = new Audio("sounds/tom-4.mp3");
          audio.play();
  }

}

function animation(key)
{
    var active = document.querySelector("."+key);
    active.classList.add("pressed");
    setTimeout(function(){active.classList.remove("pressed")},100);
}

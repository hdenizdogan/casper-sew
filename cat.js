let casper = document.querySelector(".casper")

casper.addEventListener("click", petcasper);

let isPlaying = false;

function petcasper() {
    if(!isPlaying) {
        isPlaying = true;
        let audio = new Audio("pet.mp3")
        audio.play();
        audio.volume = 1;
        audio.addEventListener("ended", function() {
            isPlaying = false;
        });
    }

}

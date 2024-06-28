let pingu = document.querySelector(".pingu")

pingu.addEventListener("click", petPingu);

let isPlaying = false;

function petPingu() {
    if(!isPlaying) {
        isPlaying = true;
        let audio = new Audio("pet.mp3")
        audio.play();
        audio.volume = 0.3;
        audio.addEventListener("ended", function() {
            isPlaying = false;
        });
    }

}

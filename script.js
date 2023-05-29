//your JS code here. If required.
let audios = [
                "applause",
                "boo",
                "gasp",
                "tada",
                "victory",
                "wrong"
            ];


const buttons = document.getElementsByTagName("button");
let activeAudio = null;

function  expectPlayingAudio() {
	stopAudio();
	activeAudio.play();
}
function stopAudio() {
	if (activeAudio) {
		activeAudio.pause();
	}
}

for (let i = 0; i < buttons.length; i++) {
	buttons.addEventListener("click", (event)=>{
		//check if btn vaue == array.value
		let innerText = event.target.innerText;
		if(audios.includes(innerText)){
			//play that music
			let audioElement = document.createElement("audio");
			audioElement.src = `.sound/+${innerText}+.mp3`;
			audioElement.controls = true;
			activeAudio = audioElement;
			 expectPlayingAudio();
		}
		else{
			stopAudio();
		}
	})
}



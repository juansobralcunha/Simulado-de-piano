
//  seleciona tecla do piano
const pianoKeys = document.querySelectorAll(".piano-keys .key");
// seleciona o menu do volume
const volumeSlider = document.querySelector(".volume-slider input")
// checar as tecla do piano para utiliza um função para esconder a letras do teclado
const keyCheck = document.querySelector(".keys-check input");
// mapia as tecla do piano
let mapedKeys = [];
// funcionamento do áudio do piano
let audio = new Audio("src/tunes/a.wav")
const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`
    audio.play();
    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add("active")
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
}

// evento do click da teclas 
pianoKeys.forEach((key) => {
    
    key.addEventListener("click", ()=> playTune(key.dataset.key));
    
    mapedKeys.push(key.dataset.key)

})

// validação do mapeamento das teclas
document.addEventListener("keydown", (e) =>{

    if(mapedKeys.includes(e.key)){
        
        playTune(e.key)
    }
});
// volume do áudio
const handleVolume = (e) =>{
    audio.volume = e.target.value;

}
//esconder as letras do teclado 
const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"))
}

// chamada da função de volume
volumeSlider.addEventListener("input", handleVolume)
// chamada da função esconde as letras do teclado 
keyCheck.addEventListener("click", showHideKeys)
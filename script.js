const submit = document.getElementById("guess-button");
const input = document.getElementById("persons-name");
const anano = document.getElementById("ananos-Foto");
const description = document.querySelector(".description");
const advice = document.querySelector(".advice");
const pointing = document.querySelector(".pointing");
const hereSheIs = document.querySelector(".describing-white-sheet");
const picsContainer = document.querySelector(".pics-container");

const firstPic = document.querySelector(".firstPic");
const secondPic = document.querySelector(".secondPic");
const thirdPic = document.querySelector(".thirdPic");
const forthPic = document.querySelector(".forthPic");



submit.addEventListener("click", function(){
    const name = input.value.trim();
    console.log(name)
    if(name === "Annano" || name === "annano"|| name === "anano" || name === "Anano"||name === "ანანო"){
        description.innerHTML = "სწორია!"
        advice.innerHTML = "სწორია!!"
        pointing.innerHTML = "სწორია!!!"
        submit.innerHTML = "სწორია!!!!"
        hereSheIs.innerHTML = "ესეც მზეთუნახავი.."
        anano.style.filter = "blur(0px) brightness(1) contrast(1)"
        picsContainer.style.visibility = "visible"
        firstPic.src = "datanxmebis fotoebi/00d5cd39-3af9-423c-896b-7dad7539c956.jpg"
        secondPic.src = "datanxmebis fotoebi/@0813NJM.jpg"
        thirdPic.src = "datanxmebis fotoebi/download (16).jpg"
        forthPic.src = "datanxmebis fotoebi/download (17).jpg"
    }else{
        pointing.innerHTML = "ასე შორს ვერწახვალ :DD"
        hereSheIs.innerHTML = "მზეთუნახავი იმალება"
        anano.style.filter = "blur(5px) brightness(0.1) contrast(0.2)"
        picsContainer.style.visibility = "visible"
        firstPic.src = "uaris fotoebi/cat coffee cat hair brush cat crochet cat snacks cat snack cat fishing cat fish cat wood crafts cat.jpg"
        secondPic.src = "uaris fotoebi/download (18).jpg"
        thirdPic.src = "uaris fotoebi/download (19).jpg"
        forthPic.src = "uaris fotoebi/download (20).jpg"
    }
});